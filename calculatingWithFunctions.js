// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// Requirements:

//     There must be a function for each number from 0 ("zero") to 9 ("nine")
//     There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
//     Each calculation consist of exactly one operation and two numbers
//     The most outer function represents the left operand, the most inner function represents the right operand
//     Divison should be integer division. For example, this should return 2, not 2.666666...:

// eight(dividedBy(three()));


// I'm not satisfied with the answer i came up with. After viewing other people's solutions to this problem,
    // I see a much cleaner way to operate this problem. I will leave this as is and revisit in the future once i forget
    // what the better method looks like



function zero(operation) {
    if(operation){
        return operate(0, operation[0], operation[1]);
    }else{
        return 0
    }
}
function one(operation) {
    if(operation){
        return operate(1, operation[0], operation[1]);
    }else{
        return 1
    }
}
function two(operation) {
    if(operation){
        return operate(2, operation[0], operation[1]);
    }else{
        return 2
    }
}
function three(operation) {
    if(operation){
        return operate(3, operation[0], operation[1]);
    }else{
        return 3
    }
}
function four(operation) {
    if(operation){
        return operate(4, operation[0], operation[1]);
    }else{
        return 4
    }
}
function five(operation) {
    if(operation){
        return operate(5, operation[0], operation[1]);
    }else{
        return 5
    }
}
function six(operation) {
    if(operation){
        return operate(6, operation[0], operation[1]);
    }else{
        return 6
    }
}
function seven(operation) {
    if(operation){
        return operate(7, operation[0], operation[1]);
    }else{
        return 7
    }
}
function eight(operation) {
    if(operation){
        return operate(8, operation[0], operation[1]);
    }else{
        return 8
    }
}
function nine(operation) {
    if(operation){
        return operate(9, operation[0], operation[1]);
    }else{
        return 9
    }
}

function plus(num) {
    return ['add', num];
}
function minus(num) {
    return ['subt', num];
}
function times(num) {
    return ['mult', num];
}
function dividedBy(num) {
    return ['div', num]
}

function operate(num1, operation, num2){
    switch(operation){
        case 'add': return num1 + num2; break;
        case 'subt': return num1 - num2; break;
        case 'mult': return Math.floor(num1 * num2); break;
        case 'div': return Math.floor(num1/num2); break;
    }
}

console.log(seven(times(five()))) 
// 35
console.log(four(plus(nine()))) 
// 13
console.log(eight(minus(three()))) 
// 5
console.log(six(dividedBy(two()))) 
// 3