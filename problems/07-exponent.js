/***********************************************************************
Write a recursive function called `exponent` that takes two integers, 
`num` and `power`, and returns `num` raised to the `power`th power. Your
function should work when `num` or `power` are positive OR negative.

Exponents are used to represent a number being multiplied by itself a
given number of times:

4^3 = 4 x 4 x 4 = 64

Negative exponents represent the same action, but in the denominator instead
of the numerator:

4^-3 = (1/4) * (1/4) * (1/4) = 1/64.

Examples:

exponent(3, 2); // 9
exponent(2, -2); // 1/4 (or 0.25)
exponent(5, 5); // 3125
***********************************************************************/

// function exponent(num,power) {
//   // your code here
//   if(power===0){
// return 1;
//   }
//   return  Math.pow(num,power)

// }
function exponent(b, n,  product = 1) {
// debugger
//   if (i > n) {
//     return product
//   }
//   debugger
//   if (n === 0) {
//     return 1;
//   }
//   debugger;
//    if(n<0){ // negative power
//   product=product* (1/b) 
//   n=n*(-1)
//   return 1/exponent(b, n, i = n , product)
//   }
//   debugger
//    if (i <= n) {
//     product = product * b
//     return exponent(b, n, i = i + 1, product)
//   }
  
if(n===0){
  return product;
}
if(n>0){
 product = b*product
 return exponent(b,n-1,product)
}
if (n<0){
  product = product/b
return 1/exponent(b,n+1,product)
}

}
// function exponent(b, n) {
//   // your code here
//   if (n === 0) return 1;

//   if (n < 0) return (1 / b * exponent(b, n+1));
//   else return b * exponent(b, n-1);
// }

console.log(exponent(3, 2)); // 9
console.log(exponent(2, -2)); // 1/4 (or 0.25)
console.log(exponent(5, 5)); // 3125
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = exponent;
} catch (e) {
  module.exports = null;
}
