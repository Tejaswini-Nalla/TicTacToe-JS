let board = require('./GameBoard');
let player = require('./Player');
const prompt = require('prompt-sync')();
class Game {
    gameBoard = new board.GameBoard(['','','','','','','','',''], false);
    players = [new player.Player("A","X",[]),
                new player.Player("B","O",[])];
    currentPlayerIndex = 0;

    changeCurrentPlayerIndex = () => this.currentPlayerIndex - 1;
    isPositionEmpty = (position) => this.gameBoard.gameBoard[position] === "";

    playerAction(position) {
        if(this.isPositionEmpty(position)) {
            this.players[this.currentPlayerIndex].placeOnBoard()
        }
    }

    start() {
        while(!this.gameBoard.isGameOver) {
            if (!this.gameBoard.isBoardFilled()) {
                let position = prompt("Enter the position");
                playerAction(position);

            }
        }
    }

}

module.exports = {
    Game
}

