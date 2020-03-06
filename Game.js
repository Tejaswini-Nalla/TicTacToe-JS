let board = require('./GameBoard');
let player = require('./Player');
const prompt = require('prompt-sync')();
class Game {
    gameBoard = new board.GameBoard(['','','','','','','','',''], false);
    players = [new player.Player("A","X",[]),
                new player.Player("B","O",[])];
    currentPlayerIndex = 0;

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

    start() {
        while(!this.gameBoard.isGameOver) {
            if (!this.gameBoard.isBoardFilled()) {
                this.gameBoard.displayBoard();
                let playerName = this.players[this.currentPlayerIndex].playerName;
                let position = prompt(playerName +" Enter the position");
                this.playerAction(position);
                this.currentPlayerIndex = this.changeCurrentPlayerIndex(this.currentPlayerIndex);
            }
            else {
                console.log("Draw");
                this.gameBoard.changeGameState(this.gameBoard.isGameOver);
            }
        }
    }

}

module.exports = {
    Game
}

