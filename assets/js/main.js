
/* javascript */
function myFunction(userInput, acceptedResponses, pageOne, PageTwo, PageThree, options) {
  // define the variable tourValue & get the userInput value
  var tourValue = document.getElementById("userInput").value;
  // define the variable tour & get apply to all elements class tour
  // define accepted response as begin or Begin
  if (acceptedResponses.indexOf(tourValue) == 0) {
    options.innerHTML = window.open(pageOne, '_self');
  } else if (acceptedResponses.indexOf(tourValue) == 1) {
    options.innterHTML = window.open(PageTwo, '_self');
  }else if (acceptedResponses.indexOf(tourValue) == 1) {
    options.innterHTML = window.open(PageThree, '_self');
  }else {
    options.innerHTML = "You must enter 1 or 2.";
  }
}
