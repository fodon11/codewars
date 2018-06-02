function persistence(num) {
    them = 0
        // Array which holds count of numbers had to be multiplied
      them = 0;
      multiplyArray(num)
      // Loops each multiplication until there's one digit
      while(Array.from(array.toString()).length !== 1){
        multiplyArray(array)
      }
      return them
    }

// This will multiply the array
function multiplyArray(num){
    // Original array of numbers
    this.numberArray = Array.from(num.toString());
    // Makes a copy of the original array
    this.array = numberArray.map(e => e)
    console.log(numberArray.length)
    console.log(numberArray);
    console.log(array);
    for (var i=0; i<numberArray.length-1; i++){
        console.log('before ' + array);
        // Multiplies first number in the array to
        // subsequent numbers
        array[0] = array[0]*array[1];
        // Takes out that number which was multiplied to
        // first
        array.splice(1, 1);
        console.log('after ' + array)
        console.log(numberArray.length)
        console.log('')
    }
    // Adds a number to the array storing a count of
    // numbers had to multiply
    if (numberArray.length > 1) them ++;
    console.log(array)
}
