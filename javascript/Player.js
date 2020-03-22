class Player {
    constructor(name, symbol, playerMoves) {
        this.playerName = name;
        this.playerSymbol = symbol;
        this.playerMoves = playerMoves;
    }

    placeSymbol(position, board) {
        board.gameBoard.splice(position,1,this.playerSymbol);
        this.playerMoves.push(position);
        console.log(this.playerName+this.playerMoves);
        document.getElementById("cell"+(position+1)).innerHTML = this.playerSymbol;
    }
}

