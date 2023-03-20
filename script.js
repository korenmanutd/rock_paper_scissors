let computerSelection;
let result;

// function that chooses random pick
function getComputerChoice() {
    // create a rand generator from 1 to 3 (3 total options)
    let rand = Math.floor(Math.random() * 3) + 1;

    if (rand == 1) {
        computerSelection = 'Rock';
    } else if (rand == 2) {
        computerSelection = 'Paper';
    } else {
        computerSelection = 'Scissors';
    }
}

getComputerChoice()

//function that plays a single game with two parameters (playerSelection, computerSelection)

function playRound(playerSelection, computerSelection) {

    // not to take into account case-sensitivity
    let player = playerSelection.toLowerCase();
    let robot = computerSelection.toLowerCase();

    if (player == 'rock' && robot == 'rock') {
        result = 'Draw! rock and rock!';
    } else if (player == 'rock' && robot == 'paper'){
        result = 'You lose! Paper beats Rock!'
    } else if (player == 'rock' && robot == 'scissors') {
        result = 'You win! Rock beats Scissors!'
    } else if (player == 'paper' && robot == 'rock'){
        result = 'You win! Paper Beats Rock!'
    } else if (player == 'paper' && robot == 'paper'){
        result = 'Draw! paper and paper!'
    } else if (player == 'paper' && robot == 'scissors') {
        result = 'You lose! Scissors beat Paper!'
    } else if (player == 'scissors' && robot == 'scissors') {
        result = 'Draw! Scissors and Scissors!'
    } else if (player == 'scissors' && robot == 'paper') {
        result = 'You win! Scissors beat Paper!'
    } else if (player == 'scissors' && robot == 'rock') {
        result = 'You lose! Rock beats Scissors!'
    }
    return result;
}

let playerSelection = 'RoCK';
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));
