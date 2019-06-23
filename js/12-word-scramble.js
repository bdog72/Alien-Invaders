const message = document.querySelector('.message');
const guess = document.querySelector('input');
const button = document.querySelector('button');
let inplay = false;
let scramble = '';
let scrambled = '';
let score = 0;
const myArray = ['html', 'css', 'javascript', 'react', 'molly'];
button.addEventListener('click', function() {
  // console.log('clicked');
  if (!inplay) {
    inplay = true;
    score = 0;
    button.innerHTML = 'Guess';
    guess.classList.toggle('hidden');
    scramble = createWord();
    scrambled = randomArray(scramble.split('')).join('');
    message.innerHTML = scrambled;
  } else {
    let tempGuess = guess.value;
    score++;
    console.log(tempGuess);
    if (tempGuess === scramble) {
      console.log('Correct');
      inplay = false;
      message.innerHTML = `Correct it was -- ${scramble} -- it took <span>${score}</span> guesses`;
      button.innerHTML = 'Start';
      guess.value = '';
      guess.classList.toggle('hidden');
    } else {
      console.log('Wrong answer bozo');
    }
  }
});

function createWord() {
  let randomIndex = Math.floor(Math.random() * myArray.length);
  let tempWord = myArray[randomIndex];
  return tempWord;
}

function randomArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let temp = arr[i];
    let j = Math.floor(Math.random() * (i + 1));
    // console.log(temp);
    // console.log(i);
    // console.log(j);
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}
