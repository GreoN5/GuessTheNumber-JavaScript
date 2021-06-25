'use strict';

setInitialGuessValue();
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('⛔ No number!');
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        setSecret(secretNumber);
        setBodyBackgroundColor('#7FFF00');
        setNumberWidthStyle('30rem');

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            displayScore(score);
        } else {
            displayMessage('🤦‍♀️ You lost the game!');
            displayScore(0);
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayScore(score);
    displayMessage('Start guessing...');
    setSecret('?');

    setInitialGuessValue();

    setNumberWidthStyle('15rem');
    setBodyBackgroundColor('#222');
});

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

function displayScore(score) {
    document.querySelector('.score').textContent = score;
}

function setSecret(secret) {
    document.querySelector('.number').textContent = secret;
}

function setInitialGuessValue() {
    document.querySelector('.guess').value = '';
}

function setBodyBackgroundColor(color) {
    document.querySelector('body').style.backgroundColor = color;
}

function setNumberWidthStyle(width) {
    document.querySelector('.number').style.width = width;
}