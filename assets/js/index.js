var startButton = document.querySelector("#start-button");
var answerOne = document.querySelector("#answer-one");
var answerTwo = document.querySelector("#answer-two");
var answerThree = document.querySelector("#answer-three");
var answerFour = document.querySelector("#answer-four");
var time = document.querySelector(".time");
var title = document.querySelector(".title");
var secondsLeft = 60;
var quizBox = document.querySelector(".quiz");
var openQuiz = document.querySelector(".open-quiz");
var question = document.querySelector("#question");

var questionOne = {
  question: `What is ""b" + "a" +  + "a"" in JS?`,
  answers: ["banana", "not defined", "baaa", "???"],
  rightAnswer: "banana",
  //1
};
var questionTwo = {
  question: "Javascript is an _______ language?",
  answers: ["Function-Based", "Procedural", "Object-Oriented", "None of the above"],
  rightAnswer: "Object-Oriented",

  //3
};
var questionThree = {
  question: "Which of the following methods is used to access HTML elements using Javascript?",
  answers: ["getElementbyID", "queryChooser", "selectHead", "grabID"],
  rightAnswer: "getElementbyID",
  //1
};
var questionFour = {
  question: "How can a datatype be declared to be a constant type??",
  answers: ["const", "var", "let", "enumerate"],
  rightAnswer: "const",
  //1
};

var questions = [questionOne, questionTwo, questionThree, questionFour];
var questionNum = 0;
var answers = [answerOne, answerTwo, answerThree, answerFour];

startButton.addEventListener("click", function () {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    time.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);

  startQuiz();
});

function startQuiz() {
  title.setAttribute("style", "display: none;");

  openQuiz.setAttribute("style", "display: inline;");

  var questionEl = document.createElement("h2");
  questionEl.textContent = questions[0].question;


  openQuiz.appendChild(questionEl);

  var buttonOne = document.createElement("button");
  var buttonTwo = document.createElement("button");
  var buttonThree = document.createElement("button");
  var buttonFour = document.createElement("button");

  buttonOne.className = "btn answer-button";
  buttonTwo.className = "btn answer-button";
  buttonThree.className = "btn answer-button";
  buttonFour.className = "btn answer-button";

  buttonOne.textContent = questions[0].answers[0];
  buttonTwo.textContent = questions[0].answers[1];
  buttonThree.textContent = questions[0].answers[2];
  buttonFour.textContent = questions[0].answers[3];

  buttonOne.addEventListener("click", function () {
    if (buttonOne.textContent === questions[0].rightAnswer) {
      console.log("Right, rendering");
      questionTwo();
    } else {
      console.log("Wrong");
    }
  });

  buttonTwo.addEventListener("click", function () {
    if (buttonTwo.textContent === questions[0].rightAnswer) {
      console.log("Right");

    } else {
      console.log("Wrong");
    }
  });

  buttonThree.addEventListener("click", function () {
    if (buttonThree.textContent === questions[0].rightAnswer) {
      console.log("Right");

    } else {
      console.log("Wrong");
    }
  });

  buttonFour.addEventListener("click", function () {
    if (buttonFour.textContent === questions[0].rightAnswer) {
      console.log("Right");

    } else {
      console.log("Wrong");
    }
  });

  openQuiz.appendChild(buttonOne);
  openQuiz.appendChild(buttonTwo);
  openQuiz.appendChild(buttonThree);
  openQuiz.appendChild(buttonFour);

  function questionTwo() {
    // openQuiz.remove();
    // console.log("removing");
  

    openQuiz.appendChild(questionEl);
    console.log("adding");
    openQuiz.setAttribute("style", "display: inline;");
  
    var buttonOne = document.createElement("button");
    var buttonTwo = document.createElement("button");
    var buttonThree = document.createElement("button");
    var buttonFour = document.createElement("button");
  
    buttonOne.className = "btn answer-button";
    buttonTwo.className = "btn answer-button";
    buttonThree.className = "btn answer-button";
    buttonFour.className = "btn answer-button";
  
    buttonOne.textContent = questions[1].answers[0];
    buttonTwo.textContent = questions[1].answers[1];
    buttonThree.textContent = questions[1].answers[2];
    buttonFour.textContent = questions[1].answers[3];


    buttonOne.addEventListener("click", function () {
      if (buttonOne.textContent === questions[1].rightAnswer) {
        console.log("Right");
      } else {
        console.log("Wrong");
      }
    });
  
    buttonTwo.addEventListener("click", function () {
      if (buttonTwo.textContent === questions[1].rightAnswer) {
        console.log("Right");
      } else {
        console.log("Wrong");
      }
    });
  
    buttonThree.addEventListener("click", function () {
      if (buttonThree.textContent === questions[1].rightAnswer) {
        console.log("Right");
      } else {
        console.log("Wrong");
      }
    });
  
    buttonFour.addEventListener("click", function () {
      if (buttonFour.textContent === questions[1].rightAnswer) {
        console.log("Right");
      } else {
        console.log("Wrong");
      }
    });

    openQuiz.appendChild(buttonOne);
    openQuiz.appendChild(buttonTwo);
    openQuiz.appendChild(buttonThree);
    openQuiz.appendChild(buttonFour);

    
    
  }
}

