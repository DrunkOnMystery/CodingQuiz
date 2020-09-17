var scoresList = document.querySelector(".displayHighScores");


for (i = 0; i < localStorage.length; i++) {
    var keyName = localStorage.key(i);
//get the value of our variable keyName
    var value = localStorage.getItem(keyName); 
//create li with the text content of our Key --> Value
    var li = document.createElement("li");
    value.replace("{},", "");
    li.textContent = value;
    scoresList.appendChild(li);
    console.log(value);
}

