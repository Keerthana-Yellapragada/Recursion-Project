/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/
const reverse = (string, i=string.length-1, reversedString = "") => {

  //base case
 if (i < 0 ) {
  // console.log(reversedString)
  return reversedString;

 }
 if (i >=0){
 let slicedCharac = string[i]

 reversedString = reversedString + slicedCharac;
  // console.log(reversedString)
  return reverse(string, i = i - 1,reversedString);
}

}

console.log(reverse("house")); // "esuoh"
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
