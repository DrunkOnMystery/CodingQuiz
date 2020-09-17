var scoresList = document.querySelector(".displayHighScores");


for (i = 0; i < localStorage.length; i++) {
    var finalKey = localStorage.key(i);

    var value = localStorage.getItem(finalKey); 

    var li = document.createElement("li");
    value.replace("{},", "");
    li.textContent = value;
    scoresList.appendChild(li);
    console.log(value);
}

