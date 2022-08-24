var startBtn = document.querySelector("#start-quiz");
// Variables for the timer
var timer = document.querySelector(".time");
var timerStart = 100;
// Main content variables
var mainContentEl = document.querySelector(".main-content");
var mainHeadingEl = document.querySelector(".main-heading");
// Variables for the Quiz questions and answers
var choices = ["A", "B", "C", "D"];
var arrayShuffledQuestions;
var currentQuestionIndex = 0;
const questions = [
    {
        question: "Commonly used data types DO NOT include what?",
        choices: {
            a: "Test 1",
            b: "Test 2",
            c: "Test 3",
            d: "Test 4"
        },
        correctAnswer: "c"
    },
    {
        question: "What does 'DOM' stand for?",
        choices: {
            a: "Documentation Of Methods",
            b: "Don't Overlook Methods",
            c: "Document Oriented Model",
            d: "Document Object Model"
        },
        correctAnswer: "d"
    },
    {
        question: "Test Question 3",
        choices: {
            a: "Test 1",
            b: "Test 2",
            c: "Test 3",
            d: "Test 4"
        },
        correctAnswer: "c"
    },
    {
        question: "Test Question 4",
        choices: {
            a: "Test 1",
            b: "Test 2",
            c: "Test 3",
            d: "Test 4"
        },
        correctAnswer: "c"
    },
    {
        question: "Test Question 5",
        choices: {
            a: "Test 1",
            b: "Test 2",
            c: "Test 3",
            d: "Test 4"
        },
        correctAnswer: "c"
    },
    {
        question: "Test Question 6",
        choices: {
            a: "Test 1",
            b: "Test 2",
            c: "Test 3",
            d: "Test 4"
        },
        correctAnswer: "c"
    },
    {
        question: "Test Question 7",
        choices: {
            a: "Test 1",
            b: "Test 2",
            c: "Test 3",
            d: "Test 4"
        },
        correctAnswer: "c"
    },
    {
        question: "Test Question 8",
        choices: {
            a: "Test 1",
            b: "Test 2",
            c: "Test 3",
            d: "Test 4"
        },
        correctAnswer: "c"
    },
    {
        question: "Test Question 9",
        choices: {
            a: "Test 1",
            b: "Test 2",
            c: "Test 3",
            d: "Test 4"
        },
        correctAnswer: "c"
    },
    {
        question: "Test Question 10",
        choices: {
            a: "Test 1",
            b: "Test 2",
            c: "Test 3",
            d: "Test 4"
        },
        correctAnswer: "c"
    },
]

var start = function () {
    console.log("Start Quiz");
    mainContentEl = clearMain();
    console.log("Content cleared");

    runTimer();

    // Randomize the order that the questions appear
    arrayShuffledQuestions = questions.sort(() => Math.random() - 0.5);
    setQuestion();
    create();
}

var setQuestion = function () {
    displayQuestion(arrayShuffledQuestions[currentQuestionIndex]);
}

// var resetChoices = function() {
//     while ()
// }

var displayQuestion = function (index) {
    mainHeadingEl.innerText = index.question;
    mainHeadingEl.classList.add("main-heading-question");

    // for (var i = 0; i < index.choices.length; i++) {
    //     var answerBtn = document.createElement("button");
    //     answerBtn.innerText = index.choices[i].choice;
    //     answerBtn.classList.add("btn");
    //     answerBtn.classList.add("choice");
    //     answerBtn.addEventListener("click", answerCheck);
    //     mainHeadingEl.appendChild(answerBtn);
    // }
};

var clearMain = function () {
    var mainTextEl = document.querySelector("#main-text");

    console.log("Removing main content");

    mainHeadingEl.innerHTML = "";
    mainTextEl.outerHTML = "";
    // startBtn.textContent = "";
    startBtn.outerHTML = "";
}

var create = function () {
    var arr = ["A:", "B:", "C:", "D:"];
    var cont = document.getElementById('container');

    for (i = 0; i <= arr.length - 1; i++) {
        var choice = document.createElement('button');
        choice.innerHTML = arr[i];
        choice.className = "choice";

        cont.appendChild(choice);
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