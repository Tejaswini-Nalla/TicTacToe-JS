class GameBoard {
    constructor(gameBoard) {
        this.gameBoard = gameBoard;
    }

    isBoardFilled(){
        return this.gameBoard.every(cell => cell !== '');
    }

    checkBoardFilled(){
        if(this.isBoardFilled()) {
           this.displayMessage("Draw");
        }
    }

    displayMessage(messageContent) {
        document.getElementById("message_content").
            innerHTML = messageContent;
        document.getElementById("player").style.display = "none";
        document.getElementById("display_messages").style.display = "block";
    }

    checkIsWinner(player, winPositions) {
        winPositions.some((positions) => {
            let winCondition = positions.every((position) =>
                                                player.playerMoves.includes(position));
            if(winCondition) {
                let winner_message = `Player ${player.playerName} Won`
                this.displayMessage(winner_message);
            }
        });
    }

    resetBoard() {
        location.reload();
    }
}

