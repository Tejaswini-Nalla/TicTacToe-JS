function eventListener() {
    let gameBoard = new GameBoard(['', '', '', '', '', '', '', '', ''], false);
    let players = [new Player("A", "X", []),
        new Player("B", "O", [])];
    let game = new Game(gameBoard, players);
    game.displayPlayerName();
    createEventHandlers(game);
}
function createEventHandlers(game){
    for(let cellNumber=1; cellNumber<=9; cellNumber++) {
        document.getElementById("cell"+cellNumber).addEventListener("click",
                                function(){game.handleEvent(cellNumber)},{once:true});
    }
}
window.onload = eventListener;

