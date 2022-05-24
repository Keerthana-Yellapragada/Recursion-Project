/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/
const range = (min, max,numArray =[]) => {
  if (max < min) {
    return [];
  }
  //base case
if (min === max) {
  return numArray;
}
  numArray.push(min)
  return range(min = min + 1, max, numArray)
}

console.log(range(1, 5)); // [1, 2, 3, 4]
// range(3, 4); // [3]
// range(7, 6); // []
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
