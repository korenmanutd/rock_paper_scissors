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
    return computerSelection;
}

// getComputerChoice()


//function that plays a single game with two parameters (playerSelection, computerSelection)

function playRound(playerSelection, computerSelection) {

    // not to take into account case-sensitivity
    let player = playerSelection.toLowerCase();
    let robot = computerSelection.toLowerCase();

    if (player === 'rock' && robot == 'rock') {
        result = 'Draw';
    } else if (player === 'rock' && robot == 'paper'){
        result = 'Lose';
    } else if (player === 'rock' && robot == 'scissors') {
        result = 'Win'
    } else if (player === 'paper' && robot == 'rock'){
        result = 'Win'
    } else if (player === 'paper' && robot == 'paper'){
        result = 'Draw'
    } else if (player === 'paper' && robot == 'scissors') {
        result = 'lose'
    } else if (player === 'scissors' && robot == 'scissors') {
        result = 'Draw'
    } else if (player === 'scissors' && robot == 'paper') {
        result = 'Win'
    } else if (player === 'scissors' && robot == 'rock') {
        result = 'Lose'
    }
    return result;
}


// game() uses playRound()
function game(){
    let computerCount = 0;
    let playerCount = 0;
    //play every round until 5
    for (let i = 1; i < 6; i++) {
        // use playRound with player and computer selection, then inform who won the round
        let playerSelection = prompt('what is your selection please?')
        playRound(playerSelection, getComputerChoice());
        console.log(`round number ${i} player ${playerSelection}: ${playerCount} computer ${computerSelection}: ${computerCount} result is ${result}`)
    }
}

console.log(computerSelection)
// console.log(playRound(playerSelection, computerSelection));

console.log(game())

