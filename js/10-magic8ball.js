const answerArray = [
  'It will work',
  'No way Jose',
  'Good grief Bozo',
  'Highely likely',
  'Highely Unlikely'
];

const message = document.querySelector('.message');
const question = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', function() {
  console.log(question.value);
  let res = Math.floor(Math.random() * answerArray.length);
  console.log(answerArray[res]);
  message.innerText = `${question.value} -- ${answerArray[res]}`;
  question.value = '';
});
