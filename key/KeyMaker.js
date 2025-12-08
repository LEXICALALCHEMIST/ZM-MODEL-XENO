// ZMXENO/key/KeyMaker.js
import { SYMBOL_SEQUENCE, VOID_SYMBOL } from '../core/sacred9.js';

export default class KeyMaker {
  makeKey(number) {
    const digits = number.toString().split('').map(Number);
    const length = digits.length;

    const push = Array(12).fill(null).map((_, i) => {
      const digit = digits[i];
      return digit !== undefined ? `U${i + 1}:${digit}` : `U${i + 1}:null`;
    });

    const view = push.map(entry =>
      entry.includes('null')
        ? VOID_SYMBOL
        : SYMBOL_SEQUENCE[parseInt(entry.split(':')[1])] || VOID_SYMBOL
    );

    return { number, length, push, view };
  }
}