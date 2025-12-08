// ZMXENO/MorphLogic/SkeletonInitializer.js
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

  async init(isPushOperation = true) {
    const extendUnitsModule = isPushOperation ? extendUnitsPush : extendUnitsPull;
    const { Unit1, Unit2, Unit3, Unit4, Unit5, Unit6, Unit7, Unit8, Unit9, Unit10, Unit11, Unit12 } = await extendUnitsModule();

    this.units = [
      new Unit1(), new Unit2(), new Unit3(), new Unit4(),
      new Unit5(), new Unit6(), new Unit7(), new Unit8(),
      new Unit9(), new Unit10(), new Unit11(), new Unit12()
    ];

    this.units.forEach(unit => { unit.skeleton = this; });
  }

  async set(number, isPushOperation = true) {
    await this.init(isPushOperation);

    if (number < 0 || number > 999999999999) {
      throw new Error('Number must be between 0 and 999,999,999,999');
    }

    const digits = number.toString().split('').map(Number);
    this.state.numberLength = digits.length || 1;
    this.state.activeUnitTarget = `u${this.state.numberLength}`;

    this.units.forEach((unit, i) => {
      unit.state.currentSymbol = VOID_SYMBOL;
      unit.state.carry = 0;
      unit.state.hasCollapsed = false;
      unit.state.pushes = [];
      unit.state.pushesLength = 0;
      unit.state.u1Collapse = false;

      const digit = digits[i];
      if (digit !== undefined) {
        unit.state.currentSymbol = SYMBOL_SEQUENCE[digit];
      }
    });

    const state = this.getState();
    this.state.snapshot = JSON.parse(JSON.stringify(state));
    return state;
  }

  getState() {
    return {
      units: this.units.map(unit => unit.getState()),
      numberLength: this.state.numberLength,
      activeUnitTarget: this.state.activeUnitTarget
    };
  }
}