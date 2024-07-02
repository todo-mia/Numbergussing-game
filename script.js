let randomNumber = parseInt((Math.random() * 100) + 1);

const submit = document.querySelector('#subt');
const guessField = document.querySelector('#guessField');
const preguess = document.querySelector('.preguess');
const guessremain = document.querySelector('.guessremain');
const lowOrHigh = document.querySelector('.lowOrHigh');
const StartOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let NumGuess = 0;
let PlayGame = true;

if (PlayGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(guessField.value);
        validateGuess(guess); 
    });
}


function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('you Guessed it right.');
        endGame();
    } else if (guess < randomNumber) {
        displayMessage('Number is too low.');
    } else {
        displayMessage('Number is too high.')
    }
}


function displayGuess(guess) {
    guessField.value = '';
    preguess.innerHTML += `${guess} `;
    NumGuess++;
    guessremain.innerHTML =`Guesses remaining: ${10 - NumGuess}`;
    console.log(NumGuess);
}


function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
    lowOrHigh.classList.add("finalno")
}

function validateGuess(guess) {
    if ((isNaN(guess) || guess < 1) || guess > 100) {
        alert('Please enter a valid number between 1 and 100.');
    } else {
        prevGuess.push(guess);
        if (NumGuess === 9) {
            displayGuess(guess);
            displayMessage(`Game Over | Random Number Was ${randomNumber}.`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}


function endGame() {
    guessField.value = '';
    guessField.setAttribute('disabled', 'disabled');
    p.classList.add('button');
    p.innerHTML = `<h2 class='newGame'>New Game</h2>`;
    p.classList.add("btn")
    StartOver.appendChild(p);
    PlayGame = false;
    newGame();
}

function newGame() {
    const newgamebutton = document.querySelector('.newGame');
    newgamebutton.addEventListener('click', function (e) {
        randomNumber = parseInt((Math.random() * 100) + 1);
        prevGuess = [];
        NumGuess = 0;
        guessField.removeAttribute('disabled');
        preguess.innerHTML = 'Previous guesses: ';
        guessremain.innerHTML = `${10 - NumGuess}`;
        StartOver.removeChild(p);
        lowOrHigh.innerHTML = '';
        PlayGame = true;
    })
}
