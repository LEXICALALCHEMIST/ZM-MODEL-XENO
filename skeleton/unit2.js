import { VOID_SYMBOL } from '../core/sacred9.js';

export class Unit2 {
  constructor() {
    this.unitNumber = 2;
    this.state = {
      currentSymbol: VOID_SYMBOL,
      carry: 0,
      hasCollapsed: false,
      pushes: [],
      pushesLength: 0
    };
  }

  getState() {
    return this.state;
  }
}