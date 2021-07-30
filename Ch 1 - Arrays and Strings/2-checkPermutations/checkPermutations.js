//Given two strings, write a method to decide if one is a permutation of the other.

/*
1. case sensitive?
2. care about whitespace?
*/

const checkPermutations = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  var sortedStr1 = str1.split('').sort().join('');
  var sortedStr2 = str2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
};

module.exports = checkPermutations;
