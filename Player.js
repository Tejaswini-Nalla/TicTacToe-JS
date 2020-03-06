class Player {
    constructor(name, symbol, playerMoves) {
        this.playerName = name;
        this.playerSymbol = symbol;
        this.playerMoves = playerMoves;
    }

    placeOnBoard(position, board) {
        board.gameBoard.splice(position,1,this.playerSymbol);
        this.playerMoves.push(position);
    }
}

module.exports = {
    Player
}
