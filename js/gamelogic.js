// User inputs one of three choices
// The computer generates one of three choices
// The user choice and the computer choice are compared
// If the user choice beats the computer choice then the user score += 1
// If the computer choice beats the user choice then the computer score += 1
// Each round compares the user score and the computer score
// If one score === 5 then the game is over

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
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            break;
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            break;
        default:
            console.log(`You tie! ${playerSelection} ties ${computerSelection}`);
    }        
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));