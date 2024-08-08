let choices = ["Rock", "Paper", "Scissors"];
let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorBtn = document.getElementById("scissor");
let computerChoice = document.getElementById("computerChoice");
let userChoice = document.getElementById("userChoice");
let winnerElement = document.getElementById("winner");
//functions
rockBtn.addEventListener("click", gamePlay);
function gamePlay() {
  let randomIndex = Math.floor(Math.random() * 3);
  computerChoice.innerText = choices[randomIndex];
}
