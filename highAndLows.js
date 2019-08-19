function highAndLow(numbers) {
  let numbersArr = numbers.split(/ /);
  let max = numbersArr[0];
  let min = numbersArr[0];

  numbersArr.forEach(e => {
    if (Number.parseInt(e) < Number.parseInt(min)) {
      min = e;
    }
    if (Number.parseInt(e) > Number.parseInt(max)) {
      max = e;
    }
  })
  return `${max} ${min}`;
}


console.log(highAndLow("1 2 3 4 5"));  // return "5 1"
console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")); // return "542 -214"
