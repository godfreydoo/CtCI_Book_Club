//Given two strings, write a method to decide if one is a permutation of the other.

/*
1. case sensitive?
2. care about whitespace?
*/

// const checkPermutations = (str1, str2) => {
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   var sortedStr1 = str1.split('').sort().join('');
//   var sortedStr2 = str2.split('').sort().join('');

//   return sortedStr1 === sortedStr2;
// };

const checkPermutations = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  var obj = {};
  for (var i = 0; i < str1.length; i++) {
    let value = str1[i];
    if (obj[value]) {
      obj[value] += 1;
    } else {
      obj[value] = 1;
    }
  }

  for (var j = 0; j < str2.length; j++) {
    let value = str2[j];
    obj[value] -= 1;
    if (obj[value] < 0) {
      return false;
    }
  }
  return true;
}


module.exports = checkPermutations;
