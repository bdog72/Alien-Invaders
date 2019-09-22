const myNumbers = [1, 5, 7];
let mySquareNumbers = [];

console.log(mySquareNumbers);

for (let x = 0; x < myNumbers.length; x++) {
  mySquareNumbers.push(myNumbers[x] * myNumbers[x]);
}

console.log(myNumbers);
console.log(mySquareNumbers);
