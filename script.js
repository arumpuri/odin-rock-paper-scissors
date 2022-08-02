let computerChoice;


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
