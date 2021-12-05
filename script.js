'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// console.log(secretNumber);

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
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too High!' : '📈 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
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
