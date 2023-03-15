Create a function to decide the winner
function game(playerChoice, computerChoice) {
  if playerChoice() === computerChoice()
    console.log("It's a tie!")
  else if playerChoice() === "rock" && computerChoice() === "paper"
    console.log("Player wins!")
  else if playerChoice() === "paper" && computerChoice() === "rock"
    console.log("Player wins!")
  else if playerChoice() === "scissors" && computerChoice() === "paper"
    console.log("Player wins!")
  else
    console.log("Computer wins! You lose.")
}
