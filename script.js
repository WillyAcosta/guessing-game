'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';

    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    //Displays secret number instead of questionmark
    document.querySelector('.number').textContent = secretNumber;

    //When guess is greater than secret number
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;

      //When player looses to high number guess
    } else {
      document.querySelector('.message').textContent = '💣 You Lost the Game!';
      document.querySelector('.score').textContent = 0;
    }

    //When guess is lower than secret number
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;

      //When player looses to small number guess
    } else {
      document.querySelector('.message').textContent = '💣 You Lost the Game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  //For score reset
  score = 20;
  //Resets random number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //Resets score counter
  document.querySelector('.score').textContent = score;
  //Changes color back to grey
  document.querySelector('body').style.backgroundColor = '#222';
  //Changes number box width back to 15rem
  document.querySelector('.number').style.width = '15rem';
  //Resets "Start guessing..." message
  document.querySelector('.message').textContent = 'Start guessing...';
  //Resests guess input back to 'empty'
  document.querySelector('.guess').value = 'NULL';
  //Reset to Questionmark
  document.querySelector('.number').textContent = '?';
});
