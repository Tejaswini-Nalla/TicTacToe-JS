let board = require('./GameBoard');
let player = require('./Player');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class Game {
    gameBoard = new board.GameBoard(['','','','','','','','','']);
    players = [new player.Player("A","X",[]),
                new player.Player("B","O",[])];

    start() {
        let input = rl.prompt();
        console.log("input");
    }

}

module.exports = {
    Game
}

