// Gameboard Object
const GameBoard = (function () {
    const cells = [];
    const board = document.getElementById('board');
    let gameActive = true;
    let currentPlayer = 'X';

    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div'); // Create a new cell in each iteration
        cell.classList.add('cell');
        cell.addEventListener('click', () => handleCellClick(i));
        cell.classList.add(
            'w-96',
            'h-96',
            'text-3xl',
            'flex',
            'items-center',
            'justify-center',
            'border-1',
            'border-gray-800',
            'cursor-pointer'
        )
        board.appendChild(cell);
        cells.push(cell);
    }

    const handleCellClick = (index) => {
        if (!gameActive || cells[index].textContent !== '') {
            return;
        }

        cells[index].textContent = currentPlayer;
        if (checkWinner()) {
            alert(`Player ${currentPlayer} wins!`);
            gameActive = false;
        } else if (isBoardFull()) {
            alert("It's a draw!");
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }

    // Check for a winner
    const checkWinner = () => {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        return winningCombinations.some(combination => {
            const [a, b, c] = combination;
            return cells[a].textContent !== '' &&
                cells[a].textContent === cells[b].textContent &&
                cells[b].textContent === cells[c].textContent;
        });
    }

    // Check if the board is full (draw)
    const isBoardFull = () => {
        return cells.every(cell => cell.textContent !== '');
    }

})();

// Call the GameBoard function
GameBoard;
