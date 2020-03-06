class Player {
    constructor(name, symbol, playerMoves) {
        this.playerName = name;
        this.playerSymbol = symbol;
        this.playerMoves = playerMoves;
    }

    placeOnBoard(position, board) {
        board.splice(position,1,this.playerSymbol);
    }
}

module.exports = {
    Player
}
