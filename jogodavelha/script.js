let contador = 0
const cell1 = document.getElementById('tl')
const cell2 = document.getElementById('tc')
const cell3 = document.getElementById('tr')
const cell4 = document.getElementById('ml')
const cell5 = document.getElementById('mc')
const cell6 = document.getElementById('mr')
const cell7 = document.getElementById('bl')
const cell8 = document.getElementById('bc')
const cell9 = document.getElementById('br')
const win = document.getElementById('gameOver')

function clicar(divId) {
    let div = document.getElementById(divId)

    //print x or o to the cell
    if (div.classList.contains('X') || div.classList.contains('O')) {

    } else {
        if (contador === 0) {
            div.innerHTML = '<h1>X</h1'
            contador = 1
            div.classList.add('X')
        } else {
            div.innerHTML = '<h1>O</h1>'
            contador = 0
            div.classList.add('O')
        }
    }

    //check if game is finished
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
    win.innerHTML = `O jogador ${winner} venceu!`    
}

function reiniciar() {
    document.location.reload()
}