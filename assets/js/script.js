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

//High Score Array
var HighScores = [];
var btnClearScoresEl = document.querySelector("#clear-high-scores")
var btnGoBackEl = document.querySelector("#go-back")

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
        correctAnswer: "C: Test 3"
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
        correctAnswer: "C: Test 3"
    },
    {
        question: "Test Question 4",
        choices: [
            { choice: "A: Test 1" },
            { choice: "B: Test 2" },
            { choice: "C: Test 3" },
            { choice: "D: Test 4" }
        ],
        correctAnswer: "C: Test 3"
    },
    {
        question: "Test Question 5",
        choices: [
            { choice: "A: Test 1" },
            { choice: "B: Test 2" },
            { choice: "C: Test 3" },
            { choice: "D: Test 4" }
        ],
        correctAnswer: "C: Test 3"
    },
    {
        question: "Test Question 6",
        choices: [
            { choice: "A: Test 1" },
            { choice: "B: Test 2" },
            { choice: "C: Test 3" },
            { choice: "D: Test 4" }
        ],
        correctAnswer: "C: Test 3"
    },
    {
        question: "Test Question 7",
        choices: [
            { choice: "A: Test 1" },
            { choice: "B: Test 2" },
            { choice: "C: Test 3" },
            { choice: "D: Test 4" }
        ],
        correctAnswer: "C: Test 3"
    },
    {
        question: "Test Question 8",
        choices: [
            { choice: "A: Test 1" },
            { choice: "B: Test 2" },
            { choice: "C: Test 3" },
            { choice: "D: Test 4" }
        ],
        correctAnswer: "C: Test 3"
    },
    {
        question: "Test Question 9",
        choices: [
            { choice: "A: Test 1" },
            { choice: "B: Test 2" },
            { choice: "C: Test 3" },
            { choice: "D: Test 4" }
        ],
        correctAnswer: "C: Test 3"
    },
    {
        question: "Test Question 10",
        choices: [
            { choice: "A: Test 1" },
            { choice: "B: Test 2" },
            { choice: "C: Test 3" },
            { choice: "D: Test 4" }
        ],
        correctAnswer: "C: Test 3"
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
        answerBtn.classList.add('choice')
        answerBtn.addEventListener("click", answerCheck);
        containerQuestionEl.appendChild(answerBtn);
    }
}

//display correct! on screen
var answerCorrect = function () {
    if (correctEl.className = "hide") {
        correctEl.classList.remove("hide")
        correctEl.classList.add("banner")
        wrongEl.classList.remove("banner")
        wrongEl.classList.add("hide")
    }
}
//display wrong! on screen
var answerWrong = function () {
    if (wrongEl.className = "hide") {
        wrongEl.classList.remove("hide")
        wrongEl.classList.add("banner")
        correctEl.classList.remove("banner")
        correctEl.classList.add("hide")
    }
}

//check if answer is correct    
var answerCheck = function (event) {
    var selectedAnswer = event.target
    if (arrayShuffledQuestions[currentQuestionIndex].correctAnswer === selectedAnswer.innerText) {
        answerCorrect()
        score = score + 10
    }

    else {
        answerWrong()
        score = score - 10;
        timerStart = timerStart - 10;
    };

    //go to next question, check if there is more questions
    currentQuestionIndex++
    if (arrayShuffledQuestions.length > currentQuestionIndex + 1) {
        setQuestion()
    }
    else {
        gameover = "true";
        showScore();
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

var showScore = function () {
    containerQuestionEl.classList.add("hide");
    containerEndEl.classList.remove("hide");
    containerEndEl.classList.add("show");

    var scoreDisplay = document.createElement("p");
    scoreDisplay.innerText = ("Your final score is " + score + "!");
    containerScoreEl.appendChild(scoreDisplay);
}

//create high score values
var createHighScore = function (event) {
    event.preventDefault()
    var initials = document.querySelector("#initials").value;
    if (!initials) {
        alert("Enter your intials!");
        return;
    }

    formInitials.reset();

    var HighScore = {
        initials: initials,
        score: score
    }

    //push and sort scores
    HighScores.push(HighScore);
    HighScores.sort((a, b) => { return b.score - a.score });

    //clear visible list to resort
    while (listHighScoreEl.firstChild) {
        listHighScoreEl.removeChild(listHighScoreEl.firstChild)
    }
    //create elements in order of high scores
    for (var i = 0; i < HighScores.length; i++) {
        var highscoreEl = document.createElement("li");
        highscoreEl.ClassName = "high-score";
        highscoreEl.innerHTML = HighScores[i].initials + " - " + HighScores[i].score;
        listHighScoreEl.appendChild(highscoreEl);
    }

    saveHighScore();
    displayHighScores();

}
//save high score
var saveHighScore = function () {
    localStorage.setItem("HighScores", JSON.stringify(HighScores))

}

//load values/ called on page load
var loadHighScore = function () {
    var LoadedHighScores = localStorage.getItem("HighScores")
    if (!LoadedHighScores) {
        return false;
    }

    LoadedHighScores = JSON.parse(LoadedHighScores);
    LoadedHighScores.sort((a, b) => { return b.score - a.score })


    for (var i = 0; i < LoadedHighScores.length; i++) {
        var highscoreEl = document.createElement("li");
        highscoreEl.ClassName = "high-score";
        highscoreEl.innerText = LoadedHighScores[i].initials + " - " + LoadedHighScores[i].score;
        listHighScoreEl.appendChild(highscoreEl);

        HighScores.push(LoadedHighScores[i]);

    }
}

//display high score screen from link or when initials entered
var displayHighScores = function () {

    containerHighScoresEl.classList.remove("hide");
    containerHighScoresEl.classList.add("show");
    gameover = "true"

    if (containerEndEl.className = "show") {
        containerEndEl.classList.remove("show");
        containerEndEl.classList.add("hide");
    }
    if (containerStartEl.className = "show") {
        containerStartEl.classList.remove("show");
        containerStartEl.classList.add("hide");
    }

    if (containerQuestionEl.className = "show") {
        containerQuestionEl.classList.remove("show");
        containerQuestionEl.classList.add("hide");
    }

    if (correctEl.className = "show") {
        correctEl.classList.remove("show");
        correctEl.classList.add("hide");
    }

    if (wrongEl.className = "show") {
        wrongEl.classList.remove("show");
        wrongEl.classList.add("hide");
    }

}
//clears high scores
var clearScores = function () {
    HighScores = [];

    while (listHighScoreEl.firstChild) {
        listHighScoreEl.removeChild(listHighScoreEl.firstChild);
    }

    localStorage.clear(HighScores);

}

loadHighScore()

startBtn.addEventListener("click", start);
//on submit button -- enter or click
formInitials.addEventListener("submit", createHighScore);
//when view high-scores is clicked
ViewHighScoreEl.addEventListener("click", displayHighScores);
//Go back button
btnGoBackEl.addEventListener("click", renderStartPage);
//clear scores button
btnClearScoresEl.addEventListener("click", clearScores);