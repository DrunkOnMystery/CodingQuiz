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


        var timeEl = document.querySelector(".time");
        var mainEl = document.getElementById("main");

        var player = {
            Initials: prompt("Please enter your initials"),
            PlayerScore: ("Placeholder"),
        }

        var secondsLeft = 60; 

        var questions = [
            {
              title: "Example Question 1:",
              choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
              answer: "answer from choices"
            },
            {
                title: "Example Question 2:",
                choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
                answer: "answer from choices"
            }
            {
                title: "Example Question 3:",
                choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
                answer: "answer from choices"
            }
            {
                title: "Example Question 4:",
                choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
                answer: "answer from choices"
            }
            {
                title: "Example Question 5:",
                choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
                answer: "answer from choices"
            }
            {
                title: "Example Question 6:",
                choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
                answer: "answer from choices"
            }
          ];
        
          time.addEventListener("click", function() {
          function setTime() {
            var timerInterval = setInterval(function() {
              secondsLeft--;
              timeEl.textContent = secondsLeft + " seconds left";
              mainEl.textContent = "";
          
              if(secondsLeft === 0) {
                clearInterval(timerInterval);
                sendMessage();
              }
          
            }, 1000);
          }
        }

        function sendMessage() {
            timeEl.textContent = "Time's up!";
          }
        
        setTime();

        function myFunction() {
            
        }