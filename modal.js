// Get the modal element
var modal = document.getElementById("answerModal");

// Get the button that opens the modal
var btn = document.getElementById("answerBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Handle the answer submission
var submitButton = document.getElementById("submitAnswer");
submitButton.addEventListener("click", function() {
  var answerText = document.getElementById("answerText").value;
  // Perform any necessary actions with the answer text
  console.log("Submitted answer: " + answerText);
  // Close the modal
  modal.style.display = "none";
});
