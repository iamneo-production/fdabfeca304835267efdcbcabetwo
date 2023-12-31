// Initial game state

let cells = ['', '', '', '', '', '', '', '', ''];

let currentPlayer = 'X';

let result = document.querySelector('.result');

let btns = document.querySelectorAll('.btn');

let conditions = [

    [0, 1, 2],

    [3, 4, 5],

    [6, 7, 8],

    [0, 3, 6],

    [1, 4, 7],

    [2, 5, 8],

    [0, 4, 8],

    [2, 4, 6]

];

 

// Function to handle player moves

const ticTacToe = (element, index) => {

    // Your game logic here

       // Check if the clicked cell is already occupied or if the game is already won

    if (cells[index] !== '' || result.textContent !== '') {

        return;

    }

 

    // Update the current cell with the current player's symbol

    cells[index] = currentPlayer;

    element.textContent = currentPlayer;

 

    // Check for winning conditions

    for (const condition of conditions) {

        const [a, b, c] = condition;

        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {

            // Update the 'result' element with the winner

            result.textContent = `${currentPlayer} wins!`;

 

            // Disable all buttons after a win

            btns.forEach((btn) => btn.disabled = true);

            return;

        }

    }

        // Check for a draw (all cells filled)

    if (!cells.includes('')) {

        result.textContent = 'It\'s a draw!';

        return;

    }

    // Toggle the current player

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

 

    // Your code to display the current player's turn

    result.textContent = `Current player: ${currentPlayer}`;

};

 

    /*

    **Part 2: Reset Function (Add your code here)**

 

    1. Implement a new function that resets the game to its initial state.

    2. Ensure the 'cells', 'btns', and 'currentPlayer' variables are reset.

    3. Update the 'result' element to indicate the current player's turn.

    4. Re-enable all buttons for a new game.

    */

 

// Function to reset the game

const resetGame = () => {

    // Your code to reset the game state

    // ...

    cells = ['', '', '', '', '', '', '', '', ''];

    currentPlayer = 'X';

    result.textContent = '';

    // Your code to re-enable buttons

    btns.forEach((btn) => {

        btn.textContent = '';

        btn.disabled = false;

    });

};

 

btns.forEach((btn, i) => {

    btn.addEventListener('click', () => ticTacToe(btn, i));

});

 

document.querySelector('#reset').addEventListener('click', resetGame);