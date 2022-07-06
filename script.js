var allScores =  JSON.parse(localStorage.getItem("scores")) || [];

var startBtn = document.querySelector("#start_quiz");

var questionNumber = 0;

var questions = [
    {
        question: "Javascript is an _____ language:",
        choices: ["Object-Oriented","Object-Based","Procedural"],
        answer: "Object-Oriented"
    }, 
    {
        question: "How can a datatype be declared to be a constant type:",
        choices: ["var","const","let"],
        answer: "const"
    },
    {
        question: "When an operator's value is NULL, the typeof returned byt he unray operaror is:",
        choices: ["undefined","boolean","object"],
        answer: "object"
    }   
]

function nextQuestion (event) {
    // if statement that checks if the questionNumber does not exceed the length of your questions





    // getting the user's answer
    var selectedAnswer = (event.target.textContent)

    // getting the actual correct answer
    var correctAnswer = (questions[questionNumber].answer)

    // check the answer if correct
    if(selectedAnswer == correctAnswer) {
        alert("Correct!")
    } else {
        alert("Wrong!")
        // deduct 15 seconds from time
        // time = time - 15;
        time-=15;
    }




    questionNumber = questionNumber + 1;
    if (questionNumber<=2)
    {changeQuestion();}
    else{ document.querySelector("#question_page").style.display="none";
    document.querySelector("#finish_page").style.display="flex"
}
}

// function definition
function changeQuestion () {
    // select your element that you want to edit
    var questionText = document.querySelector("#questionText")

    // use that variable to edit its properties
    questionText.textContent = questions[questionNumber].question;


    var option1 = document.querySelector("#option1");
    option1.textContent = questions[questionNumber].choices[0];
    option1.addEventListener("click", nextQuestion)

    var option2 = document.querySelector("#option2");
    option2.textContent = questions[questionNumber].choices[1];
    option2.addEventListener("click", nextQuestion)

    var option3 = document.querySelector("#option3");
    option3.textContent = questions[questionNumber].choices[2];
    option3.addEventListener("click",  nextQuestion)

}


function startQuiz () {
    timer ()
    var questionPage = document.querySelector("#question_page");
    var firstPageDiv = document.querySelector("#first_page");

    firstPageDiv.style.display = "none";
    questionPage.style.display = "flex";
    document.querySelector("#finish_page").style.display ="none"

    changeQuestion();
    
    //     } // function call - activate a function

}
var time = 100;


function timer(){
    setInterval (function(){
        if (time>0 &&questionNumber<=2)
        {time--
        document.querySelector("#timer").textContent = time}
        else {
            clearInterval
        }
        // if timer goes below zero, that means it stops the quiz.
    
    }, 1000)

}


startBtn.addEventListener("click", startQuiz)
document.querySelector("#submit").addEventListener("click", saveLS)

function saveLS(){

    var highscore = {
        initials: document.querySelector("#initials").value,
        score: time
    }

    allScores.push(highscore)

    localStorage.setItem("scores", JSON.stringify(allScores));

    location.assign("./hs.html")

}


