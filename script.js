const scoreMessage = document.getElementById('scoreMessage');
const playerSign = document.getElementById('playerSign');
const playerScoreUI = document.getElementById('playerScore');
const computerSign = document.getElementById('computerSign');
const computerScoreUI = document.getElementById('computerScore');
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resetBtn = document.getElementById("reset");

let playerScore = 0;
let computerScore = 0;

let randomSelection = () => {
    let selection = Math.floor(Math.random() * 3);

    switch(selection) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

let updateScore = (winner) => {
    if(winner == "player") {
        playerScore++;
    }
    else if(winner == "computer") {
        computerScore++;
    } 
}

let playRound = (player, computer) => {
    let winner;

    switch(player) {
        case "rock":
            (computer == "rock") ? winner = "tie" : (computer == "paper") ? winner = "computer" : winner = "player";
            break;
        case "paper":
            (computer == "paper") ? winner = "tie" : (computer == "scissors") ? winner = "computer" : winner = "player";
            break;
        case "scissors":
            (computer == "scissors") ? winner = "tie" : (computer == "rock") ? winner = "computer" : winner = "player";
    }
    updateScore(winner);

    return winner;
}

let updateBoard = (player, computer, winner) => {
    switch(winner) {
        case "player":
            scoreMessage.textContent = `You won, ${player} beats ${computer}!`;
            break;
        case "computer":
            scoreMessage.textContent = `You lost, ${computer} beats ${player}!`;
            break;
        case "tie":
            scoreMessage.textContent = `It's a tie, ${player} ties ${computer}!`;
    }
    switch(player) {
        case "rock":
            playerSign.textContent = "🪨";
            break;
        case "paper":
            playerSign.textContent = "📃";
            break;
        case "scissors":
            playerSign.textContent = "✂️";
    }
    switch(computer) {
        case "rock":
            computerSign.textContent = "🪨";
            break;
        case "paper":
            computerSign.textContent = "📃";
            break;
        case "scissors":
            computerSign.textContent = "✂️";
    }
    playerScoreUI.textContent = `Player: ${playerScore}`;
    computerScoreUI.textContent = `Computer ${computerScore}`
}

let checkGameOver = () => {
    let winner = (playerScore == 5) ?  "player" : (computerScore == 5) ? "computer" : "none";
    if(winner == "player") {
        scoreMessage.textContent = "You won! You beat the advanced AI and saved humanity!";
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        resetBtn.firstElementChild.textContent = "🏆"
    }
    else if(winner == "computer") {
        scoreMessage.textContent = "You lost... The advanced AI beat you and destroyed humanity!";
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        resetBtn.firstElementChild.textContent = "🪦"
    }
}

let handleClick = (playerChoice) => {
    let computerChoice = randomSelection()
    let winner = playRound(playerChoice, computerChoice);
    updateBoard(playerChoice, computerChoice, winner);
    checkGameOver(); 
}

let resetBoard = () => {
    playerScore = 0;
    computerScore = 0;
    scoreMessage.textContent = "Score five points to win";
    playerSign.textContent = "❔";
    computerSign.textContent = "❔";
    playerScoreUI.textContent = `Player: ${playerScore}`;
    computerScoreUI.textContent = `Computer ${computerScore}`
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    resetBtn.firstElementChild.textContent = "🔁"
}

rockBtn.addEventListener('click', () => handleClick("rock"));
paperBtn.addEventListener('click', () => handleClick("paper"));
scissorsBtn.addEventListener('click', () => handleClick("scissors"));
resetBtn.addEventListener('click', () => resetBoard());