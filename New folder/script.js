let currentPlayer = 'X';
let player1Name = 'Player 1';
let player2Name = 'Player 2';
let player1Score = 0;
let player2Score = 0;
let moves = 0;

const cells = document.querySelectorAll('.cell');
const player1ScoreDisplay = document.getElementById('player1-score');
const player2ScoreDisplay = document.getElementById('player2-score');
const player1Input = document.getElementById('player1');
const player2Input = document.getElementById('player2');

function makeMove(row, col) {
    if (!cells[row * 3 + col].textContent) {
        cells[row * 3 + col].textContent = currentPlayer;
        moves++;
        if (checkWin()) {
            currentPlayer === 'X' ? player1Score++ : player2Score++;
            updateScore();
            resetBoard();
        } else if (moves === 9) {
            // If all cells are filled and no one wins, it's a draw
            resetBoard();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            return true;
        }
    }

    return false;
}

function updateScore() {
    player1ScoreDisplay.textContent = `${player1Name}: ${player1Score}`;
    player2ScoreDisplay.textContent = `${player2Name}: ${player2Score}`;
}

function resetBoard() {
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
    moves = 0;
}

function newGame() {
    player1Name = player1Input.value || 'Player 1';
    player2Name = player2Input.value || 'Player 2';
    player1Score = 0;
    player2Score = 0;
    updateScore();
    resetBoard();
}

updateScore();
