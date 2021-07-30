//Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

/*
1. is it case sensitive?
2. ASCII or uncide?
*/

function isUnique(str) {
  var obj = {};
  for (var i = 0; i < str.length; i++) {
    let value = str[i];
    if (obj[value]) {
      return false;
    }
    obj[value] = true;
  }
  return true;
}

module.exports = isUnique;
