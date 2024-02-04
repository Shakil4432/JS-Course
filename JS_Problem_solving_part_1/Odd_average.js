let count = 0;
let sum = 0;
function oddAverage(numbers) {
  for (const number of numbers) {
    if (number % 2 !== 0) {
      count++;
      sum = sum + number;
    }
  }

  const average = sum / count;
  return average;
}

const numbers = [42, 13, 58, 65, 81, 96, 7, 5];
const average = oddAverage(numbers);
console.log(average);
