class GameBoard {
    constructor(gameBoard, state) {
        this.gameBoard = gameBoard;
        this.isGameOver = state ;
    }
    winPositions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

    isBoardFilled(){
        return this.gameBoard.every(cell => cell !== '');
    }

    displayBoard() {
        console.log(this.gameBoard);
    }

    checkIsWinner(player) {
        this.winPositions.some((positions) => {
            let winCondition = positions.every((position) =>
                                                player.playerMoves.includes(position));
            if(winCondition) {
                console.log(player.playerName + " Won");
            }
        });
    }
}

module.exports = {
    GameBoard
}