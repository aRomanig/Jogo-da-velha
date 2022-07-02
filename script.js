let contador = 0
let gameRunning = true
const cell1 = document.getElementById('1')
const cell2 = document.getElementById('2')
const cell3 = document.getElementById('3')
const cell4 = document.getElementById('4')
const cell5 = document.getElementById('5')
const cell6 = document.getElementById('6')
const cell7 = document.getElementById('7')
const cell8 = document.getElementById('8')
const cell9 = document.getElementById('9')
const win = document.getElementById('gameOver')
let openCells = ['1', '2', '3', '4', '5', '6', '7', '8', '9']


function clicar(divId) {
    let div = document.getElementById(divId)

    //print x or o to the cell
    if (div.classList.contains('X') || div.classList.contains('O')) {

    } else {
        if (contador === 0) {
            div.innerHTML = '<h1>X</h1'
            contador = 1
            div.classList.add('X')
            checkFinished()
            let removeFromArray = openCells.indexOf(divId)
            openCells.splice(removeFromArray, 1)
            CPUplay()
        } else {
            div.innerHTML = '<h1>O</h1>'
            contador = 0
            div.classList.add('O')
            checkFinished()
            let removeFromArray = openCells.indexOf(divId)
            openCells.splice(removeFromArray, 1)
            CPUplay()
        }
    }
}

function checkFinished() {
    if (cell1.classList.contains('X') && cell2.classList.contains('X') && cell3.classList.contains('X')) {
        playerWon('X')
    } else if (cell1.classList.contains('O') && cell2.classList.contains('O') && cell3.classList.contains('O')) {
        playerWon('O')
    } else if (cell1.classList.contains('X') && cell4.classList.contains('X') && cell7.classList.contains('X')) {
        playerWon('X')
    } else if (cell1.classList.contains('O') && cell4.classList.contains('O') && cell7.classList.contains('O')) {
        playerWon('O')
    } else if (cell1.classList.contains('X') && cell5.classList.contains('X') && cell9.classList.contains('X')) {
        playerWon('X')
    } else if (cell1.classList.contains('O') && cell5.classList.contains('O') && cell9.classList.contains('O')) {
        playerWon('O')
    } else if (cell2.classList.contains('X') && cell5.classList.contains('X') && cell8.classList.contains('X')) {
        playerWon('X')
    } else if (cell2.classList.contains('O') && cell5.classList.contains('O') && cell8.classList.contains('O')) {
        playerWon('O')
    } else if (cell3.classList.contains('X') && cell6.classList.contains('X') && cell9.classList.contains('X')) {
        playerWon('X')
    } else if (cell3.classList.contains('O') && cell6.classList.contains('O') && cell9.classList.contains('O')) {
        playerWon('O')
    } else if (cell3.classList.contains('X') && cell5.classList.contains('X') && cell7.classList.contains('X')) {
        playerWon('X')
    } else if (cell3.classList.contains('O') && cell5.classList.contains('O') && cell7.classList.contains('O')) {
        playerWon('O')
    } else if (cell4.classList.contains('X') && cell5.classList.contains('X') && cell6.classList.contains('X')) {
        playerWon('X')
    } else if (cell4.classList.contains('O') && cell5.classList.contains('O') && cell6.classList.contains('O')) {
        playerWon('O')
    } else if (cell7.classList.contains('X') && cell8.classList.contains('X') && cell9.classList.contains('X')) {
        playerWon('X')
    } else if (cell7.classList.contains('O') && cell8.classList.contains('O') && cell9.classList.contains('O')) {
        playerWon('O')
    }
}

function playerWon(winner) {
    if (gameRunning) {
        win.innerHTML = `O jogador ${winner} venceu!`
        gameRunning = false
    }  
}

function reiniciar() {
    document.location.reload()
}

function CPUplay() {
    let cpuPlay = Math.floor(Math.random()*openCells.length)
    div = document.getElementById(openCells[cpuPlay])
    if (div != 'null') {
        div.innerHTML = '<h1>O</h1>'
        openCells.splice(cpuPlay, 1)
        div.classList.add('O')
    }
    if (contador === 1) {
        contador = 0
    } else {
        contador = 1 
    }
    checkFinished()
}