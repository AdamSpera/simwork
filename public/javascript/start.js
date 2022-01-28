var firstN = document.getElementById("firstN");
var lastN = document.getElementById("lastN");
var real = document.getElementById("real");
var quest = document.getElementById("quest");
var submitBtn = document.getElementById("submitBtn");

// document.cookie = 'Simwork' + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';

submitBtn.addEventListener("click", function () {
  let sendValue = firstN.value + lastN.value;
  if ((real.checked || quest.checked) && firstN.value && lastN.value) {
    if (real.checked) {
      sendValue += ":real"
    } else if (quest.checked) {
      sendValue += ":quest"
    }

    fetch('/getStarted', { method: 'POST', body: sendValue })
      .then(response => response.text())
      .then(text => {
        if (text == 'Confirmed') {
          location.href = '/dashboard';
        } else {
          location.href = '/';
        }

      })
  }


})

//Dark Mode Toggle
const toggle = document.getElementById("darkMode");
const allStyle = document.querySelector("body > *");
toggle.checked = false;
function toggleDarkMode() {
  if (toggle.checked) {
    allStyle.style.color = "#d1cdc7";
    allStyle.style.backgroundColor = "#181a1b";
    submitBtn.classList.toggle("gs-dark");
  } else {
    allStyle.style.color = "black";
    allStyle.style.backgroundColor = "white";
    submitBtn.classList.toggle("gs-dark");
  }
}
toggle.addEventListener("click", toggleDarkMode);