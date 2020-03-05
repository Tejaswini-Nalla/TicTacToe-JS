let board = require('./GameBoard');
let player = require('./Player');
class Game {
    gameBoard = new board.GameBoard(['','','','','','','','','']);
    players = [new player.Player("A","X",[]),
                new player.Player("B","O",[])];

}

module.exports = {
    Game
}

