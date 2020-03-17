const prompt = require('prompt-sync')();
class Game {
    constructor(gameBoard, players){
        this.currentPlayerIndex = 0;
        this.gameBoard = gameBoard;
        this.players = players;
    }

    changeCurrentPlayerIndex = (playerIndex) => 1 - playerIndex;

    isPositionEmpty = (position) => this.gameBoard.gameBoard[position] === "";

    playerTurn(position) {
        this.players[this.currentPlayerIndex].placeOnBoard(position, this.gameBoard);
        this.gameBoard.checkIsWinner(this.players[this.currentPlayerIndex]);
    }

    playerAction(position) {
        if(this.isPositionEmpty(position)) {
            this.playerTurn(position);
        }
        else {
            console.log("Position filled, Give another position");
        }
    }

    currentPlayerTurn(currentPlayerId) {
        let playerName = this.players[currentPlayerId].playerName;
        let position = prompt(playerName +" Enter the position");
        this.playerAction(position);
    }

    start() {
        while(!this.gameBoard.isGameOver()) {
            if (!this.gameBoard.isBoardFilled()) {
                this.gameBoard.displayBoard();
                this.currentPlayerTurn(this.currentPlayerIndex);
                this.currentPlayerIndex = this.changeCurrentPlayerIndex(this.currentPlayerIndex);
            }
            else {
                console.log("Draw");
                this.gameBoard.changeGameState();
            }
        }
    }

}

module.exports = {
    Game
}

