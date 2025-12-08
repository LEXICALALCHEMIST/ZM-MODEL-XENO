import { VOID_SYMBOL } from '../core/SacredSymbols.js';

export class Unit1 {
  constructor() {
    this.unitNumber = 1;
    this.state = {
      currentSymbol: VOID_SYMBOL,
      carry: 0,
      hasCollapsed: false,
      pushes: [],
      pushesLength: 0,
      u1Collapse: false
    };
  }

  getState() {
    return this.state;
  }
}