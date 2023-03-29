let computerSelection;
let playerSelection;
let playerCount = 0;
let computerCount = 0;
let result;

const div = document.createElement('div');
const resultDiv = document.createElement('div');
const para = document.createElement('p');
const paraTwo = document.createElement('p');
const buttons = document.querySelectorAll('button');
const body = document.querySelector('body');

div.classList.add('mainDiv');
resultDiv.classList.add = 'results';

body.insertBefore(div, body.firstChild);
div.insertBefore(resultDiv, div.firstChild);
resultDiv.appendChild(para);
resultDiv.appendChild(paraTwo);
buttons.forEach(button => div.appendChild(button));

paraTwo.textContent = `SCORES = Player - ${playerCount}
Computer - ${computerCount}`;

// function that chooses random pick
function getComputerChoice() {
    // create a rand generator from 1 to 3 (3 total options)
    let rand = Math.floor(Math.random() * 3) + 1;

    if (rand == 1) {
        computerSelection = 'rock';
    } else if (rand == 2) {
        computerSelection = 'paper';
    } else {
        computerSelection = 'scissors';
    }
    return computerSelection;
}

// listen to button click, once clicked - return id of button and call the computer choice function
buttons.forEach(button => button.addEventListener('click', (e) => {
    playRound(e.target.id, getComputerChoice());
    if (result == 'player'){
        playerCount +=  1;
        para.textContent = `Player wins this round.`;
    } else if (result == 'computer'){
        computerCount += 1;
        para.textContent = 'Computer wins this round.';
    };
    paraTwo.textContent = `SCORES: Player - ${playerCount}
    Computer - ${computerCount}`;
    console.log(playerCount)
    console.log(computerCount)
}));



//function that plays a single game with two parameters (playerSelection, computerSelection)

function playRound(playerSelection, computerSelection) {

    // not to take into account case-sensitivity
    // let player = playerSelection.toLowerCase();
    // let robot = computerSelection.toLowerCase();

    if (playerSelection === 'rock' && computerSelection == 'rock') {
        result = 'draw';
    } else if (playerSelection === 'rock' && computerSelection == 'paper'){
        result = 'computer';
    } else if (playerSelection === 'rock' && computerSelection == 'scissors') {
        result = 'player';
    } else if (playerSelection === 'paper' && computerSelection == 'rock'){
        result = 'player';
    } else if (playerSelection === 'paper' && computerSelection == 'paper'){
        result = 'draw';
    } else if (playerSelection === 'paper' && computerSelection == 'scissors') {
        result = 'computer';
    } else if (playerSelection === 'scissors' && computerSelection == 'scissors') {
        result = 'draw';
    } else if (playerSelection === 'scissors' && computerSelection == 'paper') {
        result = 'player';
    } else if (playerSelection === 'scissors' && computerSelection == 'rock') {
        result = 'computer';
    }
    return result;
}

// game() uses playRound()
// function game(){
//     let computerCount = 0;
//     let playerCount = 0;
//     //play every round until 5
//     for (let i = 1; i < 6; i++) {
//         // use playRound with player and computer selection, then inform who won the round
//         let playerSelection = prompt('what is your selection please? Rock, Paper or Scissors?').toLowerCase();

//             if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors') {
//                 playRound(playerSelection, getComputerChoice());
//                 if (result === 'Draw'){
//                     playerCount += 1;
//                     computerCount += 1;
//                 } else if (result === 'Player Wins!'){
//                     playerCount += 1;
//                 } else if (result === 'Computer Wins!'){
//                     computerCount += 1;
//                 }
//             } else {
//                 console.log('You didn\'t enter anything. You lose this round');
//                 computerCount += 1;
//             }
//         // if (playerSelection === '') {
//         //     let playerSelection = prompt('Again, what is your selection? Rock, Paper or Scissors?');
//         // } else if (typeof playerSelection === 'number'){
//         //     let playerSelection = prompt('You have entered a number, doesn\'t make sense, does it? try again please!')
//         // } else if (playerSelection == 'rock' || playerSelection == 'scissors' || playerSelection == 'paper') {
//         //     playRound(playerSelection, getComputerChoice());
//         //     if (result === 'Draw'){
//         //         playerCount += 1;
//         //         computerCount += 1;
//         //     } else if (result === 'Player Wins!') {
//         //         playerCount += 1;
//         //     } else if (result === 'Computer Wins!') {
//         //         computerCount += 1;
//         //     }
//         // }

//         console.log(`Round number: ${i} Winner is: ${result} Scores - Computer ${computerCount} , Player ${playerCount}`)
//     }
//     if (playerCount > computerCount) {
//         console.log(`Game finished. Player wins with the result: Player ${playerCount} Computer ${computerCount}`)
//     } else if (playerCount == computerCount) {
//         console.log(`Game finished. the result is a draw!!!!`)
//     } else {
//         console.log(`Game finished. Computer wins with the result: Computer ${computerCount} Player ${playerCount}`)
//     }
// }

// console.log(computerSelection)
// console.log(playRound(playerSelection, computerSelection));

// console.log(game())

