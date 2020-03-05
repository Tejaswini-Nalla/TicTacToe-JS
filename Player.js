class Player {
    constructor(name, symbol, playerMoves) {
        this.playerName = name;
        this.playerSymbol = symbol;
        this.playerMoves = playerMoves;
    }
    get name() {
        return this.playerName;
    }
}

module.exports = {
    Player
}
