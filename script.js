var closebtns = document.getElementsByClassName("close");
var i;

// For closing the window
for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}

// To copy text to clipboard
function copyText() {
    navigator.clipboard.writeText
        ("DBTR/222201998174");
}




