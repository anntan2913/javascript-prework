const playGame = function(playerInput) {    //czy dodatkowe {} o których mowa w zadaniu, jeszcze są wymagane; te obejmuja cały, czy jednak nie?
    clearMessages();

    let getMoveName = function(argMoveId) {     //uznaję ze w 1 cyklu gry, który tu mamy wartśc się zmienia: dla comp i dla player, stąd pomysł funkcji w let
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
    };

    const randomNumber = Math.floor(Math.random() * 3 + 1);     //w ciągu gry raz losowana przez comp
    console.log('Wylosowana liczba to: ' + randomNumber);

    const computerMove = getMoveName(randomNumber);     // const bo w każdej grze i dla comp i dla player Move tylko po 1 wart
    printMessage('Mój ruch to: ' + computerMove);
    
    const playerMove = getMoveName(playerInput);    
    printMessage('Twój ruch to: ' + playerMove);

    console.log('Twój ruch to')

    const displayResult = function(argComputerMove, argPlayerMove) {        //funkcja nazwana zam na anonimowa zapisana w stałej

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
    };
    displayResult(computerMove, playerMove);

};
document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function () {
    playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function () {
    playGame(3);
});
