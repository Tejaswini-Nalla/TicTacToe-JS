let GameBoard = require('./GameBoard');
let Player = require('./Player');
class Game {
    gameBoard = new GameBoard.GameBoard(['','','','','','','','','']);
    players = [new Player.Player("A","X",[]),
        new Player.Player("B","O",[])];

}

module.exports = {
    Game
}

