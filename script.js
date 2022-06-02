//Players response
let playerPlay = () => {
    return prompt("Rock, paper, or scissors?").toLowerCase();
}
//Computers response
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
//Play one round based on responses
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

    return results;
}
//Play game, best of five
let game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let noWinner = true;

    console.log("Rock, paper, scissors! The game will continue until best of 5.");

    while(noWinner) {
        let player = playerPlay();
        let computer = computerPlay()
        let results = play(player, computer);
        player = player[0].toUpperCase() + player.slice(1);

        switch(results) {
            case "tie":
                console.log(`You tied! ${player} ties ${computer}.`);
                break
            case "loss":
                console.log(`You lost! ${player} losses to ${computer}.`);
                computerScore++
                break;
            case "win":
                console.log(`You won! ${player} beats ${computer}.`);
                playerScore++
                break;
            default:
                console.log(`Invalid input: ${player} not recognized. No winner.`);
        }

        if(playerScore == 3 || computerScore == 3) noWinner = false;
    }

    if(playerScore > computerScore) {
        console.log(`You won best of five! Final score was ${playerScore} to ${computerScore}.`);
    }
    else {
        console.log(`You lost best of five. Final score was ${playerScore} to ${computerScore}.`);
    }
}

game();