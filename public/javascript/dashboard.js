var username = document.getElementById("username");
var signOut = document.getElementById("signOut");
var mainDash = document.getElementById("mainDash");
var subDash = document.getElementById("subDash");
var poDiv = document.getElementById("poDiv");
var apDiv = document.getElementById("apDiv");
var mlDiv = document.getElementById("mlDiv");
var upDiv = document.getElementById("upDiv");
var rpDiv = document.getElementById("rpDiv");
var slDiv = document.getElementById("slDiv");
var title = document.getElementById("title"); // top of page
var nameInput = document.getElementById("nameInput"); // name of card holder
var value1Input = document.getElementById("value1Input"); // value 1 field
var value2Input = document.getElementById("value2Input"); // value 2 field
var submitBtn = document.getElementById("submitBtn"); // submit button
var feedText = document.getElementById("feedText"); // top of page
var backBtn = document.getElementById("backBtn");

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
    "Branden Madden": "356:BHR"
  },
  'Archive Papers': {
    "Sarah Waller": "347:RTM",
    "Stewart Walker": "956:PO3",
    "Keavy Horner": "345:SR5",
    "Yolanda Blaese": "058:SXY",
    "Arian Mccray": "235:9IT",
    "Laurence Chapman": "620:FTE",
    "Rhianne Beltran": "010:EEN",
    "Kendra Sutherland": "235:HEL",
    "Ronaldo Weir": "873:OW1",
    "Haris Hampton": "334:EGT",
    "William O'Quinn": "067:RE0",
    "Emilis Ventura": "994:26G"
  },
  'Modify Laundry': {
    "Evangeline Crane": "257:DH6",
    "Bernadette Mooney": "476:2UD",
    "Vernon Burnett": "132:PE6",
    "Daniaal Bruce": "736:VR7",
    "Emily Hester": "112:V0X",
    "Can Mitchell": "976:PL8",
    "Cora Stubbs": "346:ASC",
    "Jun Strickland": "098:PLS",
    "Kenneth Sheridan": "359:TNY",
    "Glen Norman": "123:45D",
    "Mateo Donovan": "643:UY8",
    "Madison Whitfield": "918:input2"
  },
  'Update Pass': {
    "Buddy Soto": "090:input2",
    "Tj Hackett": "012:input2",
    "Mitchell Payne": "104:input2",
    "Cadi Hebert": "678:input2",
    "Andrew Melendez": "348:input2",
    "Kyra Mathews": "995:input2",
    "Tia Hyde": "100:input2",
    "Nyle Carroll": "300:input2",
    "Hudson Parrish": "335:input2",
    "Hermione Davison": "985:input2",
    "Bentley Williams": "248:input2",
    "Antoinette Le": "965:input2"
  },
  'Release Power': {
    "Tina Pelopoly": "856:12A",
    "Nuha Wilkes": "128:R6G",
    "Raja Davison": "478:HT5",
    "Everly Hayward": "047:ST6",
    "Aaliyah Best": "376:PDH",
    "Sion Gamble": "195:295",
    "Suraj Luna": "973:274",
    "Jardel Mitchell": "528:FR7",
    "Demi Hood": "765:PY3",
    "Nicole Harris": "562:84G",
    "Sabiha Huang": "358:MN4",
    "Nicholas Caldwell": "160:ZX1"
  },
  'Sign License': {
    "Eric Juliana": "AU:RO:CK",
    "Harrison Ford": "83:23:40",
    "Mack Brynncel": "A5PB8:IOP73:PCL02",
    "Thomas Cirtrise": "PL0[NARC2]9%YUL(12)95:PLA{127&@GU8}PL0R73BV:HE3K(&{/IPT@BL3%}%&)M"
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

// create and populate cards
const cardTasksContainer = document.getElementById('tc');
// loop through cards types 1-5 until there are no more loops left
// 12 keys in types 1-5
const cardKeys = Object.keys(cards);
const poNames = Object.keys(cards['Process Order']);
const apNames = Object.keys(cards['Archive Papers']);
const mlNames = Object.keys(cards['Modify Laundry']);
const upNames = Object.keys(cards['Update Pass']);
const rpNames = Object.keys(cards['Release Power']);
const slNames = Object.keys(cards['Sign License']);
let slIndex = 0;
for(let i = 0; i < 12; i++) {
  // get i name in first card type through the fifth card type
  const poName = poNames[i]; // get name i at card 0
  const apName = apNames[i]; // get name i card 1
  const mlName = mlNames[i]; // get name i card 2
  const upName = upNames[i]; // get name i card 3
  const rpName = rpNames[i]; // get name i card 4
  const names = [poName, apName, mlName, upName, rpName];
  const types = ['Process Order', 'Archive Papers', 'Modify Laundry', 'Update Pass', 'Release Power'];
  let typeCounter = 0;
  names.forEach(name => {
    const taskCard = document.createElement("div");
    taskCard.classList.add('taskCard');
    const taskTitle = document.createElement("h2");
    const nameText = document.createElement("h5");
    taskTitle.appendChild(document.createTextNode(`${cardKeys[typeCounter]}`));
    nameText.appendChild(document.createTextNode(name));
    taskCard.appendChild(taskTitle);
    taskCard.appendChild(nameText);
    const cardData = cards[types[typeCounter]][name].split(':'); // array
    for(let i = 0; i < cardData.length; i++) {
      const p = document.createElement("p");
      let text;
      if (i == 0) {
        text = 'ID: ';
      } else if (i == 1) {
        text = 'SCC: ';
      }
      p.appendChild(document.createTextNode(`${text}${cardData[i]}`));
      taskCard.appendChild(p);
    }
    cardTasksContainer.appendChild(taskCard);
    typeCounter++;
  });
  // i = 2, 5, 8, 11 placements for singing cards
  if (i == 2 || i == 5 || i == 8 || i == 11) {
    const slName = slNames[slIndex]; //this has to be a different counter
    const taskCard = document.createElement("div");
    taskCard.classList.add('taskCard');
    const taskTitle = document.createElement("h2");
    const nameText = document.createElement("h5");
    taskTitle.appendChild(document.createTextNode(`${cardKeys[5]}`)); //5 is signing
    nameText.appendChild(document.createTextNode(slName));
    taskCard.appendChild(taskTitle);
    taskCard.appendChild(nameText);
    const cardData = cards['Sign License'][slName].split(':'); // arrays
    for(let i = 0; i < cardData.length; i++) {
      const p = document.createElement("p");
      let text = `Computer ${i + 1}: `;
      p.appendChild(document.createTextNode(`${text}?`));
      taskCard.appendChild(p);
    }
    cardTasksContainer.appendChild(taskCard);
    slIndex++;
  }
}

// add event listener to all cards
const btns = document.querySelectorAll('.taskCard');
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
      eraseOldData();
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
  subDash.style.display = "inline-flex";
  title.innerText = "Process Order";
})
apDiv.addEventListener("click", function () {
  mainDash.style.display = "none";
  subDash.style.display = "inline-flex";
  title.innerText = "Archive Papers";
})
mlDiv.addEventListener("click", function () {
  mainDash.style.display = "none";
  subDash.style.display = "inline-flex";
  title.innerText = "Modify Laundry";
})
upDiv.addEventListener("click", function () {
  mainDash.style.display = "none";
  subDash.style.display = "inline-flex";
  title.innerText = "Update Pass";
})
rpDiv.addEventListener("click", function () {
  mainDash.style.display = "none";
  subDash.style.display = "inline-flex";
  title.innerText = "Release Power";
})
slDiv.addEventListener("click", function () {
  mainDash.style.display = "none";
  subDash.style.display = "inline-flex";
  title.innerText = "Sign License";
})

