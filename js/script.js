
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
} else if(randomNumber == 2){
  computerMove = 'papier';
} else if(randomNumber == 3){
  computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == 1){
  playerMove = 'kamień';
} else if(playerInput == 2){
  playerMove = 'papier';
} else if(playerInput == 3){
  playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);

if (computerMove == 'kamień') {
    if (playerMove == 'papier') {
        printMessage('Ty wygrywasz!');
    } else if (playerMove == 'nożyce') {
        printMessage('Ty przegrywasz!');
    } else if (playerMove == 'kamień') {
        printMessage('Mamy remis!');
    } else if (playerMove == 'nieznany ruch') {
        printMessage('Spróbuj jeszcze raz, wybierz cyfrę od 1 do 3!');
    }
}  
if (computerMove == 'papier') {
    if (playerMove == 'papier') {
        printMessage('Mamy remis!');
    } else if (playerMove == 'nożyce') {
        printMessage('Ty wygrywasz!');
    } else if (playerMove == 'kamień') {
        printMessage('Ty przegrywasz!');
    } else if (playerMove == 'nieznany ruch') {
        printMessage('Spróbuj jeszcze raz, wybierz cyfrę od 1 do 3!');
    }
}
if (computerMove == 'nożyce') {
    if (playerMove == 'kamień') {
        printMessage('Ty wygrywasz!');
    } else if (playerMove == 'papier') {
        printMessage('Ty przegrywasz!');
    } else if (playerMove == 'nożyce') {
        printMessage('Mamy remis!');
    } else if (playerMove == 'nieznany ruch') {
        printMessage('Spróbuj jeszcze raz, wybierz cyfrę od 1 do 3!');
    }
}