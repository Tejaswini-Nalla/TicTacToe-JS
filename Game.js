//const prompt = require('prompt-sync')();
class Game {
    constructor(gameBoard, players) {
        this.currentPlayerIndex = 0;
        this.gameBoard = gameBoard;
        this.players = players;
    }

    changeCurrentPlayerIndex(playerIndex) {
        this.currentPlayerIndex = 1 - playerIndex;
    }

    handleEvent(cell){
        this.players[this.currentPlayerIndex].placeSymbol(cell-1,this.gameBoard);
        this.gameBoard.checkIsWinner(this.players[this.currentPlayerIndex]);
        this.changeCurrentPlayerIndex(this.currentPlayerIndex);
        this.displayPlayerName();
    }

    displayPlayerName() {
        document.getElementById("player").innerHTML = this.players[this.currentPlayerIndex].playerName;
    }

}