// CARD SELECT ---------------------------------------------------------------- \/
function eraseOldData(){
  feedText.innerText = '';
  nameInput.value = '';
  value1Input.value = '';
  value2Input.value = '';
  subDash.style.display = "none";
  mainDash.style.display = "flex";
}
// DARK MODE ------------------------------------------------------------------ /\

//Dark Mode Toggle
const toggle = document.getElementById("darkMode");
const allStyle = document.querySelector("body > *");
toggle.checked = false;
function toggleDarkMode() {
  if (toggle.checked) {
    allStyle.style.color = "#d1cdc7";
    allStyle.style.backgroundColor = "#181a1b";
    nameInput.classList.toggle("firstN-dark");
    value1Input.classList.toggle("firstN-dark");
    value2Input.classList.toggle("firstN-dark");
    submitBtn.classList.toggle("gs-dark");
    backBtn.classList.toggle("gs-dark");
  } else {
    allStyle.style.color = "black";
    allStyle.style.backgroundColor = "white";
    nameInput.classList.toggle("firstN-dark");
    value1Input.classList.toggle("firstN-dark");
    value2Input.classList.toggle("firstN-dark");
    submitBtn.classList.toggle("gs-dark");
    backBtn.classList.toggle("gs-dark");
  }
}
toggle.addEventListener("click", toggleDarkMode);
backBtn.addEventListener("click", eraseOldData);

// DARK MODE ------------------------------------------------------------------ \/