const animals = document.querySelectorAll('.animal');
// console.log(animals);
for (let x = 0; x < animals.length; x++) {
  animals[x].addEventListener('click', function() {
    let animal = this.innerHTML;
    let lowerAnimal = animal.toLowerCase();
    makeSound(lowerAnimal);
    addStyle(lowerAnimal);
  });
}

function addStyle(name) {
  let activeEle = document.querySelector('.' + name);
  activeEle.classList.add('active');
  setTimeout(() => {
    activeEle.classList.remove('active');
  }, 2000);
}

function makeSound(name) {
  console.log(name);
  switch (name) {
    case 'bark':
      let sound1 = new Audio('../html/sound/bark.mp3');
      sound1.play();
      break;
    case 'cougar':
      let sound2 = new Audio('sound/cougar.mp3');
      sound2.play();
      break;
    case 'lion':
      let sound3 = new Audio('sound/lion.mp3');
      sound3.play();
  }
}
