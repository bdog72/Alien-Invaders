// console.log('bozo beaker');
// console.log(this === window);

// const myArray = [1, 2, 3, 4, 5];

// const result = myArray.forEach(item => {
//   console.log(item);
// });

// const cities = ['b', 'a', 'e', 'd', 'c'];

// const newCities = cities.map(city => {
//   return city.toUpperCase();
// });
// console.log(cities);
// console.log(newCities);

// const result1 = cities.sort();
// console.log(result1);

function factorialize(num) {
  var result = 1;
  for (var i = 1; i <= num; i++) {
    result = result * i;
    // result *= i;
    console.log(i);
  }
  return result;
  // return num
}

factorialize(5);

console.log('bozo');
