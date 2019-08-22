// const newHeading = document.createElement('h2');
// newHeading.id = 'task-title';
// newHeading.appendChild(document.createTextNode('Task List'));

// const oldHeading = document.getElementById('task-title');
// const cardAction = document.querySelector('.card-action');

// cardAction.replaceChild(newHeading, oldHeading);

// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// lis[0].remove();
// list.removeChild(lis[3]);

// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];

// let val;
// val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');
// val = link;

// val = link.getAttribute('href');
// val = link.setAttribute('href', 'http://www.ign.com');
// val = link.hasAttribute('title');

// console.log(val);
// // const li = document.createElement('li');
// // li.classList.add('bozo');
// // li.className = 'collection-item';
// // li.id = 'new-item';
// // li.setAttribute('title', 'New Item');
// // li.appendChild(document.createTextNode('Hello World Bozo'));
// // const link = document.createElement('a');
// // link.className = 'delete-item secondary-content';
// // link.innerHTML = '<i class="fa fa-remove"></i>';
// // li.appendChild(link);
// // document.querySelector('ul.collection').appendChild(li);
// // console.log(li);
// // console.log(link);

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
  // console.log('Clicked');
  let val;
  val = e.target;
  console.log(val);
}
