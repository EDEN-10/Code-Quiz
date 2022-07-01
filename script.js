var startBtn = document.querySelector("#start_quiz");
let score = 0;
let rightanswerReward = 1;
let wronganswer = -1;

var questions = [
    {
        question: "bfdjxfbmd:",
        choies: ["c1","c2","c3"],
        answer: "c2"
    }, 

function int

    
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