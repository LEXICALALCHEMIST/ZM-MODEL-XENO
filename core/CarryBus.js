// ZMXENO/core/CarryBus.js
export default class CarryBus {
  constructor() {
    this.carryValue = 0;
    this.carryTarget = null;
  }

  registerCarry(value, target) {
    this.carryValue = value;
    this.carryTarget = target;
  }

  flushCarry() {
    const carry = { carryValue: this.carryValue, carryTarget: this.carryTarget };
    this.carryValue = 0;
    this.carryTarget = null;
    return carry;
  }
}