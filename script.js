//console.log("hello");
//Start of the Code Quiz, when the start button is clicked the HTML container is hidden
var startRow = document.getElementById("start-page");
var startButton = document.getElementById("start-btn");
var quesOneSelections = document.getElementById("ques-selections-one");
var quesOneOptions = document.getElementById("ques-options-one");
var quesTwoSelections = document.getElementById("ques-selections-two");
var quesTwoOptions = document.getElementById("ques-options-two");

function renderQuesOneOptions() {
  var availableChoicesOne = ["strings", "booleans", "alerts", "numbers"];

  for (var i = 0; i < availableChoicesOne.length; i++) {
    var button = document.createElement("button");

    button.setAttribute("class", "btn btn-info");
    button.textContent = availableChoicesOne[i];
    button.setAttribute("data-value", availableChoicesOne[i]);

    quesOneOptions.append(button);
  }
}

function renderQuesTwoOptions() {
  var availableChoicesTwo = [
    "quotes",
    "curly brackets",
    "parentheses",
    "square brackets",
  ];

  for (var i = 0; i < availableChoicesTwo.length; i++) {
    var button = document.createElement("button");

    button.setAttribute("class", "btn btn-info");
    button.textContent = availableChoicesTwo[i];
    button.setAttribute("data-value", availableChoicesTwo[i]);

    quesTwoOptions.append(button);
  }
}
//identifies the selected button
quesOneOptions.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    console.log("you clicked the button");
    var selectedChoiceOne = event.target.getAttribute("data-value");
    console.log(selectedChoiceOne);

    setTimeout(function () {
      quesOneOptions.textContent = "";
      renderQuesTwoOptions();
    }, 1000);
  }
});

startButton.addEventListener("click", function () {
  startRow.style.display = "none";
  renderQuesOneOptions();
});
