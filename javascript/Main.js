function startGame() {
    let gameBoard = new GameBoard(['', '', '', '', '', '', '', '', '']);
    let players = [new Player("player1", "X", []),
        new Player("player2", "O", [])];
    let view = new View();
    let game = new Game(gameBoard, players, view);
    createEventHandlers(game, view);
    view.showCurrentPlayer("player1");
    view.addRowToScoreBoard("1","-","-");
}

function createEventHandlers(game, view){
    for(let cellNumber=0; cellNumber<=8; cellNumber++) {
        document.getElementById("cell"+cellNumber).addEventListener("click",
            function(){game.handleEvent(cellNumber)});
    }

    document.getElementById("reset_button").addEventListener("click",
            function(){game.resetGame()});

    document.getElementById("end_button").addEventListener("click",
        function(){game.endGame()});

    document.getElementById("help_button").addEventListener("click",
        function(){view.displayRules()});

    document.getElementById("close_rules").addEventListener("click",
        function(){view.closeRulesPopUp()});

    document.getElementById("close_message").addEventListener("click",
        function(){view.closeMessagePopUp()});
}


