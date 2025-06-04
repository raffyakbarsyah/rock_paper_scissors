function getComputerChoice (n) {
  if (n < 1/3) {
    return("scissors");
  }

  else if (n > 1/3 && n < 2/3) {
    return("rock");
  }

  else {
    return("paper");
  }
}

function getHumanChoice() {
  let userInput = prompt("Rock, Paper, Scissors?");

  return userInput;
}

function playGame () {
  let humanScore = 0;
  let computerScore = 0;

  function playRound (humanChoice, computerChoice) {
    humanchoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      alert("It's a tie!")
    }

    else if (
      humanChoice === "rock" && computerChoice === "scissors" ||
      humanChoice === "paper" && computerChoice === "rock" ||
      humanChoice === "scissors" && computerChoice === "paper"
    ) {
      humanScore++;
      alert (`You win! ${humanChoice} beats ${computerChoice}!`)
    }

    else {
      computerScore++;
      alert (`You lose! ${computerChoice} beats ${humanChoice}!`)
    }
  }

  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  if (humanScore > computerScore) {
    alert("Congratulations! You won the game!");
  }

  else {
    alert("You lost the game. Better luck next time!");
  }
}

playGame();

