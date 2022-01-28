require('dotenv').config();
const cookieParser = require('cookie-parser');
var express = require('express');
var mysql = require('mysql');
var app = express();

app.use(cookieParser());
app.use(express.static('public'));
var server = app.listen(80, '0.0.0.0', function () {
  console.log('Server is listening on port 80');
})

var connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.MYSQLUSERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

connection.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log('Database Connected');
  }
})

app.get('/', function (req, res) {
  console.log(`[/]: Get request received at '/'`);
  res.sendFile('public/start.html', { root: __dirname });
})

app.get('/dashboard', function (req, res) {
  console.log(`[/dashboard]: Get request received at '/dashboard'`);
  res.sendFile('public/dashboard.html', { root: __dirname });
})

app.get('/complete', function (req, res) {
  console.log(`[/complete]: Get request received at '/complete'`);
  let userCookie = (req.cookies.Simwork).split(':');
  // queries update taskscompleted by adding one to taskscompleted
  connection.query("UPDATE `" + process.env.DATABASE + "`.`" + process.env.TABLE + "` SET `taskscompleted` = taskscompleted + 1 WHERE (`name` = '" + body[1] + "');", function (err, result, fields) {
    if (!!error) {
      console.log(`[/complete]: Error adding to taskscompleted at ${body[1]}`);
      res.send('Failed');
    } else {
      console.log(`[/complete]: Success adding to taskscompleted at ${body[1]}`);
      res.send('Confirmed');
    }
  });
})

app.post('/getStarted', (req, res) => {
  let body = ''; req.on('data', function (chunk) { body += chunk; });
  req.on('end', function () {
    console.log(`[/getStarted]: Post request received at '/getStarted' (${body})`);
    body = body.toLowerCase();
    // query for if the account exists already
    connection.query(`SELECT * FROM ${process.env.DATABASE}.${process.env.TABLE} WHERE name = ?`, [body], function (error, results, fields) {
      if (results.length > 0) {
        // user has an account already
        console.log('[/getStarted]: Name already registered');
        res.cookie(`Simwork`, `${body}`, { expires: new Date('05 25 2022') });
        res.send('Confirmed');
      } else {
        // user does not already have an account
        console.log('[/getStarted]: Name not registered');
        connection.query(`INSERT INTO ${process.env.DATABASE}.${process.env.TABLE} (name) VALUES ('${body}');`, function (error, result, field) {
          if (!!error) {
            console.log('[/getStarted]: There was an issue creating account');
            console.log(error);
            res.send('Failure');
          } else {
            console.log('[/getStarted]: Success creating account!');
            res.cookie(`Simwork`, `${body}`, { expires: new Date('05 25 2022') });
            res.send('Confirmed');
          }
        });
      }
    });
  })
})