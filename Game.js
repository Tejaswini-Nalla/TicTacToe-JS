//const prompt = require('prompt-sync')();
class Game {
    constructor(gameBoard, players) {
        this.currentPlayerIndex = 0;
        this.gameBoard = gameBoard;
        this.players = players;
        this.winPositions = [[0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

    }

    changeCurrentPlayerIndex(playerIndex) {
        this.currentPlayerIndex = 1 - playerIndex;
    }

    handleEvent(cell){
        if(this.checkIsEmpty(cell)) {
            this.players[this.currentPlayerIndex].placeSymbol(cell - 1, this.gameBoard);
            this.gameBoard.checkIsWinner(this.players[this.currentPlayerIndex], this.winPositions);
            this.gameBoard.checkBoardFilled();
            this.changeCurrentPlayerIndex(this.currentPlayerIndex);
            this.displayPlayerName();
        }
        /*else
        {
            document.getElementById("message_content").
                innerHTML = `Already filled,Please choose another cell`;
            document.getElementById("display_messages").style.display = "block";
        }*/
    }

    checkIsEmpty(cell) {
        let cellContent = document.getElementById("cell"+cell).innerHTML;
        return cellContent === "";
    }

    displayPlayerName() {
        document.getElementById("player").innerHTML = this.players[this.currentPlayerIndex].playerName;
    }

    start(){
        this.displayPlayerName();
    }


}





