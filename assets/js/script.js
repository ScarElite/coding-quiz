var containerQuestionEl = document.getElementById("question-container");
var containerStartEl = document.getElementById("starter-container");
var containerEndEl = document.getElementById("end-container")
var containerScoreEl = document.getElementById("score-banner")
var formInitials = document.getElementById("initials-form")
var containerHighScoresEl = document.getElementById("high-score-container")
var ViewHighScoreEl = document.getElementById("view-high-scores")
var listHighScoreEl = document.getElementById("high-score-list")
var correctEl = document.getElementById("correct")
var wrongEl = document.getElementById("wrong")
var startBtn = document.querySelector("#start-quiz");

var score = 0;
var timeleft;
var gameover;
// Variables for the timer
var timer = document.querySelector(".time");
var timerStart = 100;
// Main content variables
var cont = document.getElementById('container');
// var mainContentEl = document.querySelector(".main-content");
// var mainHeadingEl = document.querySelector(".main-heading");
// Variables for the Quiz questions and answers
var arrayShuffledQuestions;
var currentQuestionIndex = 0;
var questions = [
    {
        question: "Commonly used data types DO NOT include what?",
        choices: {
            choice: "Test 1",
            choice: "Test 2",
            choice: "Test 3",
            choice: "Test 4"
        },
        correctAnswer: "c"
    },
    {
        question: "What does 'DOM' stand for?",
        choices: {
            choice: "Documentation Of Methods",
            choice: "Don't Overlook Methods",
            choice: "Document Oriented Model",
            choice: "Document Object Model"
        },
        correctAnswer: "d"
    },
    {
        question: "Test Question 3",
        choices: {
            choice: "Test 1",
            choice: "Test 2",
            choice: "Test 3",
            choice: "Test 4"
        },
        correctAnswer: "c"
    },
    {
        question: "Test Question 4",
        choices: {
            choice: "Test 1",
            choice: "Test 2",
            choice: "Test 3",
            choice: "Test 4"
        },
        correctAnswer: "c"
    },
    {
        question: "Test Question 5",
        choices: {
            choice: "Test 1",
            choice: "Test 2",
            choice: "Test 3",
            choice: "Test 4"
        },
        correctAnswer: "c"
    },
    {
        question: "Test Question 6",
        choices: {
            choice: "Test 1",
            choice: "Test 2",
            choice: "Test 3",
            choice: "Test 4"
        },
        correctAnswer: "c"
    },
    {
        question: "Test Question 7",
        choices: {
            choice: "Test 1",
            choice: "Test 2",
            choice: "Test 3",
            choice: "Test 4"
        },
        correctAnswer: "c"
    },
    {
        question: "Test Question 8",
        choices: {
            choice: "Test 1",
            choice: "Test 2",
            choice: "Test 3",
            choice: "Test 4"
        },
        correctAnswer: "c"
    },
    {
        question: "Test Question 9",
        choices: {
            choice: "Test 1",
            choice: "Test 2",
            choice: "Test 3",
            choice: "Test 4"
        },
        correctAnswer: "c"
    },
    {
        question: "Test Question 10",
        choices: {
            choice: "Test 1",
            choice: "Test 2",
            choice: "Test 3",
            choice: "Test 4"
        },
        correctAnswer: "c"
    },
]

var start = function () {
    console.log("Start Quiz");
    mainContentEl = clearMain();
    console.log("Content cleared");

    //add classes to show/hide start and quiz screen
    containerStartEl.classList.add('hide');
    containerStartEl.classList.remove('show');
    containerQuestionEl.classList.remove('hide');
    containerQuestionEl.classList.add('show');
    // Randomize the order that the questions appear
    arrayShuffledQuestions = questions.sort(() => Math.random() - 0.5);
    runTimer();
    setQuestion();
}

var setQuestion = function () {
    displayQuestion(arrayShuffledQuestions[currentQuestionIndex]);
}

var displayQuestion = function (index) {
    containerQuestionEl.innerText = index.question;
    containerQuestionEl.classList.add("main-heading-question");

    for (var i = 0; i < index.choices.length; i++) {
        var answerBtn = document.createElement("button");
        answerBtn.innerText = index.choices[i].choice;
        answerBtn.classList.add("choice");
        answerBtn.addEventListener("click", answerCheck);
        cont.appendChild(answerBtn);
        console.log("This worked")
    }
}

var clearMain = function () {
    var mainTextEl = document.querySelector("#main-text");

    console.log("Removing main content");

    containerStartEl.innerHTML = "";
    mainTextEl.outerHTML = "";
    // startBtn.textContent = "";
    startBtn.outerHTML = "";
}

function runTimer() {
    setInterval(function () {
        timer.innerHTML = timerStart;
        if (timerStart > 0) {
            timerStart--;
        }
        // else if timerStart = 0 then quiz is over
    }, 1000);
};

startBtn.addEventListener("click", start);