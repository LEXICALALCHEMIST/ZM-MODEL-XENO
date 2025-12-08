import { VOID_SYMBOL } from '../core/SacredSymbols.js';

export class Unit6 {
  constructor() {
    this.unitNumber = 6;
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