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


// ANOTHER WAY TO SOLVE:
// function sumArray(nums){
//   //base case
//   if (!nums.length) return 0

//     const last = nums.pop() // mutate array,hold onto last num
//     const recursiveStep = sumArray(nums) //reinvoke function on what's left
//     return last + recursiveStep
// }

//ANOTHER WAY TO SOLVE:
// const sumArray = nums =>{
//   if (nums.length === 0) return 0
//   const first = num[0]
//   const recurse = sumArray(nums.slice[1])
//   const tempSumm = first + recurse
//   return tempSum
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
