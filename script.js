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
let playRound = (player, computer) => {
    let results;

    switch(player) {
        case "rock":
            (computer == "rock") ? results = "tie" : (computer == "paper") ? results = "loss" : results = "win";
            break;
        case "paper":
            (computer == "paper") ? results = "tie" : (computer == "scissors") ? results = "loss" : results = "win";
            break;
        case "scissors":
            (computer == "scissors") ? results = "tie" : (computer == "rock") ? results = "loss" : results = "win";
    }

    return results;
}

let updateScore = (results) => {
    (results == "win") ? playerScore++ : (results == "loss") ? computerScore++ : ties++;
}

let whoWins = () => {
    return (playerScore == 5) ?  "player" : (computerScore == 5) ? "computer" : "none";
}

let clearBoard = () => {
    playerScore = 0;
    computerScore = 0;
    ties = 0;
}

let handleClick = (playerChoice) => {
    let computerChoice = randomSelection()
    let results = playRound(playerChoice, computerChoice);
    updateScore(results);
    let winner = whoWins();
    if(winner == "player") {
        console.log("Player win");
        clearBoard();
    }
    else if(winner == "computer") {
        console.log("Computer win")
        clearBoard();
    }
}

rockBtn.addEventListener('click', () => handleClick("rock"));
paperBtn.addEventListener('click', () => handleClick("paper"));
scissorsBtn.addEventListener('click', () => handleClick("scissors"));