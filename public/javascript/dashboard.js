var username = document.getElementById("username");
var signOut = document.getElementById("signOut");
var mainDash = document.getElementById("mainDash");
var subDash = document.getElementById("subDash");
var compTasks = document.getElementById("compTasks");
var poDiv = document.getElementById("poDiv");
var upDiv = document.getElementById("upDiv");
var slDiv = document.getElementById("slDiv");
var title = document.getElementById("title"); // top of page
var nameInput = document.getElementById("nameInput"); // name of card holder
var value1Input = document.getElementById("value1Input"); // value 1 field
var value2Input = document.getElementById("value2Input"); // value 2 field
var submitBtn = document.getElementById("submitBtn"); // submit button
var feedText = document.getElementById("feedText"); // top of page

var cards = {
  'Process Order': {
    "Jonah Roberts": "279:A8T",
    "Lauren Chance": "743:KTT",
    "Idris Johnston": "634:9OI",
    "Imani Wilde": "576:SYG",
    "Kristin Fry": "285:VSR",
    "Selena Eastwood": "563:7HG",
    "Luciano Huber": "112:PQB",
    "Vivek Mckay": "076:PMQ",
    "Eric Marshall": "468:VFG",
    "Zidane Cope": "663:L6A",
    "Danika Duarte": "002:ATS",
    "Branden Madden": "356:BHR",
    "Sarah Waller": "347:RTM",
    "Stewart Walker": "956:PO3",
    "Keavy Horner": "345:SR57",
    "Yolanda Blaese": "058:SXY8",
    "Arian Mccray": "235:9IT5",
    "Laurence Chapman": "620:FTE3",
    "Rhianne Beltran": "010:E1ND",
    "Kendra Sutherland": "235:HEL375",
    "Ronaldo Weir": "873:OW1PLE",
    "Haris Hampton": "334:EGTGER",
    "William O'Quinn": "067:RE0K87",
    "Emilis Ventura": "994:26G34T"
  },
  'Update Pass': {
    "Buddy Soto": "090:34H",
    "Tj Hackett": "012:98F",
    "Mitchell Payne": "104:GE2",
    "Cadi Hebert": "678:PME",
    "Andrew Melendez": "348:H20",
    "Kyra Mathews": "995:HGP",
    "Tia Hyde": "100:GH0",
    "Nyle Carroll": "300:MLT",
    "Hudson Parrish": "335:GHN",
    "Hermione Davison": "985:SLP",
    "Bentley Williams": "248:SCP",
    "Antoinette Le": "965:FGB",
    "Evangeline Crane": "257:DH6",
    "Bernadette Mooney": "476:2UD",
    "Vernon Burnett": "132:PE6T",
    "Daniaal Bruce": "736:VR75",
    "Emily Hester": "112:V0X4",
    "Can Mitchell": "976:PL8W",
    "Cora Stubbs": "346:ASCR",
    "Jun Strickland": "098:PLSFMY",
    "Kenneth Sheridan": "359:TNY34F",
    "Glen Norman": "123:45D67J",
    "Mateo Donovan": "643:UY8ERH",
    "Madison Whitfield": "918:RT6F23"
  },
  'Sign License': {
    "Eric Juliana": "AU:RO:CK:SS",
    "Harrison Ford": "83:23:40:68",
    "Mack Brynncel": "A5PB8:IOP73:PCL02:CHAM43",
    "Thomas Cirtrise": "PL0[NARC2]9%YUL(12)95:PLA{127&@GU8}PL0R73BV:HE3K(&{/IPT@BL3%}%&)M:D791(HDNT%$HW&)I{S}D4"
  }
};

// COOKIE --------------------------------------------------------------------- /\

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}; username.innerText = (getCookie('Simwork').split('%'))[0];

signOut.addEventListener("click", function () {
  document.cookie = 'Simwork' + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  location.href = '/';
})

// COOKIE --------------------------------------------------------------------- \/
// TASKS ---------------------------------------------------------------------- /\

// add event listener to all cards
const btns = document.querySelectorAll('.todos');
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function (e) {
    btns[i].style.display = "none";
  })
}

// when user submits a card
submitBtn.addEventListener("click", function () {
  if (cards[title.innerText][nameInput.value]) {
    //card is not complete
    if (cards[title.innerText][nameInput.value] == value1Input.value + ":" + value2Input.value) {
      // user is correct
      feedText.innerText = "Great! Card Complete!";
      // add a completion to database
      fetch('/complete', { method: 'GET' })
        .then(response => response.text())
        .then(text => {
          if (text == 'Confirmed') {
            console.log('Confirmed Card Complete')
          } else {
            console.log('Failed Card Complete')
          }
        })
      // delete this card from internat object
      delete cards[title.innerText][nameInput.value];
      // return to main dashboard
      subDash.style.display = "none";
      mainDash.style.display = "block";
    } else {
      //user got it wrong
      feedText.innerText = "Credentials Invalid";
    }
  } else {
    //card already completed
    feedText.innerText = "Name incorrect or card already complete!";
  }
})

// delete cards["PO"]["Jonah Roberts"];

// TASKS ---------------------------------------------------------------------- \/
// CARD SELECT ---------------------------------------------------------------- /\

poDiv.addEventListener("click", function () {
  mainDash.style.display = "none";
  subDash.style.display = "block";
  title.innerText = "Process Order";
})
upDiv.addEventListener("click", function () {
  mainDash.style.display = "none";
  subDash.style.display = "block";
  title.innerText = "Update Pass";
})
slDiv.addEventListener("click", function () {
  mainDash.style.display = "none";
  subDash.style.display = "block";
  title.innerText = "Sign License";
})

// CARD SELECT ---------------------------------------------------------------- \/
// DARK MODE ------------------------------------------------------------------ /\

//Dark Mode Toggle
const toggle = document.getElementById("darkMode");
const allStyle = document.querySelector("body > *");
toggle.checked = false;
function toggleDarkMode() {
  if (toggle.checked) {
    allStyle.style.color = "#d1cdc7";
    allStyle.style.backgroundColor = "#181a1b";
  } else {
    allStyle.style.color = "black";
    allStyle.style.backgroundColor = "white";
  }
}
toggle.addEventListener("click", toggleDarkMode);

// DARK MODE ------------------------------------------------------------------ \/