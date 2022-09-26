var closebtns = document.getElementsByClassName("close");
var i;

// For closing the window
for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
};
// To copy text to clipboard
function copyText() {
    navigator.clipboard.writeText
        ("DBTR/222201998174");
};


// Updating date and time
var date_Time = document.getElementsByClassName("dateTime");
var date = new Date();
const monthNames = ["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes  + ampm;
  return strTime;
};

for (let i = 0; i < date_Time.length; i++) {
  document.getElementsByClassName("dateTime")[i].innerHTML = `${date.getDate()} ${monthNames[date.getMonth()]} ${date.
    getFullYear()}, ${formatAMPM(date)} `
};

// Updating transfer amount
var transferredAmount = document.getElementById("transAmount");

// Updating sender's name
var fromName = document.getElementById("from");

