//Write a method to replace all spaces in a string with '%20'.

/*
time: O(n)
space: O(n)
*/

const URLify = (str) => {
  // return str.trim().split(' ').join('%20');
  var urlStr = '';
  var trimmedStr = str.trim();
  for (var i = 0; i < trimmedStr.length; i++) {
    let current = trimmedStr[i];
    let right = trimmedStr[i + 1];

    if (current !== ' ') {
      urlStr += current;
    } else {
      urlStr += '%20';
    }
  }
  return urlStr;
};

module.exports = URLify;
