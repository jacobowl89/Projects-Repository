let playerScore = 0
let computerScore = 0
let moves = 0

const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")

const four = document.querySelector("#four")
const five = document.querySelector("#five")
const six = document.querySelector("#six")

const seven = document.querySelector("#seven")
const eight = document.querySelector("#eight")
const nine = document.querySelector("#nine")

const playerInfo = document.querySelector(".playerInfo")
const scoreInfo = document.querySelector(".scoreInfo")



function randomPlayer() {
    const players = ["X","O"];
      
    let player = players[Math.floor(Math.random()*players.length)];

    return player
}

function updateInfo(player) {
    const playerInfo = document.querySelector(".playerInfo")
    playerInfo.textContent = `Player: ${player}`

    const scoreInfo = document.querySelector(".scoreInfo")
    scoreInfo.textContent = `Player X: ${playerScore} | Player O: ${computerScore}` 
}

function checkGame(player){
    
    if (one.textContent == player && two.textContent == player && three.textContent == player){
        console.log(`${player} Won!`)
        endRound(player)
    }
    else if (four.textContent == player && five.textContent == player && six.textContent == player){
        console.log(`${player} Won!`)
        endRound(player)
    }
    else if (seven.textContent == player && eight.textContent == player && nine.textContent == player){
        console.log(`${player} Won!`)
        endRound(player)
    }

    else if (one.textContent == player && four.textContent == player && seven.textContent == player){
        console.log(`${player} Won!`)
        endRound(player)
    }
    else if (two.textContent == player && five.textContent == player && eight.textContent == player){
        console.log(`${player} Won!`)
        endRound(player)
    }
    else if (three.textContent == player && six.textContent == player && nine.textContent == player){
        console.log(`${player} Won!`)
        endRound(player)
    }

    else if (one.textContent == player && five.textContent == player && nine.textContent == player){
        console.log(`${player} Won!`)
        endRound(player)
    }
    else if (three.textContent == player && five.textContent == player && seven.textContent == player){
        console.log(`${player} Won!`);
        endRound(player)
    }
    else if (moves == 9){
        endRound("Draw")

    }
    }

function announceWinner(player){
    scoreInfo.textContent = `Player ${player} won the game!`
}

function resetScore(){
    playerScore = 0
    computerScore = 0
}

function clearBoard(){
    one.textContent = "";
    two.textContent = "";
    three.textContent = "";

    four.textContent = "";
    five.textContent = "";
    six.textContent = "";

    seven.textContent = "";
    eight.textContent = "";
    nine.textContent = "";
}

function endRound(player){
    if (player == "X"){
        playerScore += 1
    }
    else if (player == "O") {
        computerScore += 1
    }
    clearBoard()

    moves = 0
}

function changePlayer(player){
    if (player == "X") {
        player = "O"
    }
    else 
        {player = "X"}
    return player
}

function game(){
    let player = randomPlayer()
    updateInfo(player)
    const fields = document.querySelectorAll(".field")

fields.forEach(field => 
    {field.addEventListener("dblclick",() => {
        if (field.textContent == "" && computerScore < 5 && playerScore < 5) {
        field.textContent = player

        moves += 1

        checkGame(player)

        if (player == "X") {
            player = "O"
        }
        else 
            {player = "X"}
        
        updateInfo(player)

        if (playerScore == 5){
            clearBoard()
            
            announceWinner("X")
    
        }
        else if (computerScore == 5){
            announceWinner("O")
        }}
        
})})
}

const btnReset = document.querySelector("#reset")

btnReset.addEventListener("click", () => {
    resetScore()
    clearBoard()
    updateInfo("?")
})

game()

