const button = document.querySelector('button');
const output = document.querySelector('.output');

button.addEventListener('click', showOutput);

function showOutput(params) {
  const date = new Date();
  let cur = date.getHours();
  let message;
  if (cur > 17) {
    message = 'Its Evening';
    output.style.backgroundColor = 'black';
  } else if (cur > 12) {
    message = 'Its Afternoon';
    output.style.backgroundColor = 'blue';
  } else if (cur > 0) {
    message = 'Its Morning';
    output.style.backgroundColor = 'orange';
  } else {
    message = 'Something is Wrong';
  }
  output.innerHTML = `<h1>${message}</h1>`;
}
