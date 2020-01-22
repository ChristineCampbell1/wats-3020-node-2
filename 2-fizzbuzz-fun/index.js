/*
Description:a program that counts from 1 to a given integer, printing out fizz if the number is divisble by 3, buzz if it is divisible by 5, and fizzbuzz if it is divisible by both 3 and 5. This is an adaptation of the FizzBuzz algorithm but with a function.
Input: an integer
Output: a list of all values from 1 to the value of the integer. If the number is divisible by 3 it is marked "fizz", if it's divisible by 5 it is marked "buzz" and if it is divisible for 15 (3 and 5) it is marked "buzz".
Usage: node 2-fizzbuzz-fun <integer>.
*/

// get input using getargs
const getargs = require("../modules/getargs")
let input = getargs.getIntegerArg()


function fizzbuzz(n){
  if (n % 15 === 0) {
    return `fizzbuzz`
  } else if (n % 3 === 0) {
    return `fizz`
  } else if (n % 5 === 0) {
    return `buzz`
  } else {
    return ``
  }
}

// TODO check if input is not an integer
if (isNaN(input) || !Number.isInteger(input)) {
  console.log("usage: node 1-fizzbuzz <integer>");
}
else {
  for (let i = 1; i <= input; i++) {
    console.log(`${i} ${fizzbuzz(i)}`);
  }
}