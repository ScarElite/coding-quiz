var startBtn = document.querySelector("#start-quiz");
var timer = document.querySelector(".time");
var count = 100;
var mainContentEl = document.querySelector(".main-content")
var mainHeadingEl = document.querySelector(".main-heading");
var questions = ["Commonly used data types DO NOT include what?", "Question 2", "Question 3", "Question 4", "Question 5", "Question 6", "Question 7", "Question 8", "Question 9", "Question 10"];
var choices = ["A", "B", "C", "D"];
var questions = [
    {
        question: "Commonly used data types DO NOT include what?",
        choices: ["Test 1", "Test 2", "Test 3", "Test 4"],
        correctAnswer: "Test 3"
    }
]

var start = function () {
    console.log("Start Quiz");
    mainContentEl = clearMain();
    console.log("Content cleared");

    mainContentEl = create();
    console.log("Ran the create function");

    runTimer();
}

var clearMain = function () {
    var mainTextEl = document.querySelector("#main-text");

    console.log("Removing main content");

    mainHeadingEl.innerHTML = "";
    mainTextEl.outerHTML = "";
    // startBtn.textContent = "";
    startBtn.outerHTML = "";
}

var create = function () {
    var newHeadingEl = mainHeadingEl;
    // Create a for loop here
    newHeadingEl.textContent = questions[0];
    newHeadingEl.setAttribute("Style", "color: black; margin-bottom: 5%; text-align: left");

    var arr = ["A:", "B:", "C:", "D:"];
    var cont = document.getElementById('container');

    for (i = 0; i <= arr.length - 1; i++) {
        var choice = document.createElement('button');
        choice.innerHTML = arr[i];
        choice.className = "choice";

        cont.appendChild(choice);
    }
}

var clearQuestion = function () {
    newHeadingEl.textContent = "";
}

function runTimer() {
    var time = setInterval(function () {
        timer.innerHTML = count;
        if (count > 0) {
            count--;
        }
    }, 1000);
};

startBtn.addEventListener("click", start);