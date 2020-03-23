//const prompt = require('prompt-sync')();
class Game {
    constructor(gameBoard, players, view) {
        this.currentPlayerIndex = 0;
        this.view = view;
        this.gameBoard = gameBoard;
        this.players = players;
        this.winPositions = [[0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        this.gameRoundNumber = 1;
    }

    resetGame() {
        this.gameBoard.resetGameBoard();
        this.players.forEach((player) => player.resetPlayerMoves());
        this.view.resetBoardView();
        this.currentPlayerIndex = 0;
        this.view.showCurrentPlayer(this.players[this.currentPlayerIndex].playerName);
    }

    changeCurrentPlayerIndex(playerIndex) {
        this.currentPlayerIndex = 1 - playerIndex;
    }

    checkIsEmpty(cell) {
        let cellContent = document.getElementById("cell"+cell).innerHTML;
        return cellContent === "";
    }

    moveToNextRound() {
        this.gameRoundNumber++;
        this.view.addRowToScoreBoard(this.gameRoundNumber,"-","-");
        this.resetGame();
    }

    checkIsDraw(){
        if(this.gameBoard.isBoardFilled()) {
            this.view.displayMessage("Draw");
            this.view.editScoreBoardRow(this.gameRoundNumber, "Draw", "Draw");
            this.moveToNextRound();
        }
    }

    checkWinner(player, winMoves, currentPlayer) {
        if(this.gameBoard.checkIsWinner(player, winMoves)){
            if(currentPlayer === 0) {
                this.view.displayMessage(`Round ${this.gameRoundNumber} Winner is Player1`);
                this.view.editScoreBoardRow(this.gameRoundNumber, "Won", "Lost");
            }
            else {
                this.view.displayMessage(`Round ${this.gameRoundNumber} Winner is Player2`);
                this.view.editScoreBoardRow(this.gameRoundNumber, "Lost", "Won");
            }
            this.moveToNextRound();
        }
    }

    handleEvent(cell){
        if(this.checkIsEmpty(cell)) {
            this.players[this.currentPlayerIndex].placeSymbol(cell , this.gameBoard);
            this.view.displaySymbol(cell,this.players[this.currentPlayerIndex].playerSymbol);
            let currentPlayer = this.currentPlayerIndex;
            this.changeCurrentPlayerIndex(this.currentPlayerIndex);
            this.checkWinner(this.players[currentPlayer], this.winPositions, currentPlayer);
            this.checkIsDraw();
            this.view.showCurrentPlayer(this.players[this.currentPlayerIndex].playerName);
        }
    }

    endGame() {
            location.replace('file:///Users/ntejaswini/Desktop/Assignments/TicTacToe-JS/html/Index.html');
    }

}





