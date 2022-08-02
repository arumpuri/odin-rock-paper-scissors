const computerChoiceDisplay = document.getElementById('computerDisplay');
const userChoiceDisplay = document.getElementById('my-choice');
const playerSelection = document.getElementById('playerSelection');
const inputUserChoice = document.getElementById('playerSelection');
inputUserChoice.toString().toLowerCase();
let win;
let lose;
let draw;
let computerChoice;
let result;
let finalResult;

function computerPlay() {
    let choice = Math.floor(Math.random() * 3) + 1;
    console.log(choice);

    if (choice == 1) {
        computerChoice = 'rock';
    }

    if (choice == 2) {
        computerChoice = 'paper';
    }

    if (choice == 3) {
        computerChoice = 'scissors';
    }

    return computerChoice;
}

const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        result = "It's a draw";
        draw += 1;
        win += 0;
        lose += 0;
    }
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        result = "You lose";
        lose += 1;
        win += 0;
        draw += 0;
    }
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        result = "you win";
        win += 1;
        lose += 0;
        draw += 0;
    }
    if (playerSelection == 'paper' && computerSelection == 'scissors') {
        result = "You lose";
        lose += 1;
        win += 0;
        draw += 0;
    }
    if (playerSelection == 'paper' && computerSelection == 'rock') {
        result = "You win";
        win += 1;
        lose += 0;
        draw += 0;
    }
    if (playerSelection == 'scissors' && computerSelection == 'rock') {
        result = "you lose";
        lose += 1;
        win += 0;
        draw += 0;
        
    }
    if (playerSelection == 'scissors' && computerSelection == 'paper') {
        result = "You win";
        win += 1;
        lose += 0;
        draw += 0;
    }

    return [result, win, lose, draw];
}


function game() {
    for (let i = 0; i < 5; i++) {
        let finalResult = playRound(playerSelection, computerSelection);
        finalResult[0] += finalResult[0];
        finalResult[1] += finalResult[1];
        finalResult[2] += finalResult[2];
        finalResult[3] += finalResult[3];

        return finalResult;
    }
}
