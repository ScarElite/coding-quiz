var startBtn = document.querySelector("#start-quiz");
var mainContentEl = document.querySelector(".main-content")
var mainHeadingEl = document.querySelector(".main-heading");
var questions = ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5", "Question 6", "Question 7", "Question 8", "Question 9", "Question 10"];
var choices = ["A", "B", "C", "D"];

var start = function () {
    console.log("Start Quiz");
    mainContentEl = clear();
    console.log("Content cleared");

    mainHeadingEl.textContent = questions[0];
}

var clear = function () {
    var mainTextEl = document.querySelector("#main-text");

    console.log("Removing main content");

    mainHeadingEl.textContent = "";
    mainTextEl.outerHTML = "";
    // startBtn.textContent = "";
    startBtn.outerHTML = "";
}


startBtn.addEventListener("click", start);