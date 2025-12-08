import { VOID_SYMBOL } from '../core/SacredSymbols.js';

export class Unit8 {
  constructor() {
    this.unitNumber = 8;
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