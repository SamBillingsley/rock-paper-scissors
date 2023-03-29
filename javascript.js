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
choice.appendChild(playerSelection);
choice.appendChild(computerSelection);

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
const playerScore = document.createElement("p");
const computerScore = document.createElement("p");
player.appendChild(playerScore);
computer.appendChild(computerScore);

// Make reset button work
document.getElementById("resetBtn").style.visibility = "hidden";

function resetBtnVisible() {
  document.getElementById("resetBtn").style.visibility = "visible";
}

function reset() {
  playerWins = 0;
  computerWins = 0;
  playerScore.textContent = `${playerWins}`;
  computerScore.textContent = `${computerWins}`;
  outcome.textContent = "";
  document.getElementById("resetBtn").style.visibility = "hidden";
  container.style.backgroundColor = "transparent";
  playerSelection.textContent = "";
  computerSelection.textContent = "";
  player.style.backgroundColor = "white";
  computer.style.backgroundColor = "white";
  enableBtn();
}

const resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", () => reset());

function enableBtn() {
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
}

function disableBtn() {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
}
// Create functions to change colors based on winner
function tie() {
  player.style.backgroundColor = "khaki";
  computer.style.backgroundColor = "khaki";
}

function playerWin() {
  player.style.backgroundColor = "darkSeaGreen";
  computer.style.backgroundColor = "lightCoral";
}

function computerWin() {
  computer.style.backgroundColor = "darkSeaGreen";
  player.style.backgroundColor = "lightCoral";
}

// Create a function to decide the winner
const outcome = document.createElement("div");
choice.appendChild(outcome);

playerScore.textContent = `${playerWins}`;
computerScore.textContent = `${computerWins}`;

function playRound(playerChoice, computerChoice) {
  container.style.backgroundColor = "white";
  if (playerChoice === computerChoice) {
    outcome.textContent = "It's a tie!";
    tie();
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    outcome.textContent = "Player wins!";
    playerWins++;
    playerWin();
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    outcome.textContent = "Player wins!";
    playerWins++;
    playerWin();
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    outcome.textContent = "Player wins!";
    playerWins++;
    playerWin();
  } else {
    outcome.textContent = "Computer wins! You lose.";
    computerWins++;
    computerWin();
  }
  playerScore.textContent = `${playerWins}`;
  computerScore.textContent = `${computerWins}`;

  selection(playerChoice, computerChoice);
  if (playerWins === 5) {
    disableBtn();
    resetBtnVisible();
    container.style.backgroundColor = "darkSeaGreen";
    outcome.textContent = "Player wins the best of 5!";
  } else if (computerWins === 5) {
    disableBtn();
    resetBtnVisible();
    container.style.backgroundColor = "lightCoral";
    outcome.textContent = "Computer wins the best of 5! You lose.";
  }
}
