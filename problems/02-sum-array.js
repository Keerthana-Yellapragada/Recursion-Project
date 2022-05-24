/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/
const sumArray = (arr, i=0) => {
  let sum = 0;
  if (i === arr.length){
    return sum;
  }
  return sum += arr[i] + sumArray(arr,i+1)
}



// function sumArray(nums){
//   //base case
//   if (!nums.length) return 0

//     const last = nums.pop() // mutate array,hold onto last num
//     const recursiveStep = sumArray(nums) //reinvoke function on what's left
//     return last + recursiveStep
// }




console.log(sumArray([1, 2, 3])); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}
