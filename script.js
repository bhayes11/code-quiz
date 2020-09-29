//console.log("hello");

var startRow = document.getElementById("start-page");
var startButton = document.getElementById("start-btn");
var quesOptions = document.getElementById("ques-selections");
var quesOptions = document.getElementById("ques-options");

startButton.addEventListener("click", function () {
  startRow.style.display = "none";
  renderQuesOptions();
});

function renderQuesOptions() {
  var availableChoices = ["strings", "booleans", "alerts", "numbers"];

  for (var i = 0; i < availableChoices.length; i++) {
    var button = document.createElement("button");

    button.setAttribute("class", "btn btn-info");
    button.textContent = availableChoices[i];
    button.setAttribute("data-value", availableChoices[i]);

    quesOptions.append(button);
  }
}
