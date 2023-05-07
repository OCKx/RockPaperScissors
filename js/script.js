let pick = document.querySelectorAll(".js-pick");
let displayElement = document.querySelector(".display");
let computerScores = "";
let score = document.querySelector(".js-score");
let results = document.querySelector(".js-results");
let rockImg = `<img class="imgRuck" src="../assets/rock.png" alt="ROCK" width="70px" height="70px" style="margin: 0 30px 0 10px">`;
let paperImg = `<img class="imgRuck" src="../assets/paper.png" alt="ROCK" width="70px" height="70px" style="margin: 0 30px 0 10px">`;
let scissorsImg = `<img class="imgRuck" src="../assets/scissors.png" alt="ROCK" width="70px" height="70px" style="margin: 0 30px 0 10px">`;

let totalScores = {
    win: 0,
    tie: 0,
    lose: 0
};


//rock
function displayRock() {
    pick.forEach(pickElement => {
    let elementText = pickElement.innerHTML;
    let resultComment =`You picked: ${rockImg}  Computer picked:`;
    let ramdomSelect = Math.random();

    if (elementText) {
        if (ramdomSelect >= 0 && ramdomSelect < 1/3) {
            computerScores = `${rockImg}`;
            displayElement.innerHTML = `${resultComment}  ${computerScores}`;
        } else if (ramdomSelect >= 1/3 && ramdomSelect <2/3) {
            computerScores = `${paperImg}`;
            displayElement.innerHTML = `${resultComment}  ${computerScores}`;
        } else if (ramdomSelect >= 2/3 && ramdomSelect < 1) {
            computerScores = `${scissorsImg}`;
            displayElement.innerHTML = `${resultComment}  ${computerScores}`;
        }
    }
    
    if (computerScores === `${rockImg}`) {
        score.innerHTML = "YOU TIE";
    } else if (computerScores === `${paperImg}`) {
        score.innerHTML = "YOU LOSE";
    } else if (computerScores === `${scissorsImg}`) {
        score.innerHTML = "YOU WIN";
    }
});

//count scores
if (score.innerHTML === "YOU LOSE") {
    totalScores.lose += 1;
} else if (score.innerHTML === "YOU WIN") {
    totalScores.win += 1;
} else if (score.innerHTML === "YOU TIE") {
    totalScores.tie += 1;
}
    results.innerHTML = `WIN: ${totalScores.win}, TIE: ${totalScores.tie}, LOSE: ${totalScores.lose}`
}


//paper 
function displayPaper() {
    pick.forEach(pickElement => {
    let elementText = pickElement.innerHTML;
    let resultComment =`You picked: ${paperImg}  Computer picked:`;
    let ramdomSelect = Math.random();

    if (elementText) {
        if (ramdomSelect >= 0 && ramdomSelect < 1/3) {
            computerScores = `${rockImg}`;
            displayElement.innerHTML = `${resultComment}  ${computerScores}`;
        } else if (ramdomSelect >= 1/3 && ramdomSelect <2/3) {
            computerScores = `${paperImg}`;
            displayElement.innerHTML = `${resultComment}  ${computerScores}`;
        } else if (ramdomSelect >= 2/3 && ramdomSelect < 1) {
            computerScores = `${scissorsImg}`;
            displayElement.innerHTML = `${resultComment}  ${computerScores}`;
        }
    }
    
    if (computerScores === `${rockImg}`) {
        score.innerHTML = "YOU WIN";
    } else if (computerScores === `${paperImg}`) {
        score.innerHTML = "YOU TIE";
    } else if (computerScores === `${scissorsImg}`) {
        score.innerHTML = "YOU LOSE";
    }
});

//count scores
if (score.innerHTML === "YOU LOSE") {
    totalScores.lose += 1;
} else if (score.innerHTML === "YOU WIN") {
    totalScores.win += 1;
} else if (score.innerHTML === "YOU TIE") {
    totalScores.tie += 1;
}
    results.innerHTML = `WIN: ${totalScores.win}, TIE: ${totalScores.tie}, LOSE: ${totalScores.lose}`;
}


//scissors
function displayScissors() {
    pick.forEach(pickElement => {
    let elementText = pickElement.innerHTML;
    let resultComment =`You picked: ${scissorsImg}  Computer picked:`;
    let ramdomSelect = Math.random();

    if (elementText) {
        if (ramdomSelect >= 0 && ramdomSelect < 1/3) {
            computerScores = `${rockImg}`;
            displayElement.innerHTML = `${resultComment}  ${computerScores}`;
        } else if (ramdomSelect >= 1/3 && ramdomSelect <2/3) {
            computerScores = `${paperImg}`;
            displayElement.innerHTML = `${resultComment}  ${computerScores}`;
        } else if (ramdomSelect >= 2/3 && ramdomSelect < 1) {
            computerScores = `${scissorsImg}`;
            displayElement.innerHTML = `${resultComment}  ${computerScores}`;
        }
    }
    
    if (computerScores === `${rockImg}`) {
        score.innerHTML = "YOU LOSE";
    } else if (computerScores === `${paperImg}`) {
        score.innerHTML = "YOU WIN";
    } else if (computerScores === `${scissorsImg}`) {
        score.innerHTML = "YOU TIE";
    }
});

//count scores
if (score.innerHTML === "YOU LOSE") {
    totalScores.lose += 1;
} else if (score.innerHTML === "YOU WIN") {
    totalScores.win += 1;
} else if (score.innerHTML === "YOU TIE") {
    totalScores.tie += 1;
}
    results.innerHTML = `WIN: ${totalScores.win}, TIE: ${totalScores.tie}, LOSE: ${totalScores.lose}`;
}


//reset
function resetScores() {
    if (true) {
        totalScores = {
            win: 0,
            tie: 0,
            lose: 0
        }
        results.innerHTML = `WIN: ${totalScores.win}, TIE: ${totalScores.tie}, LOSE: ${totalScores.lose}`
        resultComment =`You picked: - Computer picked:`;
        displayElement.innerHTML = resultComment;
        score.innerHTML = "-";
    }
}