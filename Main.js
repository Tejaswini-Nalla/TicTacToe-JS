let main = require('./Game');
let board = require('./GameBoard');
let player = require('./Player');

let gameBoard = new board.GameBoard(['','','','','','','','',''], false);
let players = [new player.Player("A","X",[]),
                new player.Player("B","O",[])];
let game = new main.Game(gameBoard,players);

game.start();

