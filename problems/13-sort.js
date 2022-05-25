/***********************************************************************
Write a recursive function called `sort` that takes an array of integers, `nums`
and returns an array containing those integers sorted from least to greatest.

Your function should accept a default argument called `sorted` which
holds the currently sorted elements. Each recursive step should add
the smallest number in the `nums` array to the end of `sorted`.

There are many ways to accomplish this task but here's a simple algorithm:

1. Check the base case: If `nums` is empty, then return `sorted`
2. Otherwise, find the smallest element in `nums`
3. Add the smallest element to the end of `sorted`
4. Remove the smallest element from `nums`
5. Recursively call `sort()` with updated `sorted` and `nums`

Examples:

sort([4,1,6,3,1,7]); // [1, 1, 3, 4, 6, 7]
sort([0, 1, -3]); // [-3, 0, 1]
sort([]); // []
***********************************************************************/

function sort(nums,i=0, sorted = [],min=0) {
  // your code here
// if(nums.length===0)return []
if(nums.length===i){
  return sorted;
}

if(nums[i]<min){
  sorted.unshift(nums[i])
}
else if(nums[i]>0 && nums[i]>=min){
min = nums[i]
sorted.push(min)
console.log(sorted)
}
return sort(nums,i+1,sorted,min)
}
// //[0, 1, -3]
// const minValue = arr=>{
// let min = 0;
// let newArr=[];

// for(let i=0;i<arr.length;i++){
//   if(arr[i]<0){
//     newArr.unshift(arr[i])
//   }
//   if(arr[i]>=min ){
//     min = arr[i];
//     newArr.push(min)
//     //arr.shift()
//   }

// }
// return newArr;
// }
console.log(sort([4,1,6,3,1,7]))
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sort;
} catch (e) {
  module.exports = null;
}
