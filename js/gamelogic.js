// User inputs one of three choices.
// The computer generates one of three choices.
// The user choice and the computer choice are compared.
// If the user choice beats the computer choice then the user score += 1.
// If the computer choice beats the user choice then the computer score += 1.
// Each round compares the user score and the computer score.
// If one score === 5 then the game is over.


// simulate computer choice by randomly returning "Rock", "Paper", or "Scissors"
function getComputerChoice() {
    // what the computer can choose from
    let choices = ["Rock", "Paper", "Scissors"];
    
    // chooses a random number between 0 and 2
    function chooseRandomNumber() {
        return Math.floor(Math.random() * 3);
    }
    
    // what the computer chooses
    let computerChoice = chooseRandomNumber();

    //return the computer's choice
    return choices[computerChoice];
}