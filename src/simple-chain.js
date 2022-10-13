const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  data: [],
  getLength() {
    return this.data.length;
  },
  addLink(value) {
      this.data.push(`( ${value} )`);
      return this;
  },
  removeLink(position) {
      if (typeof position !== 'number' || position < 1 || position > this.data.length) {
        this.data = [];
        throw new Error('You can\'t remove incorrect link!');        
      } else {
        this.data.splice(position - 1, 1);
        return this;
      }
  },
  reverseChain() {
      this.data.reverse();
      return this;
  },
  finishChain() {
    const res = this.data.join('~~');
    this.data = [];
    return res;
  }
};

module.exports = {
  chainMaker
};
