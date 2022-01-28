var username = document.getElementById("username");
var signOut = document.getElementById("signOut");
var mainDash = document.getElementById("mainDash");
var compTasks = document.getElementById("compTasks");
var poDiv = document.getElementById("poDiv");
var apDiv = document.getElementById("apDiv");
var mlDiv = document.getElementById("mlDiv");
var upDiv = document.getElementById("upDiv");
var rpDiv = document.getElementById("rpDiv");
var slDiv = document.getElementById("slDiv");

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

// var cards = {
//   PO : { 
//     "Jonah Roberts" : "279:A8T",
//     "Lauren Chance" : "743:KTT",
//     "Catharine Dee" : "634:POI"
//    },
//   AP : {
//     "name" : "input1:input2"
//   },
//   ML : { 
//     "name" : "input1:input2"
//    },
//   UP : {
//     "name" : "input1:input2"
//   },
//   RP : { 
//     "Tina Pelopoly" : "HWA:12"
//    },
//   SL : {
//     "Eric Timbler" : "12:45:74:89"
//   }
// };

// console.log(cards)
// if (cards["PO"]["Jonah Roberts"]) {
//   console.log("Jonah Detected")
// } else {
//   console.log("Jonah Not Detected")
// }

// delete cards["PO"]["Jonah Roberts"];

// TASKS ---------------------------------------------------------------------- \/
// CARD SELECT ---------------------------------------------------------------- /\

poDiv.addEventListener("click", function () {
  mainDash.style.display = "none";
})
apDiv.addEventListener("click", function () {
  mainDash.style.display = "none";
})
mlDiv.addEventListener("click", function () {
  mainDash.style.display = "none";
})
upDiv.addEventListener("click", function () {
  mainDash.style.display = "none";
})
rpDiv.addEventListener("click", function () {
  mainDash.style.display = "none";
})
slDiv.addEventListener("click", function () {
  mainDash.style.display = "none";
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