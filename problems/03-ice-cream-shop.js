/***********************************************************************
Write a recursive function `iceCreamShop(flavors, favorite)` that takes in an
array of ice cream flavors available at the ice cream shop, as well as the
user's favorite ice cream flavor. Recursively find out whether or not the shop
offers their favorite flavor.

Examples:
iceCreamShop(['vanilla', 'strawberry'], 'blue moon'); // false
iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea'); // true
iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio'); // false
iceCreamShop(['moose tracks'], 'moose tracks'); // true
iceCreamShop([], 'honey lavender'); // false
***********************************************************************/


const iceCreamShop = (flavors, favorite, i=0) => {

  // base case
  if (i === flavors.length){
    debugger;
    return false;
  }
  if (flavors[i]=== favorite){
    debugger;
    return true;
  }
    debugger;
    return iceCreamShop(flavors, favorite, i= i+1);
    // have to explicitly delcare parameter incrementation

}

// const iceCreamShop = (falvors, favorite) => {
// if (!flavors.length) return false
// const current = flavors.pop()
// if(favorite === current) return true
// iceCreamShop(flavors, favorite)
// }





iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea'); // true

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = iceCreamShop;
} catch (e) {
  module.exports = null;
}
