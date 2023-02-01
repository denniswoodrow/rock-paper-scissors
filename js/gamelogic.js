// Global variables keeping track of score
let playerScore = 0;
let computerScore = 0;

// Simulate computer choice by randomly returning "Rock", "Paper", or "Scissors"
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    
    // Choose a random number between 0 and 2
    function chooseRandomNumber() {
        return Math.floor(Math.random() * 3);
    }
    
    // What the computer chose
    let computerChoice = choices[chooseRandomNumber()];

    // Return the computer's choice
    return computerChoice;
}

function getPlayerChoice() {
    // Capitalizes the first letter of a string
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }    

    // Get user input and store it in a variable
    let userInput = prompt("Enter your choice: Rock, Paper, Scissors").toLowerCase();
    
    // Capitalize first letter of user input
    let playerChoice = capitalizeFirstLetter(userInput);

    // Return player choice
    return playerChoice;
}

// Play a single round of rock, paper, scissors
function playRound(playerSelection, computerSelection) {
    // Compares player choice to computer choice
    switch (playerSelection + computerSelection) {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            playerScore += 1
            return `You win! ${playerSelection} beats ${computerSelection}`;
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            computerScore += 1
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        default:
            
            return `You tie! ${playerSelection} ties ${computerSelection}`;
    }        
}

function game() {
    // Simulate a 5 round game
    for (let i = 0; i < 5; i++) {
        playRound (getPlayerChoice(), getComputerChoice());
    }    
    
    // Declare the winner
    if (playerScore > computerScore) {
        console.log("You win!")
    } else {
        console.log("You lose.")
    }
}