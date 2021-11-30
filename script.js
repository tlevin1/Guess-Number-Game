'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

// state variable
let score = 20;

document.querySelector('.number').textContent = secretNumber;

// Game Logic
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // falsy value 0
  if (!guess) {
    document.querySelector('.message').textContent = 'No number entered!';
  } else if (guess == secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
  } else if (guess > secretNumber) {
    if (score == 0) {
      document.querySelector('.message').textContent = 'Game Over';
      // reset game
      score = 20;
    } else {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else if (guess < secretNumber) {
    if (score == 0) {
      document.querySelector('.message').textContent = 'Game Over';
      // reset game
      score = 20;
    } else {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});
