let computerSelection;
let playerCount = 0;
let computerCount = 0;
let playerSelection;
let result;

const div = document.createElement('div');
const resultDiv = document.createElement('div');
const para = document.createElement('p');
const paraTwo = document.createElement('p');
const paraResult = document.createElement('p')
const buttons = document.querySelectorAll('button');
const body = document.querySelector('body');

div.classList.add('mainDiv');
resultDiv.classList.add = 'results';

body.insertBefore(div, body.firstChild);
div.insertBefore(resultDiv, div.firstChild);
resultDiv.appendChild(para);
resultDiv.appendChild(paraTwo);
resultDiv.insertBefore(paraResult, resultDiv.firstChild);
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

// buttons.forEach(button => button.addEventListener('click', (e) => {
//     playRound(e.target.id, getComputerChoice());
//     if (result == 'player'){
//         playerCount +=  1;
//         para.textContent = `Player wins this round.`;
//     } else if (result == 'computer'){
//         computerCount += 1;
//         para.textContent = 'Computer wins this round.';
//     } else {
//         para.textContent = 'DRAW';
//     };
//     paraTwo.textContent = `SCORES: Player - ${playerCount}
//     Computer - ${computerCount}`;
// }));



//function that plays a single game with two parameters (playerSelection, computerSelection)

function playRound(playerSelection, computerSelection) {

    let tie = 'draw';
    let playerWin = 'player';
    let computerWin = 'computer';
    // not to take into account case-sensitivity
    // let player = playerSelection.toLowerCase();
    // let robot = computerSelection.toLowerCase();

    if (playerSelection === 'rock' && computerSelection == 'rock') {
        return tie;
    } else if (playerSelection === 'rock' && computerSelection == 'paper'){
        computerCount++;
        return computerWin;
    } else if (playerSelection === 'rock' && computerSelection == 'scissors') {
        playerCount++;
        return playerWin;
    } else if (playerSelection === 'paper' && computerSelection == 'rock'){
        playerCount++;
        return playerWin;
    } else if (playerSelection === 'paper' && computerSelection == 'paper'){
        return tie;
    } else if (playerSelection === 'paper' && computerSelection == 'scissors') {
        computerCount++;
        return computerWin;
    } else if (playerSelection === 'scissors' && computerSelection == 'scissors') {
        return tie;
    } else if (playerSelection === 'scissors' && computerSelection == 'paper') {
        playerCount++;
        return playerWin;
    } else if (playerSelection === 'scissors' && computerSelection == 'rock') {
        computerCount++;
        return computerWin;
    }
}


function game(){
    paraTwo.textContent = `SCORES = Player - ${playerCount}
    Computer - ${computerCount}`;
    if(playerCount === 5){
        para.textContent = `Player wins the game. score is ${playerCount}`;
    } else if (computerCount === 5){
        para.textContent = `Computer wins the game. score is ${computerCount}`;
    };
};

const playButton = buttons.forEach((button) => {
        button.addEventListener('click', function(e) {
            playerSelection = e.target.id;
            computerSelection = getComputerChoice();
            if(playerCount === 5 || computerCount === 5){
                paraResult.textContent = 'GAME OVER';
            } else {
                console.log(playRound(playerSelection, computerSelection));
                game();
            }

        });
    });

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

