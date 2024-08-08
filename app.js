let choices = ["Rock", "Paper", "Scissors"];
let computerChoice = document.getElementById("computerChoice");
let userChoice = document.getElementById("userChoice");
let winnerElement = document.getElementById("winner");
//functions
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let randomIndex = Math.floor(Math.random() * 3);
    computerChoice.innerText = choices[randomIndex];
  });
});
