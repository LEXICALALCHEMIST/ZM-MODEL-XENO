// ZMXENO/gate/phaser/phaser.js
// The Observer. The Witness. The Sacred Log.

import { SYMBOL_SEQUENCE } from '../../core/sacred9.js';
// ZMXENO/gate/phaser/phaser.js — FINAL, NO DUPLICATION
import { skeletonToNumber, skeletonToString } from '../../utils/translator.js';

class Phase {
  constructor() {
    this.history = [];
    this.current = null;
  }

  begin(name, data = {}) {
    this.current = {
      phase: name,
      timestamp: Date.now(),
      data
    };
    console.log(`\n[PHASE] ${name.toUpperCase()} — START`);
    return this;
  }

  snap(skeleton) {
    const state = skeleton.getState();
    const display = skeletonToString(state);
    const value = skeletonToNumber(state);

    this.current.snapshot = { display, value, length: state.numberLength };

    console.log(`[SNAP]  Skeleton: ${display}`);
    console.log(`[SNAP]  Value: ${value} | Length: ${state.numberLength}`);
    return this;
  }

  end() {
    if (this.current) {
      this.history.push({ ...this.current });
      console.log(`[PHASE] ${this.current.phase.toUpperCase()} — END\n`);
      this.current = null;
    }
    return this.history;
  }

  reset() {
    this.history = [];
    console.log('[PHASER] Reset — Ready for next test\n');
  }

  log() {
    return this.history;
  }
}

export const phaser = new Phase();