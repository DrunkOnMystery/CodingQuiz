//List of things needed for the quiz to work:

// 1. Create a main page where the quiz can begin
        //page should be easily over-writable, with each new question overwriting each previous "body" of the page
// 2. Create a header or footer where the score will be tracked
    // Header seems like it'll work better, but might not even be necessary. Just an h1 or h2, with everything else being overwritten likely would work
// 3. Create a button that begins the quiz
// 4. Program a timer that runs across the header or footer of each page
// 5. Program a method for the timer to begin congruently with the beginning of the quiz
// 6. Program a means by which the amount of time remaining in the quiz will be reduced with each missed question
// 7. Program a leaderboard that saves user's scores and initials
        //-Find out if you can use a prompt to assign a value to a variable and then to use a second prompt to assign that variable sub-strings

var displayQuestionEl = document.querySelector(".display-questions")
var timerEl = document.querySelector(".timer")
var resultsEl = document.querySelector(".results")

var mainDisplay = document.createElement("h3");

var startButton = document.createElement("button");

var secondsLeft = 60;
var questionIndex = 0;
var questionTimer;




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

   questionTimer = setInterval(function() {
    secondsLeft--
  timerEl.textContent = secondsLeft;
  if (secondsLeft <= 0){
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
    resultsEl.textContent = "Correct";}

  else {
    console.log("Incorrect");
    resultsEl.textContent = "Incorrect";
    secondsLeft = (secondsLeft - 5)
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
  alert("Congratulations! You've completed the quiz!")
  alert("Your final score was " + finalScore + "!");
}
  else {
    alert("You're out of time.")
    alert("Your final score was 0. Please try again.");
  }
}


startButton.addEventListener("click", quizBegin)

titlePage();