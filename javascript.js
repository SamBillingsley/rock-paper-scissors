// Make array for each choice
const choices = ["rock", "paper", "scissors"];

// Make a function for the computers choice, which chooses a random string from the choices array
function computerChoice() {
  let randNum = Math.floor(Math.random() * 3);
  return choices[randNum];
}

// Ask the user to choose one of the three choices
// function getPlayerChoice() {
//   let userInput = prompt("Rock, Paper, or Scissors?");
//   const input = userInput.toLowerCase;
//   if (userInput.toLowerCase() === "rock") {
//     return choices[0];
//   } else if (userInput.toLowerCase() === "paper") {
//     return choices[1];
//   } else if (userInput.toLowerCase() === "scissors") {
//     return choices[2];
//   } else {
//     alert("Not a valid response, try again.");
//     getPlayerChoice();
//   }
// }

// let playerChoice = getPlayerChoice();

// Create playerWins and computerWins variable to keep track of wins
let playerWins = 0;
let computerWins = 0;

// Create event listeners for buttons to select playerChoice
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

rockBtn.addEventListener("click", () => playRound("rock", computerChoice()));
paperBtn.addEventListener("click", () => playRound("paper", computerChoice()));
scissorsBtn.addEventListener("click", () =>
  playRound("scissors", computerChoice())
);

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

// // Create a function that displays the score
// function score(playerWins, computerWins) {
//   console.log(`Player: ${playerWins}`);
//   console.log(`Computer: ${computerWins}`);
// }

// // Create game function, best of 5
// function game(playerChoice, computerChoice) {
//   playRound(playerChoice, computerChoice);
//   score(playerWins, computerWins);
//   while (playerWins < 3 && computerWins < 3) {
//     playerChoice = getPlayerChoice();
//     computerChoice = getComputerChoice();
//     playRound(playerChoice, computerChoice);
//     score(playerWins, computerWins);
//   }
//   if (playerWins === 3) {
//     console.log("Player has won the best of 5!");
//   } else {
//     console.log("Computer has won the best of 5! You lose.");
//   }
// }

// playRound(playerChoice, computerChoice);
