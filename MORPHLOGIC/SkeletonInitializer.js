// ZMXENO/skeleton/SkeletonInitializer.js
import { extendUnits as extendUnitsPush } from './unitExtensionsPush.js';
import { extendUnits as extendUnitsPull } from './unitExtensionsPull.js';
import CarryBus from '../core/CarryBus.js';
import { S9, VOID } from '../core/sacred9.js';

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

    this.units.forEach(u => u.skeleton = this);
  }

  async set(number, push = true) {
    await this.init(push);

    if (number < 0 || number > 999999999999) throw new Error('Number out of range');

    const digits = number.toString().padStart(12, '0').slice(-12).split('').map(Number);
    this.state.numberLength = number.toString().length || 1;
    this.state.activeUnitTarget = `u${this.state.numberLength}`;

    this.units.forEach((unit, i) => {
      unit.state.currentSymbol = VOID;
      unit.state.carry = 0;
      unit.state.hasCollapsed = false;
      unit.state.pushes = [];
      unit.state.pushesLength = 0;
      unit.state.u1Collapse = false;

      const digit = digits[i];
      if (digit !== undefined) {
        unit.state.currentSymbol = S9[digit];
      }
    });

    this.state.snapshot = JSON.parse(JSON.stringify(this.getState()));
    return this.getState();
  }

  getState() {
    return {
      units: this.units.map(u => u.getState()),
      numberLength: this.state.numberLength,
      activeUnitTarget: this.state.activeUnitTarget
    };
  }
}