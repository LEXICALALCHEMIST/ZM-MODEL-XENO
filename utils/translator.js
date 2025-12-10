// ZMXENO/utils/translator.js
// This file is the ONLY source of truth for turning symbols → number
import { SYMBOL_SEQUENCE } from '../core/sacred9.js';

export function skeletonToNumber(state) {
  if (!state || !state.units || !state.numberLength) return 0;

  let value = 0;
  for (let i = 0; i < state.numberLength; i++) {
    const symbol = state.units[i].currentSymbol;
    const digit = SYMBOL_SEQUENCE.indexOf(symbol);
    if (digit === -1) return 0; // safety
    value = value * 10 + digit;
  }
  return value;
}

// Bonus: pretty print
export function skeletonToString(state) {
  const display = state.units.map(u => u.currentSymbol).join('');
  return `<${display.slice(0,4)}|${display.slice(4,8)}|${display.slice(8,12)}>`;
}