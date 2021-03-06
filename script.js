//console.log("hello");
//Start of the Code Quiz, when the start button is clicked the HTML container is hidden
var startRow = document.getElementById("start-page");
var startButton = document.getElementById("start-btn");
var questionsArea = document.getElementById("questions-area");
var options = document.getElementById("options");

var currentStage = 0;
var stages = [
  {
    question: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    options: [
      "1. quotes",
      "2. curly brackets",
      "3. parentheses",
      "4. square brackets",
    ],
  },
  {
    question: "Arrays in JavaScript can be used to store ____.",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
  },
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
  },
  {
    question:
      "A very useful tool for used during development and debugging printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. terminal / bash",
      "3. for loops",
      "4. console log",
    ],
  },
];
//Timer function
var timeEl = document.querySelector(".time");
var timer = document.getElementById("timer");
var secondsLeft = 76;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

setTime();

//Loops through the arrays
function renderOptions(array) {
  for (var i = 0; i < array.length; i++) {
    questionsArea.HTML = "";
    var button = document.createElement("button");
    //console.log(array);
    button.setAttribute("class", "btn btn-info");
    button.textContent = array[i];
    button.setAttribute("data-value", array[i]);
    var userQuestion = stages[currentStage].question;
    questionsArea.textContent = userQuestion;
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
      options.textContent = "";
      renderOptions(optionsToDisplay);
    }, 2000);
  }
});

startButton.addEventListener("click", function () {
  startRow.style.display = "none";
  var optionsToDisplay = stages[currentStage].options;
  renderOptions(optionsToDisplay);
});
