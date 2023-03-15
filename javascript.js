// Make array for each choice
const choices = ["rock", "paper", "scissors"];
randNum = Math.floor(Math.random() * 3);

// Make a function for the computers choice, which chooses a random string from the choices array
function getComputerChoice() {
  return choices[randNum];
}

const computerChoice = getComputerChoice();

// Ask the user to choose one of the three choices
const playerChoice = "rock";

// Create a function to decide the winner
function game(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    console.log("Player wins!");
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    console.log("Player wins!");
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    console.log("Player wins!");
  } else {
    console.log("Computer wins! You lose.");
  }
}

console.log(game(playerChoice, computerChoice));
