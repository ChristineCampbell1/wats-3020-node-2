//TODO fill in comment template
/*
Description: a program that takes a string as input and counts how many of each character are in that string.
Input: a string
Output:character count
Usage: node 5-character-count
*/

// get input using getargs
const getargs = require("../modules/getargs")
let input = getargs.getStringArg()


//test that it is a string
if (!input || input.length == 0);
console.log(`usage: node 5-character-count <string>`);

  let charCount = {};
  let characters = input.split('');

  for (let character of characters){
    if (charCount[character]){
      charCount[character]++;
    } else {
      charCount[character] = 1;
    }
}
for (let character in charCount) {
  console.log(`${character} ${charCount}`);
  
let charArr = [];
for (let character in charCount){
    let newElem = {char:character, count:charCount[character]};
    charArr.push(newElem);
  }

charArr.sort(function(a,b){
    return a.count-b.count;
});

for (let row of charArr){
  console.log(`${row.char} ${row.count}`);
  }
  
}

