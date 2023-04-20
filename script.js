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

}