// Write code to remove duplicates from an unsorted linked list.

// Follow up: To reduce space complexity How would you solve this problem if a temporary buffer is not allowed? What does this do to time complexity?
// To reduce space complexity, we can use two pointers, where one will traverse the list to search for duplicates
// although this method will reduce the space complexity to O(1), it will increase the time complexity to (O n^2)

/*
Definition of a node in a linked list
function Node(val) {
  this.val = val;
  this.next = null;
}
*/

function removeDups(head) {
  var obj = {};
  let prev = null;
  let node = head;
  while (node) {
    if (obj[node.val]) {
      prev.next = node.next;
    } else {
      obj[node.val] = true;
      prev = node;
    }
    node = node.next;
  }
  return head;
}
// takes O(n) time wher n is the number of elements in the linked list

module.exports = removeDups;
