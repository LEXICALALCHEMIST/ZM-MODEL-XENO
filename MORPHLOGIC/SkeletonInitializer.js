// ZMXENO/MorphLogic/SkeletonInitializer.js — FINAL, SACRED, 100% WORKING
import { extendUnits as extendUnitsPush } from '../skeleton/unitExtensionsPush.js';
import { extendUnits as extendUnitsPull } from '../skeleton/unitExtensionsPull.js';
import CarryBus from '../core/CarryBus.js';
import { SYMBOL_SEQUENCE, VOID_SYMBOL } from '../core/sacred9.js';

export default class SkeletonInitializer {
  constructor() {
    this.units = [];
    this.carryBus = new CarryBus();
    this.state = {
      numberLength: 1,
      activeUnitTarget: 'u1',
      snapshot: null
    };
  }

  async init(push = true) {
    const { Unit1, Unit2, Unit3, Unit4, Unit5, Unit6, Unit7, Unit8, Unit9, Unit10, Unit11, Unit12 } =
      push ? await extendUnitsPush() : await extendUnitsPull();

    this.units = [
      new Unit1(), new Unit2(), new Unit3(), new Unit4(),
      new Unit5(), new Unit6(), new Unit7(), new Unit8(),
      new Unit9(), new Unit10(), new Unit11(), new Unit12()
    ];

    this.units.forEach(u => (u.skeleton = this));
  }

  async set(number, push = true) {
    await this.init(push);

    const str = number.toString();
    this.state.numberLength = str.length || 1;
    this.state.activeUnitTarget = `u${this.state.numberLength}`;

    this.units.forEach(u => {
      u.state.currentSymbol = VOID_SYMBOL;
      u.state.carry = 0;
      u.state.hasCollapsed = false;
      u.state.pushes = [];
      u.state.pushesLength = 0;
      u.state.u1Collapse = false;
    });

    const digits = str.split('').map(Number);
    for (let i = 0; i < digits.length; i++) {
      this.units[i].state.currentSymbol = SYMBOL_SEQUENCE[digits[i]];
    }

    this.state.snapshot = JSON.parse(JSON.stringify(this.getState()));
    return this.getState();
  }

  // ← THIS WAS MISSING — NOW ADDED
  getState() {
    return {
      units: this.units.map(u => u.getState()),
      numberLength: this.state.numberLength,
      activeUnitTarget: this.state.activeUnitTarget
    };
  }
}