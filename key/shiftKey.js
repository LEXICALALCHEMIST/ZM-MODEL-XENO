// ZMXENO/key/ShiftKey.js
import { SYMBOL_SEQUENCE, VOID_SYMBOL } from '../core/sacred9.js';

export default class ShiftKey {
  shift(key, targetLength) {
    const effectiveTarget = targetLength ?? key.length;

    const newPush = Array(12).fill('null').map((_, i) => {
      const oldIndex = i - (effectiveTarget - key.length);
      if (oldIndex >= 0 && oldIndex < key.push.length && !key.push[oldIndex].includes('null')) {
        const [, value] = key.push[oldIndex].split(':');
        return `U${i + 1}:${value}`;
      }
      return `U${i + 1}:null`;
    });

    const newView = newPush.map(entry =>
      entry.includes('null')
        ? VOID_SYMBOL
        : SYMBOL_SEQUENCE[parseInt(entry.split(':')[1])] || VOID_SYMBOL
    );

    return {
      number: key.number,
      length: key.length,
      targetLength: effectiveTarget,
      push: newPush,
      view: newView,
      targetUnit: `u${effectiveTarget}`
    };
  }
}