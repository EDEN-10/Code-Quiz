var startBtn = document.querySelector("#start_quiz");
var questionIndex
let score = 0;
let rightanswerReward = 1;
let wronganswer = -1;

var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("start_time");
var question = document.querySelector("wrapper");

var secondsleft= 80;
var holdinterval = 0;
var penalty = 20;

var ulcreate = document.createElement ("ul");

time.addEventListener("click", function () {
    if (holdinterval === 0) {
        holdinterval = setInterval(function () {
            secondleft--; 
            currentTime.textContent = "time:" + secondleft;
            if (secondsleft <= 0){
                clearInterval(holdinterval);
                alldone();
                currentTime.textContent = "!time's up!";
            }
        }, 1000);
    }
    render(questionIndex);
});

function render(questionIndex){ 
    question.innerHTML = "";
    ulcreate.innerHTML = "";
    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionIndex].title;
        var userchoices = questions[questionIndex].choices;
        question.textContent = userQuestion;
    }
    userchoices.foreach(function(anotherfeatuer){
        var listfeatuer = document.createAttribute;
        listfeatuer.textContent = anotherfeatuer; 
        question.appendchild(ulcreate); 

        listfeatuer.addEventListener("click", (compare));

    })
}
var questions = [
    {
        question: "Javascript is an _____ language:",
        choies: ["Object-Oriented","Object-Based","Procedural"],
        answer: "Object-Oriented"
    }, 
    {
        question: "How can a datatype be declared to be a constant type:",
        choies: ["var","const","let"],
        answer: "const"
    },
    {
        question: "When an operator's value is NULL, the typeof returned byt he unray operaror is:",
        choies: ["undefined","boolean","object"],
        answer: "object"
    }


    
]
function startQuiz () {
    var secondPageDiv = document.querySelector("#second_page");
    var firstPageDiv = document.querySelector("#first_page");

    firstPageDiv.style.display = "none";
    secondPageDiv.style.display = "flex";
}
function loadquestion () {
    var currentquestion = question [current_question_index] 
    let html = `<h2>${currentQuestion.q}</h2>`;
    for (let possibleAnswer of possibleAnswers){
        html += `<button>${possibleAnswer}</button>`;

} 
document.querySelector("main").innerHTML = html;
      //now we have buttons...let's listen for clicks on them
      let buttons = document.querySelectorAll("main button");
      for (let button of buttons){
        button.addEventListener("click", handleUserClick);
      }
  } 
function handleUserClick (e) {
    // e is the click event object
    let userSelection = e.target.textContent
    let correctAnswer = questions[current_question_index].answer
    if (userSelection === correctAnswer) {
        score += rightanswerReward; 
    }
    else {
        score += wronganswer
        // put time penalyty 
    }
} 

current_question_index++;
  




for (let possibleAnswer of possibleAnswers){
        html += `<button>${possibleAnswer}</button>`;

startBtn.addEventListener("click", startQuiz)}