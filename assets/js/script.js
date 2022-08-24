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
var answerButtonsEl = document.getElementById("answer-buttons");
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
        choices: [
            { choice: "A: Test 1" },
            { choice: "B: Test 2" },
            { choice: "C: Test 3" },
            { choice: "D: Test 4" }
        ],
        correctAnswer: "c"
    },
    {
        question: "What does 'DOM' stand for?",
        choices: [
            { choice: "A: Documentation Of Methods" },
            { choice: "B: Don't Overlook Methods" },
            { choice: "C: Document Oriented Model" },
            { choice: "D: Document Object Model" }
        ],
        correctAnswer: "D: Document Object Model"
    },
    {
        question: "Test Question 3",
        choices: [
            { choice: "A: Test 1" },
            { choice: "B: Test 2" },
            { choice: "C: Test 3" },
            { choice: "D: Test 4" }
        ],
        correctAnswer: "c"
    },
    {
        question: "Test Question 4",
        choices: [
            { choice: "A: Test 1" },
            { choice: "B: Test 2" },
            { choice: "C: Test 3" },
            { choice: "D: Test 4" }
        ],
        correctAnswer: "c"
    },
    {
        question: "Test Question 5",
        choices: [
            { choice: "A: Test 1" },
            { choice: "B: Test 2" },
            { choice: "C: Test 3" },
            { choice: "D: Test 4" }
        ],
        correctAnswer: "c"
    },
    {
        question: "Test Question 6",
        choices: [
            { choice: "A: Test 1" },
            { choice: "B: Test 2" },
            { choice: "C: Test 3" },
            { choice: "D: Test 4" }
        ],
        correctAnswer: "c"
    },
    {
        question: "Test Question 7",
        choices: [
            { choice: "A: Test 1" },
            { choice: "B: Test 2" },
            { choice: "C: Test 3" },
            { choice: "D: Test 4" }
        ],
        correctAnswer: "c"
    },
    {
        question: "Test Question 8",
        choices: [
            { choice: "A: Test 1" },
            { choice: "B: Test 2" },
            { choice: "C: Test 3" },
            { choice: "D: Test 4" }
        ],
        correctAnswer: "c"
    },
    {
        question: "Test Question 9",
        choices: [
            { choice: "A: Test 1" },
            { choice: "B: Test 2" },
            { choice: "C: Test 3" },
            { choice: "D: Test 4" }
        ],
        correctAnswer: "c"
    },
    {
        question: "Test Question 10",
        choices: [
            { choice: "A: Test 1" },
            { choice: "B: Test 2" },
            { choice: "C: Test 3" },
            { choice: "D: Test 4" }
        ],
        correctAnswer: "c"
    },
]

var start = function () {
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
    resetAnswers();
    displayQuestion(arrayShuffledQuestions[currentQuestionIndex]);
}

var resetAnswers = function () {
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild);
    };
};

var displayQuestion = function (index) {
    containerQuestionEl.classList.add("main-heading-question");
    containerQuestionEl.innerText = index.question;

    for (var i = 0; i < index.choices.length; i++) {
        var answerBtn = document.createElement("button");
        answerBtn.innerText = index.choices[i].choice;
        answerBtn.classList.add('btn')
        answerBtn.classList.add('answerbtn')
        answerBtn.addEventListener("click", answerCheck);
        answerButtonsEl.appendChild(answerBtn);
        console.log("This worked")
    }
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