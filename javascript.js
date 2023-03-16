// Make array for each choice
const choices = ["rock", "paper", "scissors"];
function randNum() {
  return Math.floor(Math.random() * 3);
}

// Make a function for the computers choice, which chooses a random string from the choices array
function getComputerChoice() {
  return choices[randNum()];
}

let computerChoice = getComputerChoice();

// Ask the user to choose one of the three choices
function getPlayerChoice() {
  let userInput = prompt("Rock, Paper, or Scissors?");
  const input = userInput.toLowerCase;
  if (userInput.toLowerCase() === "rock") {
    return choices[0];
  } else if (userInput.toLowerCase() === "paper") {
    return choices[1];
  } else if (userInput.toLowerCase() === "scissors") {
    return choices[2];
  } else {
    alert("Not a valid response, try again.");
    getPlayerChoice();
  }
}

let playerChoice = getPlayerChoice();

// Create playerWins and computerWins variable to keep track of wins
let playerWins = 0;
let computerWins = 0;

// Create a function to decide the winner
function playRound(playerChoice, computerChoice) {
  console.log("Players choice:" + " " + playerChoice);
  console.log("Computers choice:" + " " + computerChoice);
  if (playerChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    console.log("Player wins!");
    playerWins++;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    console.log("Player wins!");
    playerWins++;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    console.log("Player wins!");
    playerWins++;
  } else {
    console.log("Computer wins! You lose.");
    computerWins++;
  }
}

// Create a function that displays the score
function score(playerWins, computerWins) {
  console.log(`Player: ${playerWins}`);
  console.log(`Computer: ${computerWins}`);
}

// Create game function, best of 5
function game(playerChoice, computerChoice) {
  playRound(playerChoice, computerChoice);
  score(playerWins, computerWins);
  while (playerWins < 3 && computerWins < 3) {
    playerChoice = getPlayerChoice();
    computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
    score(playerWins, computerWins);
  }
  if (playerWins === 3) {
    console.log("Player has won the best of 5!");
  } else {
    console.log("Computer has won the best of 5! You lose.");
  }
}

game(playerChoice, computerChoice);
