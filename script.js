let playerScore = document.querySelector("#player-score");
let computerScore = document.querySelector("#computer-score");

let promptOutput = document.querySelector("#prompt-output")

let rockIcon = document.querySelector("#rock");
let paperIcon = document.querySelector("#paper");
let scissorsIcon = document.querySelector("#scissors");


let playerSelection;
let computerSelection;

rockIcon.addEventListener("click", ()=> playGame("rock"));
paperIcon.addEventListener("click", ()=> playGame("paper"));
scissorsIcon.addEventListener("click", ()=> playGame("scissors"));


function writeToPrompt(text){
    promptOutput.textContent += text + '\n';
    // Scroll to the bottom of the terminal box
    promptOutput.scrollTop = promptOutput.scrollHeight;
}

writeToPrompt(`Choose between Rock, Paper, or Scissors to start a game \n====================`);

function playGame(selection){
    playerSelection = selection;
    computerSelection = computerPlay();

    writeToPrompt(`Player: ${playerSelection}`);
    writeToPrompt(`Computer: ${computerSelection}`);
    
    theRef(playerSelection, computerSelection);
    writeToPrompt(`====================`);
    
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
      console.log("tieee");
      return "tie";
    } else if (player === "rock") {
      if (computer === "scissors") {
        console.log("player wins, rock beats scissors");
        return "player";
      } else {
        console.log("compuer wins, rocks loses to paper");
        return "computer";
      }
    } else if (player === "paper") {
      if (computer === "rock") {
        console.log("player wins, paper beats rock");
        return "player";
      } else {
        console.log("computer wins, papers loses to scissors");
        return "computer";
      }
    }
    // player chose scissors
    else {
      if (computer === "paper") {
        console.log("player wins, scissors beats paper");
        return "player";
      } else {
        console.log("computer wins, scissors loses to rock");
        return "computer";
      }
    }
  }
