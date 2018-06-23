// The goal of this exercise is to convert a string to a 
// new string where each character in the new string is 
// '(' if that character appears only once in the original 
// string, or ')' if that character appears more than once in 
// the original string. Ignore capitalization when determining 
// if a character is a duplicate.

function duplicateEncode(str){
  word = str.toLowerCase()
  let array = [];
  for (i=0; i<word.length; i++){
    array.push(word[i]);
  }
  array.forEach((e, i) => {
    let last = word.lastIndexOf(e);
    let first = word.indexOf(e);
    console.log(e + ' i: ' + i + ' last: ' + last + ' first: ' + first)
    if(i== first) {
      array[i] = '('
    }
    if (i !== last || i!== first){
      array[i] = ')'
    }
  })
  return array.join().replace(/,/g, '')
}

duplicateEncode('success')