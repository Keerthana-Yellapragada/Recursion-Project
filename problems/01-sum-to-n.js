/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
***********************************************************************/

function sumToN(num) {
let result = num;

if (num < 0){
  return null;
}

  result = result + sumToN(num-1)

  return result;
}

// alternate way to solve:
// // edgecase
// if (num < 0) return null
// if (num === 0) return 0
// return num + sumToN(num-1)



// another way to solve:
// const sumToN = (num, sum = 0) => {
//   //edge case
//   if (num < 0) return null

//   if (num === 0) return sum // base case

//   // else if (num > 1) { // recursive case
//   return sumToN(num - 1, sum + num) // recursive
//   // }
// }


// console.log(sumToN(5)) // returns 15
// console.log(sumToN(1))  // returns 1
// console.log(sumToN(9)  // returns 45
// sumToN(-8)  // returns null




/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
