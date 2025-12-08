import { VOID_SYMBOL } from '../core/sacred9.js';

export class Unit7 {
  constructor() {
    this.unitNumber = 7;
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