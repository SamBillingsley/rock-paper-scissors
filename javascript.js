const container = document.querySelector("#container");

// Make array for each choice
const choices = ["rock", "paper", "scissors"];

// Make a function for the computers choice, which chooses a random string from the choices array
function computerChoice() {
  let randNum = Math.floor(Math.random() * 3);
  return choices[randNum];
}

// Create playerWins and computerWins variable to keep track of wins
let playerWins = 0;
let computerWins = 0;

const playerSelection = document.createElement("p");
const computerSelection = document.createElement("p");
container.appendChild(playerSelection);
container.appendChild(computerSelection);

function selection(playerChoice, computerChoice) {
  playerSelection.textContent = "Players choice:" + " " + playerChoice;
  computerSelection.textContent = "Computers choice:" + " " + computerChoice;
}

// Create event listeners for buttons to select playerChoice
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

rockBtn.addEventListener("click", () => playRound("rock", computerChoice()));
paperBtn.addEventListener("click", () => playRound("paper", computerChoice()));
scissorsBtn.addEventListener("click", () =>
  playRound("scissors", computerChoice())
);

// Create a function that displays the score
const scoreboard = document.createElement("div");
container.appendChild(scoreboard);

const playerScore = document.createElement("p");
const computerScore = document.createElement("p");
scoreboard.appendChild(playerScore);
scoreboard.appendChild(computerScore);

// Make reset button work
document.getElementById("resetBtn").style.visibility = "hidden";

function resetBtnVisible() {
  document.getElementById("resetBtn").style.visibility = "visible";
}

function reset() {
  playerWins = 0;
  computerWins = 0;
  playerScore.textContent = `Player: ${playerWins}`;
  computerScore.textContent = `Computer: ${computerWins}`;
  outcome.textContent = "";
  document.getElementById("resetBtn").style.visibility = "hidden";
}

const resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", () => reset());

// Create a function to decide the winner
const outcome = document.createElement("div");
container.appendChild(outcome);

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    outcome.textContent = "It's a tie!";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    outcome.textContent = "Player wins!";
    playerWins++;
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    outcome.textContent = "Player wins!";
    playerWins++;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    outcome.textContent = "Player wins!";
    playerWins++;
  } else {
    outcome.textContent = "Computer wins! You lose.";
    computerWins++;
  }
  playerScore.textContent = `Player: ${playerWins}`;
  computerScore.textContent = `Computer: ${computerWins}`;
  selection(playerChoice, computerChoice);
  if (playerWins === 5) {
    resetBtnVisible();
    outcome.textContent = "Player wins the best of 5!";
  } else if (computerWins === 5) {
    resetBtnVisible();
    outcome.textContent = "Computer wins the best of 5! You lose.";
  }
}
