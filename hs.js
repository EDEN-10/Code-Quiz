var allScores = JSON.parse(localStorage.getItem("scores"));

console.log(allScores)

var ul = document.querySelector("#scores");

for (let i = 0; i < allScores.length; i++) {

    // create an li element
    var li = document.createElement("li");

    // change text of li
    li.textContent = allScores[i].initials + " - " + allScores[i].score

    // add this li inside of the ul
    ul.append(li)
    
}