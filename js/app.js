// variables


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


// --- variables ---


// functions and classes


class CreateThing {
    constructor(what, which, tipNum, where, text) {
        this.Element = what;
        this.NumElement = which;
        this.TipNum = tipNum;
        this.ElementAddTo = where;
        this.Text = text
    }

    create() {
        const li = document.createElement(this.Element);
        li.innerHTML = this.NumElement + this.Text + this.TipNum;
        this.ElementAddTo.prepend(li);
    }
}

function checkNumber() {
    if (tip.value == "") {
        tip.value = 0;
    }

    if (tip.value > num) {
        const createLi = new CreateThing("li", db, tip.value, showTips, ".) A szám kisebb, mint ");

        createLi.create();

    } else if (tip.value < num) {
        const createLi = new CreateThing("li", db, tip.value, showTips, ".) A szám nagyobb, mint ");

        createLi.create();

    } else {
        const createLi = new CreateThing("li", db, tip.value, showTips, ".) Kitaláltad a számot: ");

        createLi.create();
        winner();
    }

    tip.value = "";
    tip.focus();
    db++
}

function winner() {
    winnerDisplay.style.display = "flex";
    p = winnerDisplay.querySelector("#texts").getElementsByTagName("p")[0];
    p.innerHTML = "A szám, amire gondoltam a " + num + " volt, amit " + db + " tipp alatt tudtál megfejteni!";
}

function newGame() {
    num = Math.floor(Math.random() * 1000);
    winnerDisplay.style.display = "none";
    db = 1;

    var child = showTips.lastElementChild;
    while (child) {
        showTips.removeChild(child);
        child = showTips.lastElementChild;
    }
}


// --- functions and classes ---


// responsive part


gameDisplay.style.height = window.innerHeight * 0.9 + 'px';

if (window.innerWidth < 500) {
    gameDisplay.style.width = window.innerWidth * 0.9 + 'px';
} else {
    gameDisplay.style.width = '500px'
}

winnerTexts.style.width = gameDisplay.getBoundingClientRect().width + "px";

showTips.style.height = gameDisplay.offsetHeight - playerArea.offsetHeight - 35 + "px";


// --- responsive part ---


// start the game

newGame();

// --- start the game ---


// add events to variables

tip.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        checkNumber()
    }
})

newGamebtn.addEventListener("click", function () {
    newGame();
});

btn.addEventListener("click", checkNumber);

// --- add events to variables ---