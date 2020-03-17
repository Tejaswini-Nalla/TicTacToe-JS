class GameBoard {
    constructor(gameBoard, gameActive) {
        this.gameBoard = gameBoard;
        this.gameActive = gameActive ;
    }
    winPositions = [['0','1','2'],['3','4','5'],['6','7','8'],
                    ['0','3','6'],['1','4','7'],['2','5','8'],['0','4','8'],['2','4','6']];

    changeGameState() {
        this.gameActive = !this.gameActive;
    }

    isGameOver() {
        return this.gameActive;
    }

    isBoardFilled(){
        return this.gameBoard.every(cell => cell !== '');
    }

    displayBoard() {
        console.log(this.gameBoard.slice(0,3));
        console.log(this.gameBoard.slice(3,6));
        console.log(this.gameBoard.slice(6));
    }

    checkIsWinner(player) {
        this.winPositions.some((positions) => {
            let winCondition = positions.every((position) =>
                                                player.playerMoves.includes(position));
            if(winCondition) {
                console.log(player.playerName + " Won");
                this.gameState = true;
            }
        });
    }
}

module.exports = {
    GameBoard
}