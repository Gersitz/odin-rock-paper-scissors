playGame();

function getComputerChoice() {
    let choice = Math.random() * 100;
    return choice > 66.6 ? "Rock" : choice <= 66.6 && choice > 33.3 ? "Paper" : "Scissors";
}

function getHumanChoice() {
    let validInput = false;
    let choice = prompt("Pick your weapon: Rock, Paper or Scissors!");
    
    while (!validInput) {
        if (choice.toLowerCase() === "rock" || choice.toLowerCase() === "paper" || choice.toLowerCase() === "scissors") {
            validInput = true;
        } else {
            choice = prompt("Invalid input! Please pick your weapon: Rock, Paper or Scissors!");
        }
    }

    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    let round = (humanChoice, computerChoice) => {
        if (humanChoice.toLowerCase() == computerChoice.toLowerCase()) {
            return "It's a tie!";
        } else if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors" || humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock" || humanChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
            humanScore++;
            return "You win!"
        } else {
            computerScore++;
            return "You lose!";
        }
    }

    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        
        
        console.log(round(humanChoice, computerChoice));
    }
    
    if (humanScore == computerScore) {
        console.log(`You got ${humanScore} points. The computer got ${computerScore} points. It's a tie!`)

    }
    else if (humanScore > computerScore) {
        console.log(`You got ${humanScore} points. The computer got ${computerScore} points. You win!`)
    } else {
        console.log(`You got ${humanScore} points. The computer got ${computerScore} points. You lose.`)
        
    }
}