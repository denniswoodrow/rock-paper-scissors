// User inputs one of three choices
// The computer generates one of three choices
// The user choice and the computer choice are compared
// If the user choice beats the computer choice then the user score += 1
// If the computer choice beats the user choice then the computer score += 1
// Each round compares the user score and the computer score
// If one score === 5 then the game is over

let choices = ["Rock", "Paper", "Scissors"];

// Simulate computer choice by randomly returning "Rock", "Paper", or "Scissors"
function getComputerChoice() {
    // Choose a random number between 0 and 2
    function chooseRandomNumber() {
        return Math.floor(Math.random() * 3);
    }
    
    // What the computer chose
    let computerChoice = choices[chooseRandomNumber()].toLowerCase();

    // Return the computer's choice
    return computerChoice;
}


