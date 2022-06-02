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

let computerSelection = computerPlay();