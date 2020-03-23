class GameBoard {
    constructor(gameBoard) {
        this.gameBoard = gameBoard;
    }

    resetGameBoard() {
        this.gameBoard = ['', '', '', '', '', '', '', '', ''];
    }

    isBoardFilled(){
        return this.gameBoard.every(cell => cell !== '');
    }

    checkIsWinner(player, winPositions) {
        return winPositions.some((positions) => {
            let winCondition = positions.every((position) =>
                                                player.playerMoves.includes(position));
            if(winCondition) {
                player.winCount++;
                //displayWinner(positions);
            }
            return winCondition;
        });
    }

}

