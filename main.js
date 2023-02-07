// represents the current color of the text
let isBlue = false;

// changes the color of the text. if the text is not blue, turns blue.
// if it is blue, turns red
function buttonClicked() {
  if (isBlue) {
    document.getElementById("buttonDiv").style.color="red";
  } else {
    document.getElementById("buttonDiv").style.color="blue";
  }
  isBlue = !isBlue; // updates the variable
}
