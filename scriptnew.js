
function endGame() {
    guessField.value = ''; // Clear input field
    guessField.setAttribute('disabled', 'disabled'); // Disable input field
    p.classList.add('button');
    p.innerHTML = `<h2 class='newGame'>Start New Game</h2>`;
    StartOver.appendChild(p); // Display 'Start New Game' button
    PlayGame = false;
    newGame();
}

function newGame() {
    const newgamebutton = document.querySelector('.newGame');
    newgamebutton.addEventListener('click', function (e) {
        randomNumber = parseInt((Math.random() * 100) + 1); // Generate new random number
        prevGuess = []; // Reset previous guesses
        NumGuess = 1; // Reset number of guesses
        guessField.removeAttribute('disabled'); // Enable input field
        preguess.innerHTML = 'Previous guesses: '; // Clear previous guesses display
        guessremain.innerHTML = `Guesses remaining: ${10 - NumGuess}`; // Reset remaining guesses
        StartOver.removeChild(p); 
        PlayGame = true;
    });
}
