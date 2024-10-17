function getComputerChoice(){
  let choice = Math.floor(Math.random() * 3);
  if(choice == 0) return "rock";
  else if(choice == 1) return "paper";
  else return "scissors";
}

function getHumanChoice(){
  let userChoice = prompt("Choose one among rock, paper and scissors");
  userChoice = userChoice.toLowerCase().trim();
  return userChoice;
}

let humanScore = 0, computerScore = 0;

function playRound(){
  let humanChoice= getHumanChoice();
  let computerChoice= getComputerChoice();

  

  if(humanChoice == computerChoice) console.log(`Both computer and human chose ${humanChoice}! Results in a draw`);
  else if(humanChoice == "rock" && computerChoice == "scissors"){
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
    return 1;
  }else if(humanChoice == "scissors" && computerChoice == "paper"){
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
    return 1;
  }else if(humanChoice == "paper" && computerChoice == "rock"){
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
    return 1;
  }else if(computerChoice == "rock" && humanChoice == "scissors"){
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
    return 1;
  }else if(computerChoice == "scissors" && humanChoice == "paper"){
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
    return 1;
  }else if(computerChoice == "paper" && humanChoice == "rock"){
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
    return 1;
  }
  return 0;
}

function playGame(){
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
  if(humanScore > computerScore) console.log("Yay! The human has proven his superiority over his creation");
  else if(humanScore < computerScore) console.log("Curses! The machine has beaten its creator. Is mankind doomed?");
  else console.log("Alas, the human and computer live to die another day");
}

playGame();