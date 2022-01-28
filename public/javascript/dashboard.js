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

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}; username.innerText = getCookie('Simwork');

signOut.addEventListener("click", function () {
  document.cookie = 'Simwork' + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  location.href = '/';
})

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