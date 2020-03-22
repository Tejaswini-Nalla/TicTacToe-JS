function eventListener() {
    let gameBoard = new GameBoard(['', '', '', '', '', '', '', '', '']);
    let players = [new Player("A", "X", []),
        new Player("B", "O", [])];
    let game = new Game(gameBoard, players);
    game.displayPlayerName();
    createEventHandlers(game, gameBoard);
}

function createEventHandlers(game, gameBoard){
    for(let cellNumber=1; cellNumber<=9; cellNumber++) {
        document.getElementById("cell"+cellNumber).addEventListener("click",
            function(){game.handleEvent(cellNumber)});
    }

    document.getElementById("reset_button").addEventListener("click",
                                function(){gameBoard.resetBoard()});

}

window.onload = eventListener;

