let computerChoice;

// function that chooses random pick
function getComputerChoice() {
    // create a rand generator from 1 to 3 (3 total options)
    let rand = Math.floor(Math.random() * 3) + 1;

    if (rand == 1) {
        computerChoice = 'Rock';
    } else if (rand == 2) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissors';
    }
}

getComputerChoice();

console.log(computerChoice);