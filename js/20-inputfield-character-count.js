console.log('Bozo');

const output = document.querySelector('.output');
const txt = document.querySelector('textarea');

const maxLength = 20;
const warnLength = 7;

const textCounter = e => {
  let count = txt.value.length;
  if (count > maxLength) {
    txt.value = txt.value.substring(0, maxLength);
  }
  if (count > warnLength) {
    output.classList.add('red');
  } else {
    output.classList.remove('red');
  }
  output.innerHTML = `${maxLength - count} characters left`;
};

['change', 'keyup', 'keydown'].forEach(e => {
  txt.addEventListener(e, textCounter);
});
