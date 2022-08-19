var startBtn = document.querySelector("#start-quiz");
var mainContentEl = document.querySelector(".main-content")
var mainHeadingEl = document.querySelector(".main-heading");
var questions = ["Commonly used DataTypes DO NOT include what?", "Question 2", "Question 3", "Question 4", "Question 5", "Question 6", "Question 7", "Question 8", "Question 9", "Question 10"];
var choices = ["A", "B", "C", "D"];

var start = function () {
    console.log("Start Quiz");
    mainContentEl = clear();
    console.log("Content cleared");

    mainContentEl = create();
    console.log("Ran the create function");

}

var clear = function () {
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
    newHeadingEl.setAttribute("Style", "color: black; margin-bottom: 10%;");

    var arr = ["A:", "B:", "C:", "D:"];
    var cont = document.getElementById('container');

    // create ul element and set the attributes.
    var choiceList = document.createElement('ul');
    choiceList.className = "choiceList";
    choiceList.setAttribute('id', 'theList');

    for (i = 0; i <= arr.length - 1; i++) {
        var choice = document.createElement('li');
        choice.innerHTML = arr[i];
        choice.className = "choice";

        choiceList.appendChild(choice);
    }

    cont.appendChild(choiceList);
}


startBtn.addEventListener("click", start);