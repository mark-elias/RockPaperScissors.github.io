let playerScore = document.querySelector("#player-score");
let computerScore = document.querySelector("#computer-score");
let tieScore = document.querySelector("#tie-score");

let promptOutput = document.querySelector("#prompt-output")

let rockIcon = document.querySelector("#rock");
let paperIcon = document.querySelector("#paper");
let scissorsIcon = document.querySelector("#scissors");


let playerSelection;
let computerSelection;

let playerPoints = 0;
let computerPoints = 0;
let tieRounds = 0;

rockIcon.addEventListener("click", ()=> playGame("rock"));
paperIcon.addEventListener("click", ()=> playGame("paper"));
scissorsIcon.addEventListener("click", ()=> playGame("scissors"));


function writeToPrompt(text){
    promptOutput.textContent += text + '\n';
    // Scroll to the bottom of the terminal box
    promptOutput.scrollTop = promptOutput.scrollHeight;
}

writeToPrompt("Would you like to play a game??");
writeToPrompt(`Select Rock, Paper, or Scissors to start a game \n==============================================`);

function playGame(selection){
    playerSelection = selection;
    computerSelection = computerPlay();

    writeToPrompt(`Player: ${playerSelection}`);
    writeToPrompt(`Computer: ${computerSelection}`);

    let roundWinner = theRef(playerSelection, computerSelection);
    scoreTracker(roundWinner);

    writeToPrompt(`=========================================`);
    
}

// gets random computer choice of rock,paper, or scissors
function computerPlay() {
  // random number between 0 and 1
  let randomNum = Math.random();

  if (randomNum < 0.33) {
    return "rock";
  } else if (randomNum < 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

function theRef(player, computer) {
    if (player === computer) {
      writeToPrompt("tieee ... lame")
      return "tie";
    } else if (player === "rock") {
      if (computer === "scissors") {
        writeToPrompt("Player wins!! Rock beats Scissors")
        return "player";
      } else {
        writeToPrompt("Computer Wins :(( Rock loses to Paper")
        return "computer";
      }
    } else if (player === "paper") {
      if (computer === "rock") {
        writeToPrompt("Player Wins!! Paper beats Rock");
        return "player";
      } else {
        writeToPrompt("Computer Wins :(( Paper loses to Scissors");
        return "computer";
      }
    }
    // player chose scissors
    else {
      if (computer === "paper") {
        writeToPrompt("Player Wins!! Scissors beats Paper");
        return "player";
      } else {
        writeToPrompt("Computer Wins :(( Scissors loses to Rock")
        return "computer";
      }
    }
  }

  function scoreTracker(point) {
    if (point === "player") {
      playerPoints++;
    } else if (point === "computer") {
      computerPoints++;
    } else {
      tieRounds++;
    }

    playerScore.textContent = playerPoints.toString();
    computerScore.textContent = computerPoints.toString();
    tieScore.textContent = tieRounds.toString();
  }
