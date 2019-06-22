const gameArea = document.querySelector('.game');
const button = document.querySelector('button');
const message = document.querySelector('.message');
let score = 0;
let gamePlay = false;

button.addEventListener('click', function() {
  if (!gamePlay) {
    gamePlay = true;
    score = 0;
    gameArea.innerHTML = '';
    maker();
    message.innerHTML = 'Guess The Combo';
    button.innerText = 'Check Combo';
  } else {
    score++;
    message.innerHTML = `Guesses ${score}`;
    const numbers = document.querySelectorAll('.number');
    let winCondition = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i].value == numbers[i].correct) {
        numbers[i].style.backgroundColor = 'green';
        numbers[i].style.color = 'white';
        console.log('Match');
        winCondition++;
      } else {
        let color = numbers[i].value < numbers[i].correct ? 'blue' : 'red';
        numbers[i].style.backgroundColor = color;
        numbers[i].style.color = '#000';
        console.log('No Match');
      }
      if (winCondition == numbers.length) {
        gameEnd();
      }
    }
  }
});

function gameEnd() {
  message.innerHTML = `You solved the combo in ${score} guesses`;
  gamePlay = false;
  button.innerHTML = 'Restart Game';
}

function maker() {
  for (let x = 0; x < 4; x++) {
    let element = document.createElement('input');
    element.setAttribute('type', 'number');
    element.max = 9;
    element.min = 0;
    element.size = 1;
    element.style.width = '50px';
    element.classList.add('number');
    element.order = x;
    element.correct = Math.floor(Math.random() * 10);
    element.value = 0;
    // console.log(element);
    gameArea.appendChild(element);
  }
}
