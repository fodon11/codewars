// This is a problem from class given to us by @alancardero
// The problem is that you're given an array of individual objects 
    // that are places a spy has been do, but in no order, the only
    // thing you know is that every key is an origin and the value to 
    // that key is its respective destination
    // You want to display their path in order from the first origin to 
    // the final destination


const case1 = [{ "MEX": "BAR" }, { "NYC": "MEX" }, { "MIA": "NYC" }, {'FRA': 'JPN'}, {"BAR": "NXT"}, {'NXT': 'COA'}];
// ["MIA", "NYC", "MEX","BAR"]
const case2 = [{ "LAX": "MEX" }, { "BAR": "PTG" }, { "NYC": "LAX" }]
// ["NYC", "LAX", "MEX"]

function riddle(array) {
  const obj = {};
  array.forEach((e, i) => {
    obj[Object.keys(e)[0]] = Object.values(e)[0]
  })
  const keys = Object.keys(obj);
  const values = Object.values(obj)
  const results = [];

  function recursive (key){
    // As the function gets called recursively, 
        // it returns the value of the property 
        // corrresponding to the original key
        // key:value, obj[value] = newValue
        // recursive(newFunction) 
        // this function pushes each 
    results.push(key);
    // recursively calls itself 
    while(keys.indexOf(obj[key]) > -1){
      return recursive(obj[key])
    }
    // adds the last place spy goes to 
    results.push(obj[key])
  }

  keys.forEach((e, i) => {
    // Checks that this is the first origin in the seguence
    if(values.indexOf(e) === -1 && keys.indexOf(values[i]) > -1){
      recursive(e)
    }
  })

  return results
}


riddle(case1)