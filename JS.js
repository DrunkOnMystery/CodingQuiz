var displayQuestionEl = document.querySelector(".display-questions")
var timerEl = document.querySelector(".timer")
var resultsEl = document.querySelector(".results")
var mainDisplay = document.createElement("h3");
var startButton = document.createElement("button");

const mostRecentScore = localStorage.getItem("mostRecentScore");
const username = document.getElementById("username");


var secondsLeft = 30;
var questionIndex = 0;
var questionTimer;
var userName;
var highScores = [];



function titlePage() {
  mainDisplay.textContent = "Press the button to begin the quiz"
  startButton.textContent = "Begin"
  displayQuestionEl.append(mainDisplay, startButton)
}

function quizBegin() {
  showTimer();
  nextQuestion();
}

function showTimer() {
  timerEl.textContent = secondsLeft;

  questionTimer = setInterval(function () {
    secondsLeft--
    timerEl.textContent = secondsLeft;
    if (secondsLeft <= 0) {
      clearInterval(questionTimer);
      secondsLeft = 0;
      endGame();
    }
  }, 1 * 1000)
}

function nextQuestion() {

  var currentQuestion = questions[questionIndex];

  console.log(currentQuestion);

  displayQuestionEl.textContent = "";

  mainDisplay.textContent = currentQuestion.title;

  displayQuestionEl.append(mainDisplay);
  var answerContainer = document.createElement("div");

  for (i = 0; i < currentQuestion.choices.length; i++) {
    var choiceButton = document.createElement("button");

    choiceButton.textContent = currentQuestion.choices[i];

    choiceButton.addEventListener("click", checkAnswer);

    answerContainer.append(choiceButton);

  }
  displayQuestionEl.append(answerContainer);

}


function checkAnswer() {
  //check for right answer

  var answerText = event.target.textContent;
  console.log(answerText);
  if (answerText === questions[questionIndex].answer) {
    console.log("Correct");
    resultsEl.textContent = "Correct";
  }

  else {
    console.log("Incorrect");
    resultsEl.textContent = "Incorrect";
    secondsLeft = (secondsLeft - 5);
  }

  questionIndex++

  if (questionIndex >= questions.length) {
    endGame();
  }

  else {
    nextQuestion();
  }
}

function endGame() {

  clearInterval(questionTimer);
  finalScore = timerEl.innerText;
  console.log(finalScore);

  displayQuestionEl.textContent = "";
  resultsEl.textContent = "";
  timerEl.textContent = "";
  mainDisplay.textContent = ("Final Score: " + finalScore);
  displayQuestionEl.append(mainDisplay, resultsEl, timerEl);


  if (finalScore > 0) {
    alert("Congratulations! You've completed the quiz! Your final score was " + finalScore + "! Enter your name to record your high score!")
  }
  else {
    alert("You're out of time.")
    alert("Your final score was 0. Please try again.");
  }
  form();
}

function form() {

  var form = document.createElement("form");
  form.setAttribute("method", "post");
  form.setAttribute("action", "submit.php");

  var name = document.createElement("input");
  name.setAttribute("type", "text");
  name.setAttribute("placeholder", "Ben");
  name.setAttribute("name", "name")

  var submit = document.createElement("input");
  submit.setAttribute("type", "submit");
  submit.setAttribute("value", "Submit High Score");
  submit.setAttribute("id", "#submit");

  form.appendChild(name);
  form.appendChild(submit);
  displayQuestionEl.append(form, submit);
  submit.addEventListener("click", function () {

    var storedInfo = JSON.parse(localStorage.getItem("highScores"));
    if (storedInfo !== null) {
      highScores = storedInfo;
    }

    if (userName === "") {
      displayMessage("You must enter a name");
    }
    var score = {
      userScore: finalScore,
      userName: form.name.value
    };

    highScores.push(score);
    console.log(score);

    localStorage.setItem("key", JSON.stringify(score));
    window.location = "scoreboard.html";

  });
}



startButton.addEventListener("click", quizBegin)



titlePage();