class View {
    displayRules() {
        document.getElementById("rules").style.display = "block";
    }

    closeRulesPopUp() {
        document.getElementById("rules").style.display = "none";
    }

    showCurrentPlayer(playerName) {
        if(playerName === "player1") {
            document.getElementById(playerName).className = "highlight-player";
            document.getElementById("player2").className = "player";
        }
        else {
            document.getElementById(playerName).className = "highlight-player";
            document.getElementById("player1").className = "player";
        }
    }

    displayMessage(messageContent) {
        document.getElementById("message_content").
            innerHTML = messageContent;
        document.getElementById("display_messages").style.display = "block";
    }

    closeMessagePopUp() {
        document.getElementById("display_messages").style.display = "none";
    }

    highlightCells(winMoves) {
        winMoves.forEach((cellNumber) =>{
            document.getElementById("cell"+cellNumber).className = "highlight-cell"});
    }

    displayWinner(positions) {
        this.highlightCells(positions);
        //setTimeout(displayMessage, 1000, winner_message);
    }

    displaySymbol(position, playerSymbol) {
        document.getElementById("cell"+(position)).innerHTML = playerSymbol;
    }

    resetBoardView() {
        for(let cellNumber=0; cellNumber<=8; cellNumber++) {
            document.getElementById("cell"+cellNumber).innerHTML = "";
            document.getElementById("cell"+cellNumber).className = "cell";
        }
    }

    addRowToScoreBoard(roundNumber, player1Status, player2Status) {
        let table = document.getElementById("scoreTable");
        let table_length = table.rows.length;
        table.insertRow(table_length).outerHTML = "<tr id='row"+table_length+"'><td id='round"+
            table_length +"'>"+roundNumber+
            "</td><td id='player1Row"+table_length +"'>"+player1Status+"</td>"+
            "<td id='player2Row"+table_length+"'>"+player2Status+"</td></tr>";
    }

    editScoreBoardRow(rowNo, player1Status, player2Status) {
        document.getElementById("player1Row"+rowNo).innerHTML = player1Status;
        document.getElementById("player2Row"+rowNo).innerHTML = player2Status;
    }

}
