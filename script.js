function getComputerChoice() {
    let choice = Math.random() * 100;
    return choice > 66.6 ? "Rock" : choice <= 66.6 && choice > 33.3 ? "Paper" : "Scissors";
}