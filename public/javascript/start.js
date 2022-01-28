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