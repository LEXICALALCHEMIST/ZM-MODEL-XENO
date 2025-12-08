import { VOID_SYMBOL } from '../core/SacredSymbols.js';

export class Unit4 {
  constructor() {
    this.unitNumber = 4;
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