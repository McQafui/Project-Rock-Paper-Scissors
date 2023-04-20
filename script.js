// Returns a random choice of Rock, Paper, or Scissors
function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
// Plays a single round of the game and returns the result
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection){
        return "it's a tie!";
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock' ||  
            playerSelection === 'rock' && computerSelection === 'scissors' ||
            playerSelection === 'scissors' && computerSelection === 'paper'){
            return 'You Win! ${playerSelection} beats ${computerSelection}';
    }else{
        return 'You lose! ${computerSelection} beats ${playerSelection}';
    }

// Plays the game for a specified number of rounds and keeps score
function game(numRounds){
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < numRounds; i++){
        const playerSelection = promt('pick your choice: Rock, Paper, Scissor');
        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);
    }

}

}