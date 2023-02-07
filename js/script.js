function playGame(playerInput) {
    clearMessages();

    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);
    /*
    if(randomNumber == 1){
      computerMove = 'kamień';
    } else if(randomNumber == 2){
      computerMove = 'papier';
    } else if(randomNumber == 3){
      computerMove = 'nożyce';
    }
    */
    printMessage('Mój ruch to: ' + computerMove);

    /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    console.log('Gracz wpisał: ' + playerInput); */

    let playerMove = getMoveName(playerInput);
    /*
    if(playerInput == 1){
      playerMove = 'kamień';
    } else if(playerInput == 2){
      playerMove = 'papier';
    } else if(playerInput == 3){
      playerMove = 'nożyce';
    }
    */
    printMessage('Twój ruch to: ' + playerMove);
    console.log('Twójr ruch to')

    function displayResult(argComputerMove, argPlayerMove) {


        if (argComputerMove == 'kamień') {
            if (argPlayerMove == 'papier') {
                printMessage('Ty wygrywasz!');
            } else if (argPlayerMove == 'nożyce') {
                printMessage('Ty przegrywasz!');
            } else if (argPlayerMove == 'kamień') {
                printMessage('Mamy remis!');
            } else {
                printMessage('Spróbuj jeszcze raz, wybierz cyfrę od 1 do 3!');
            }
        }
        else if (argComputerMove == 'papier') {
            if (argPlayerMove == 'papier') {
                printMessage('Mamy remis!');
            } else if (argPlayerMove == 'nożyce') {
                printMessage('Ty wygrywasz!');
            } else if (argPlayerMove == 'kamień') {
                printMessage('Ty przegrywasz!');
            } else {
                printMessage('Spróbuj jeszcze raz, wybierz cyfrę od 1 do 3!');
            }
        }
        else if (argComputerMove == 'nożyce') {
            if (argPlayerMove == 'kamień') {
                printMessage('Ty wygrywasz!');
            } else if (argPlayerMove == 'papier') {
                printMessage('Ty przegrywasz!');
            } else if (argPlayerMove == 'nożyce') {
                printMessage('Mamy remis!');
            } else {
                printMessage('Spróbuj jeszcze raz, wybierz cyfrę od 1 do 3!');
            }
        }
    }
    displayResult(computerMove, playerMove);

}
    document.getElementById('play-rock').addEventListener('click', function(){
        playGame(1);
      });
    
    document.getElementById('play-paper').addEventListener('click', function(){
        playGame(2);
      });

    document.getElementById('play-scissors').addEventListener('click', function(){
        playGame(3);
      });  
    