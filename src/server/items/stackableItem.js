import Item from './item';

export default class StackableItem extends Item {
  constructor(kwargs = {}) {
    super(kwargs);
    this.stackAmount = kwargs.stackAmount || 0;
    this.maxStackAmount = kwargs.maxStackAmount || 0;
  }
  isEmpty() {
    return this.stackAmount === 0;
  }
  hasAny() {
    return !this.isEmpty();
  }
  addToStack(n = 1) {
    this.stackAmount = Math.min(this.stackAmount + n, this.maxStackAmount);
    return this.stackAmount;
  }
  removeFromStack(n = 1) {
    this.stackAmount = Math.max(this.stackAmount - n, 0);
    return new (this.constructor)({
      stackAmount: n,
      maxStackAmount: this.maxStackAmount
    });
  }
  toJSONObject() {
    return {
      type: 'StackableItem',
      item: this.constructor.name,
      amount: this.stackAmount
    };
  }
}

