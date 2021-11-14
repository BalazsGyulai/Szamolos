const tip = document.querySelector("#tip");
const btn = document.querySelector("#submit");
const showTips = document.querySelector("#showTips");
const playerArea = document.querySelector("#playerArea");
const gameDisplay = document.querySelector("#gameDisplay");
const newGamebtn = document.querySelector("#newGame");
const winnerDisplay = document.querySelector("#winner");
const winnerTexts = document.querySelector("#texts");
let num = 0;
let db = 1;


gameDisplay.style.height = window.innerHeight * 0.9 + 'px';

if (window.innerWidth < 500){
    gameDisplay.style.width = window.innerWidth * 0.9 + 'px';
} else{
    gameDisplay.style.width = '500px'
}


winnerTexts.style.width = gameDisplay.getBoundingClientRect().width + "px";

showTips.style.height = gameDisplay.offsetHeight - playerArea.offsetHeight - 35 + "px";

newGame();

tip.addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
        checkNumber()
    }
})

newGamebtn.addEventListener("click", function() {
 newGame();
    
});
btn.addEventListener("click", checkNumber);

function checkNumber() {
    if (tip.value == ""){
        tip.value = 0;
    }

    if(tip.value > num){
        li = document.createElement("li");
        li.innerHTML = db + ". A szám kisebb, mint " + tip.value;
        showTips.prepend(li);
    } else if(tip.value < num){
        li = document.createElement("li");
        li.innerHTML = db + ". A szám nagyobb, mint " + tip.value;
        showTips.prepend(li);
    } else {
        li = document.createElement("li");
        li.innerHTML = db + ". A szám nagyobb, mint " + tip.value;
        showTips.prepend(li);
        winner();
    }

    tip.value = "";
    tip.focus();
    db++
}

function winner(){
    winnerDisplay.style.display = "flex";
    p = winnerDisplay.querySelector("#texts").getElementsByTagName("p")[0];
    p.innerHTML = "A szám, amire gondoltam a " + num + " volt, amit " + db + " tipp alatt tudtál megfejteni!";
}

function newGame(){
    num = Math.floor(Math.random() * 1000);
    winnerDisplay.style.display = "none";
    db = 1;

    var child = showTips.lastElementChild;
    while (child) {
       showTips.removeChild(child);
       child = showTips.lastElementChild;
    }
}