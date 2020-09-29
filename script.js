//console.log("hello");
//Start of the Code Quiz, when the start button is clicked the HTML container is hidden
var startRow = document.getElementById("start-page");
var startButton = document.getElementById("start-btn");
var selections = document.getElementById("selection");
var options = document.getElementById("options");

var currentStage = 0;
var stages = [
  {
    name: "Commonly used data types DO NOT include:",
    options: ["strings", "booleans", "alerts", "numbers"],
  },
  {
    name: "The condition in an if / else statement is enclosed within ____.",
    options: ["quotes", "curly brackets", "parentheses", "square brackets"],
  },
];

function renderOptions(array) {
  for (var i = 0; i < array.length; i++) {
    var button = document.createElement("button");
    //console.log(array);
    button.setAttribute("class", "btn btn-info");
    button.textContent = array[i];
    button.setAttribute("data-value", array[i]);

    options.append(button);
  }
}

//identifies the selected button
options.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    console.log("you clicked the button");
    var selectedChoice = event.target.getAttribute("data-value");
    console.log(selectedChoice);

    setTimeout(function () {
      currentStage++;
      var optionsToDisplay = stages[currentStage].options;
      Options.textContent = "";
      renderOptions(optionsToDisplay);
    }, 2000);
  }
});

startButton.addEventListener("click", function () {
  startRow.style.display = "none";
  var optionsToDisplay = stages[currentStage].options;
  renderOptions(optionsToDisplay);
});
