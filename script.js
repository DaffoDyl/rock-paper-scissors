const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
let playerScore = 0;
let computerScore = 0;
let ties = 0;

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
    (winner == "player") ? playerScore++ : (winner == "computer") ? computerScore++ : ties++;
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
}

let checkWinner = () => {
    let winner = (playerScore == 5) ?  "player" : (computerScore == 5) ? "computer" : "none";
    if(winner == "player") {
        console.log("Player win");
        clearBoard();
    }
    else if(winner == "computer") {
        console.log("Computer win")
        clearBoard();
    }
}

let clearBoard = () => {
    playerScore = 0;
    computerScore = 0;
    ties = 0;
}

let handleClick = (playerChoice) => {
    let computerChoice = randomSelection()
    playRound(playerChoice, computerChoice);
    checkWinner(); 
}

rockBtn.addEventListener('click', () => handleClick("rock"));
paperBtn.addEventListener('click', () => handleClick("paper"));
scissorsBtn.addEventListener('click', () => handleClick("scissors"));