const button = document.querySelector('button');
const output = document.querySelector('.output');
const myName = document.querySelector('input');
button.addEventListener('click', showMessage);

function showMessage() {
  output.innerHTML = `<h1>Hello ${myName.value}</h1>`;
}
