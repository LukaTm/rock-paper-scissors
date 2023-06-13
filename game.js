// Event Listeners
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const playAgain = document.getElementById("play-again");
const scoreUpdate = document.getElementById("result");

// SCORES
let score = 0;
let computerScore = 0;

rockButton.addEventListener("click", () => playGame("rock"));
paperButton.addEventListener("click", () => playGame("paper"));
scissorsButton.addEventListener("click", () => playGame("scissors"));
playAgain.addEventListener("click", (e) => {
    const result = document.getElementById("final-result");
    const popupBackground = document.querySelector(".pop-up-background");
    const modal = document.getElementById("play-again-container");
    modal.style.display = "none";
    result.style.display = "none";
    popupBackground.style.display = "none";
    scoreUpdate.innerHTML =
        "Player:&nbsp;0 &nbsp;&nbsp;&nbsp; Computer: &nbsp;0";

    score = 0;
    computerScore = 0;
});

scoreUpdate.innerHTML = "Player:&nbsp;0&nbsp;&nbsp;&nbsp; Computer:&nbsp;0";

function answerAfterRound(name) {
    const scoreWords = document.getElementById("words");
    scoreWords.innerHTML = name;
}

function getComputerChoice() {
    let gameChoices = ["rock", "paper", "scissors"];
    return gameChoices[Math.floor(Math.random() * gameChoices.length)];
}

function playGame(playerSelection) {
    let computerSelection = getComputerChoice();
    if (computerSelection == playerSelection) {
        if (playerSelection === "rock") {
            answerAfterRound(
                "Its a tie! <br> <span class='result'>Rock ties with rock</span>"
            );
        } else if (playerSelection === "scissors") {
            answerAfterRound(
                "Its a tie! <br> <span class='result'>Scissors ties with scissors</span>"
            );
        } else if (playerSelection === "paper") {
            answerAfterRound(
                "Its a tie! <br> <span class='result'>Paper ties with paper</span>"
            );
        }
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        score++;
        answerAfterRound(
            "You won! <br> <span class='result'>Rock beats scissors</span>"
        );
    } else if (playerSelection === " paper" && computerSelection === "rock") {
        score++;
        answerAfterRound(
            "You won! <br> <span class='result'>Paper beats rock</span>"
        );
    } else if (
        playerSelection === "scissors" &&
        computerSelection === "paper"
    ) {
        score++;
        answerAfterRound(
            "You won! <br> <span class='result'>Scissors beats paper</span>"
        );
    } else {
        if (playerSelection === "rock") {
            answerAfterRound(
                "You lost! <br> <span class='result'>Paper beats rock</span>"
            );
            computerScore++;
        } else if (playerSelection === "paper") {
            answerAfterRound(
                "You lost! <br> <span class='result'>Scissors beats paper</span>"
            );
            computerScore++;
        } else if (playerSelection === "scissors") {
            answerAfterRound(
                "You lost! <br> <span class='result'>Rock beats scissors</span>"
            );
            computerScore++;
        }
    }
    showScore();
    if (score === 5 || computerScore === 5) {
        const finalRes = document.getElementById("final-result");
        return (finalRes.innerHTML = finalResults());
    }
}

function showScore() {
    const scoreUpdate = document.getElementById("result");
    const gameRules = document.querySelector(".rules");
    gameRules.style.display = "none";
    let scoring = `Player:&nbsp;${score}&nbsp;&nbsp;&nbsp;  Computer:&nbsp;${computerScore}`;
    scoreUpdate.innerHTML = `${scoring}`;
}

function finalResults() {
    const result = document.getElementById("final-result");
    const popupBackground = document.querySelector(".pop-up-background");
    const modal = document.getElementById("play-again-container");
    if (score === computerScore) {
        result.style.display = "flex";
        popupBackground.style.display = "block";
        modal.style.display = "block";
        return (
            "It's a DRAW!  <br> Score" +
            " " +
            "-" +
            " " +
            score +
            ":" +
            computerScore
        );
    }
    if (score > computerScore) {
        result.style.display = "flex";
        popupBackground.style.display = "block";
        modal.style.display = "block";
        return (
            "You won the battle!  <br> Score" +
            " " +
            "-" +
            " " +
            score +
            ":" +
            computerScore
        );
    } else {
        result.style.display = "flex";
        popupBackground.style.display = "block";
        modal.style.display = "block";
        return (
            "You lost the battle! <br> Score" +
            " " +
            "-" +
            " " +
            score +
            ":" +
            computerScore
        );
    }
}
