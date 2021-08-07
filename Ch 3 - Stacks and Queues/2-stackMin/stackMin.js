//How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element? push, pop and min should all operate in 0(1) time.

var Stack = require('./../util/Stack');

class StackMin extends Stack {
  constructor() {
    super();
      this._minStack = new Stack();
  }

  push(value) {
    if (value <= this.min()) {
      this._minStack.push(value);
    }
    super.push(value);
  }

  pop() {
    var value = super.pop();
    if (value == this.min()) {
      this._minStack.pop();
    }
    return value;
  }

  min() {
    if (this._minStack.isEmpty()) {
      return null;
    } else {
      return this._minStack.peek();
    }
  }
}

module.exports = StackMin;