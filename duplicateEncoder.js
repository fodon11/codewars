// The goal of this exercise is to convert a string to a 
// new string where each character in the new string is 
// '(' if that character appears only once in the original 
// string, or ')' if that character appears more than once in 
// the original string. Ignore capitalization when determining 
// if a character is a duplicate.

function duplicateEncode(str){
    word = str.toLowerCase()
    let array1 = [];
    // let str = word
    let array = [];
    for (i=0; i<word.length; i++){
      str.substr(word[i], '(');
      array.push(word[i]);
      array1.push(word[i])
    }
    array.forEach((e, i) => {
      let last = array1.lastIndexOf(e);
      let first = array1.indexOf(e);
      // array[i] = '(';
      console.log(e + ' i: ' + i + ' last: ' + last + ' first: ' + first)
      if(i== first) {
        array[i] = '('
      }
      if (i !== last){
        array[i] = ')'
      } 
      if(i !== first) {
        array[i] = ')'
      } 
      
    })
    // array.concat()
    return array.join().replace(/,/g, '')
  }