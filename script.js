let computerPlay = () => {
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

let play = (player, computer) => {
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
    
    player = player[0].toUpperCase() + player.slice(1);
    switch(results) {
        case "tie":
            return `You tied! ${player} ties ${computer}.`;
        case "loss":
            return `You lost! ${player} losses to ${computer}.`;
        case "win":
            return `You won! ${player} beats ${computer}.`;
        default:
            return `Invalid input: ${player} not recognized`;
    }
}

let computerSelection = computerPlay();
let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();

console.log(play(playerSelection, computerSelection));