let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

function getComputerChoice(n) {
  if (n < 1 / 3) return "scissors";
  else if (n < 2 / 3) return "rock";
  else return "paper";
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    alert("It's a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    alert(`You win! ${humanChoice} beats ${computerChoice}!`);
  } else {
    computerScore++;
    alert(`You lose! ${computerChoice} beats ${humanChoice}!`);
  }

  roundCount++;
  scoreDisplay.textContent = `Round: ${roundCount} | You: ${humanScore} | Computer: ${computerScore}`;

  if (roundCount === 5) {
    if (humanScore > computerScore) {
      alert("🏆 You won the game!");
    } else if (computerScore > humanScore) {
      alert("💀 You lost the game.");
    } else {
      alert("🤝 It's a tie game!");
    }
    resetGame();
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  roundCount = 0;
  scoreDisplay.textContent = `Round: 0 | You: 0 | Computer: 0`;
}

// Create container for buttons
const buttonContainer = document.createElement("div");
buttonContainer.style.cssText = `
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
`;

function createButton(text) {
  const button = document.createElement("button");
  button.textContent = text;
  button.style.cssText = `
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    border: 2px solid #444;
    border-radius: 10px;
    background-color: #f0f0f0;
    cursor: pointer;
    transition: background-color 0.3s;
  `;
  button.addEventListener("mouseenter", () => {
    button.style.backgroundColor = "#ddd";
  });
  button.addEventListener("mouseleave", () => {
    button.style.backgroundColor = "#f0f0f0";
  });
  button.addEventListener("click", () => {
    playRound(text.toLowerCase(), getComputerChoice(Math.random()));
  });
  return button;
}

// Append buttons
buttonContainer.appendChild(createButton("Rock"));
buttonContainer.appendChild(createButton("Paper"));
buttonContainer.appendChild(createButton("Scissors"));
document.body.appendChild(buttonContainer);

// Score display
const scoreDisplay = document.createElement("div");
scoreDisplay.id = "score";
scoreDisplay.textContent = `Round: 0 | You: 0 | Computer: 0`;
scoreDisplay.style.cssText = `
  margin-top: 30px;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`;
document.body.appendChild(scoreDisplay);