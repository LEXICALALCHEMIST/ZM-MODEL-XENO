import { Unit1 } from './unit1.js';
import { Unit2 } from './unit2.js';
import { Unit3 } from './unit3.js';
import { Unit4 } from './unit4.js';
import { Unit5 } from './unit5.js';
import { Unit6 } from './unit6.js';
import { Unit7 } from './unit7.js';
import { Unit8 } from './unit8.js';
import { Unit9 } from './unit9.js';
import { Unit10 } from './unit10.js';
import { Unit11 } from './unit11.js';
import { Unit12 } from './unit12.js';
import { SYMBOL_SEQUENCE, VOID_SYMBOL } from '../core/SacredSymbols.js';

export async function extendUnits() {
  class Unit1Push extends Unit1 {
    push(count, carryBus) {
      console.log(`unit1 Push Start: times=${count}, currentSymbol=${this.state.currentSymbol}`);
      
      let currentIndex = this.state.currentSymbol && this.state.currentSymbol !== VOID_SYMBOL
        ? SYMBOL_SEQUENCE.indexOf(this.state.currentSymbol)
        : -1;
      
      for (let i = 0; i < count; i++) {
        currentIndex = (currentIndex + 1);
        if (currentIndex >= SYMBOL_SEQUENCE.length - 1) {
          this.state.currentSymbol = SYMBOL_SEQUENCE[0]; // Reset to 0 (⚙)
          this.state.carry = 1;
          this.state.hasCollapsed = true;
          this.state.u1Collapse = true;
          console.log(
            `unit1 Push: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: 1`
          );
          console.log(
            `unit1 Carry: CARRY: ${this.state.carry} COLLAPSED: ${this.state.hasCollapsed} U1COLLAPSE: ${this.state.u1Collapse}`
          );
          carryBus.registerCarry(this.state.carry, `Unit${this.unitNumber - 1}`);
        } else {
          this.state.currentSymbol = SYMBOL_SEQUENCE[currentIndex];
          console.log(
            `unit1 Push: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: 1`
          );
        }
        this.state.pushes.push(this.state.currentSymbol);
      }
      
      this.state.pushesLength = this.state.pushes.length;
      console.log(`unit1 Push End: pushesLength=${this.state.pushesLength}`);
    }
  }

  class Unit2Push extends Unit2 {
    push(count, carryBus) {
      console.log(`unit2 Push Start: times=${count}, currentSymbol=${this.state.currentSymbol}`);
      
      let currentIndex = this.state.currentSymbol && this.state.currentSymbol !== VOID_SYMBOL
        ? SYMBOL_SEQUENCE.indexOf(this.state.currentSymbol)
        : -1;
      
      for (let i = 0; i < count; i++) {
        currentIndex = (currentIndex + 1);
        if (currentIndex >= SYMBOL_SEQUENCE.length - 1) {
          this.state.currentSymbol = SYMBOL_SEQUENCE[0]; // Reset to 0 (⚙)
          this.state.carry = 1;
          this.state.hasCollapsed = true;
          console.log(
            `unit2 Push: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: 1`
          );
          console.log(
            `unit2 Carry: CARRY: ${this.state.carry} COLLAPSED: ${this.state.hasCollapsed}`
          );
          carryBus.registerCarry(this.state.carry, `Unit${this.unitNumber - 1}`);
        } else {
          this.state.currentSymbol = SYMBOL_SEQUENCE[currentIndex];
          console.log(
            `unit2 Push: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: 1`
          );
        }
        this.state.pushes.push(this.state.currentSymbol);
      }
      
      this.state.pushesLength = this.state.pushes.length;
      console.log(`unit2 Push End: pushesLength=${this.state.pushesLength}`);
    }
  }

  class Unit3Push extends Unit3 {
    push(count, carryBus) {
      console.log(`unit3 Push Start: times=${count}, currentSymbol=${this.state.currentSymbol}`);
      
      let currentIndex = this.state.currentSymbol && this.state.currentSymbol !== VOID_SYMBOL
        ? SYMBOL_SEQUENCE.indexOf(this.state.currentSymbol)
        : -1;
      
      for (let i = 0; i < count; i++) {
        currentIndex = (currentIndex + 1);
        if (currentIndex >= SYMBOL_SEQUENCE.length - 1) {
          this.state.currentSymbol = SYMBOL_SEQUENCE[0]; // Reset to 0 (⚙)
          this.state.carry = 1;
          this.state.hasCollapsed = true;
          console.log(
            `unit3 Push: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: 1`
          );
          console.log(
            `unit3 Carry: CARRY: ${this.state.carry} COLLAPSED: ${this.state.hasCollapsed}`
          );
          carryBus.registerCarry(this.state.carry, `Unit${this.unitNumber - 1}`);
        } else {
          this.state.currentSymbol = SYMBOL_SEQUENCE[currentIndex];
          console.log(
            `unit3 Push: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: 1`
          );
        }
        this.state.pushes.push(this.state.currentSymbol);
      }
      
      this.state.pushesLength = this.state.pushes.length;
      console.log(`unit3 Push End: pushesLength=${this.state.pushesLength}`);
    }
  }

  class Unit4Push extends Unit4 {
    push(count, carryBus) {
      console.log(`unit4 Push Start: times=${count}, currentSymbol=${this.state.currentSymbol}`);
      
      let currentIndex = this.state.currentSymbol && this.state.currentSymbol !== VOID_SYMBOL
        ? SYMBOL_SEQUENCE.indexOf(this.state.currentSymbol)
        : -1;
      
      for (let i = 0; i < count; i++) {
        currentIndex = (currentIndex + 1);
        if (currentIndex >= SYMBOL_SEQUENCE.length - 1) {
          this.state.currentSymbol = SYMBOL_SEQUENCE[0]; // Reset to 0 (⚙)
          this.state.carry = 1;
          this.state.hasCollapsed = true;
          console.log(
            `unit4 Push: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: 1`
          );
          console.log(
            `unit4 Carry: CARRY: ${this.state.carry} COLLAPSED: ${this.state.hasCollapsed}`
          );
          carryBus.registerCarry(this.state.carry, `Unit${this.unitNumber - 1}`);
        } else {
          this.state.currentSymbol = SYMBOL_SEQUENCE[currentIndex];
          console.log(
            `unit4 Push: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: 1`
          );
        }
        this.state.pushes.push(this.state.currentSymbol);
      }
      
      this.state.pushesLength = this.state.pushes.length;
      console.log(`unit4 Push End: pushesLength=${this.state.pushesLength}`);
    }
  }

  class Unit5Push extends Unit5 {
    push(count, carryBus) {
      console.log(`unit5 Push Start: times=${count}, currentSymbol=${this.state.currentSymbol}`);
      
      let currentIndex = this.state.currentSymbol && this.state.currentSymbol !== VOID_SYMBOL
        ? SYMBOL_SEQUENCE.indexOf(this.state.currentSymbol)
        : -1;
      
      for (let i = 0; i < count; i++) {
        currentIndex = (currentIndex + 1);
        if (currentIndex >= SYMBOL_SEQUENCE.length - 1) {
          this.state.currentSymbol = SYMBOL_SEQUENCE[0]; // Reset to 0 (⚙)
          this.state.carry = 1;
          this.state.hasCollapsed = true;
          console.log(
            `unit5 Push: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: 1`
          );
          console.log(
            `unit5 Carry: CARRY: ${this.state.carry} COLLAPSED: ${this.state.hasCollapsed}`
          );
          carryBus.registerCarry(this.state.carry, `Unit${this.unitNumber - 1}`);
        } else {
          this.state.currentSymbol = SYMBOL_SEQUENCE[currentIndex];
          console.log(
            `unit5 Push: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: 1`
          );
        }
        this.state.pushes.push(this.state.currentSymbol);
      }
      
      this.state.pushesLength = this.state.pushes.length;
      console.log(`unit5 Push End: pushesLength=${this.state.pushesLength}`);
    }
  }

  class Unit6Push extends Unit6 {
    push(count, carryBus) {
      console.log(`unit6 Push Start: times=${count}, currentSymbol=${this.state.currentSymbol}`);
      
      let currentIndex = this.state.currentSymbol && this.state.currentSymbol !== VOID_SYMBOL
        ? SYMBOL_SEQUENCE.indexOf(this.state.currentSymbol)
        : -1;
      
      for (let i = 0; i < count; i++) {
        currentIndex = (currentIndex + 1);
        if (currentIndex >= SYMBOL_SEQUENCE.length - 1) {
          this.state.currentSymbol = SYMBOL_SEQUENCE[0]; // Reset to 0 (⚙)
          this.state.carry = 1;
          this.state.hasCollapsed = true;
          console.log(
            `unit6 Push: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: 1`
          );
          console.log(
            `unit6 Carry: CARRY: ${this.state.carry} COLLAPSED: ${this.state.hasCollapsed}`
          );
          carryBus.registerCarry(this.state.carry, `Unit${this.unitNumber - 1}`);
        } else {
          this.state.currentSymbol = SYMBOL_SEQUENCE[currentIndex];
          console.log(
            `unit6 Push: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: 1`
          );
        }
        this.state.pushes.push(this.state.currentSymbol);
      }
      
      this.state.pushesLength = this.state.pushes.length;
      console.log(`unit6 Push End: pushesLength=${this.state.pushesLength}`);
    }
  }

  class Unit7Push extends Unit7 {
    push(count, carryBus) {
      console.log(`unit7 Push Start: times=${count}, currentSymbol=${this.state.currentSymbol}`);
      
      let currentIndex = this.state.currentSymbol && this.state.currentSymbol !== VOID_SYMBOL
        ? SYMBOL_SEQUENCE.indexOf(this.state.currentSymbol)
        : -1;
      
      for (let i = 0; i < count; i++) {
        currentIndex = (currentIndex + 1);
        if (currentIndex >= SYMBOL_SEQUENCE.length - 1) {
          this.state.currentSymbol = SYMBOL_SEQUENCE[0]; // Reset to 0 (⚙)
          this.state.carry = 1;
          this.state.hasCollapsed = true;
          console.log(
            `unit7 Push: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: 1`
          );
          console.log(
            `unit7 Carry: CARRY: ${this.state.carry} COLLAPSED: ${this.state.hasCollapsed}`
          );
          carryBus.registerCarry(this.state.carry, `Unit${this.unitNumber - 1}`);
        } else {
          this.state.currentSymbol = SYMBOL_SEQUENCE[currentIndex];
          console.log(
            `unit7 Push: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: 1`
          );
        }
        this.state.pushes.push(this.state.currentSymbol);
      }
      
      this.state.pushesLength = this.state.pushes.length;
      console.log(`unit7 Push End: pushesLength=${this.state.pushesLength}`);
    }
  }

  class Unit8Push extends Unit8 {
    push(count, carryBus) {
      console.log(`unit8 Push Start: times=${count}, currentSymbol=${this.state.currentSymbol}`);
      
      let currentIndex = this.state.currentSymbol && this.state.currentSymbol !== VOID_SYMBOL
        ? SYMBOL_SEQUENCE.indexOf(this.state.currentSymbol)
        : -1;
      
      for (let i = 0; i < count; i++) {
        currentIndex = (currentIndex + 1);
        if (currentIndex >= SYMBOL_SEQUENCE.length - 1) {
          this.state.currentSymbol = SYMBOL_SEQUENCE[0]; // Reset to 0 (⚙)
          this.state.carry = 1;
          this.state.hasCollapsed = true;
          console.log(
            `unit8 Push: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: 1`
          );
          console.log(
            `unit8 Carry: CARRY: ${this.state.carry} COLLAPSED: ${this.state.hasCollapsed}`
          );
          carryBus.registerCarry(this.state.carry, `Unit${this.unitNumber - 1}`);
        } else {
          this.state.currentSymbol = SYMBOL_SEQUENCE[currentIndex];
          console.log(
            `unit8 Push: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: 1`
          );
        }
        this.state.pushes.push(this.state.currentSymbol);
      }
      
      this.state.pushesLength = this.state.pushes.length;
      console.log(`unit8 Push End: pushesLength=${this.state.pushesLength}`);
    }
  }

  class Unit9Push extends Unit9 {
    push(count, carryBus) {
      console.log(`unit9 Push Start: times=${count}, currentSymbol=${this.state.currentSymbol}`);
      
      let currentIndex = this.state.currentSymbol && this.state.currentSymbol !== VOID_SYMBOL
        ? SYMBOL_SEQUENCE.indexOf(this.state.currentSymbol)
        : -1;
      
      for (let i = 0; i < count; i++) {
        currentIndex = (currentIndex + 1);
        if (currentIndex >= SYMBOL_SEQUENCE.length - 1) {
          this.state.currentSymbol = SYMBOL_SEQUENCE[0]; // Reset to 0 (⚙)
          this.state.carry = 1;
          this.state.hasCollapsed = true;
          console.log(
            `unit9 Push: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: 1`
          );
          console.log(
            `unit9 Carry: CARRY: ${this.state.carry} COLLAPSED: ${this.state.hasCollapsed}`
          );
          carryBus.registerCarry(this.state.carry, `Unit${this.unitNumber - 1}`);
        } else {
          this.state.currentSymbol = SYMBOL_SEQUENCE[currentIndex];
          console.log(
            `unit9 Push: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: 1`
          );
        }
        this.state.pushes.push(this.state.currentSymbol);
      }
      
      this.state.pushesLength = this.state.pushes.length;
      console.log(`unit9 Push End: pushesLength=${this.state.pushesLength}`);
    }
  }

  class Unit10Push extends Unit10 {
    push(count, carryBus) {
      console.log(`unit10 Push Start: times=${count}, currentSymbol=${this.state.currentSymbol}`);
      
      let currentIndex = this.state.currentSymbol && this.state.currentSymbol !== VOID_SYMBOL
        ? SYMBOL_SEQUENCE.indexOf(this.state.currentSymbol)
        : -1;
      
      for (let i = 0; i < count; i++) {
        currentIndex = (currentIndex + 1);
        if (currentIndex >= SYMBOL_SEQUENCE.length - 1) {
          this.state.currentSymbol = SYMBOL_SEQUENCE[0]; // Reset to 0 (⚙)
          this.state.carry = 1;
          this.state.hasCollapsed = true;
          console.log(
            `unit10 Push: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: 1`
          );
          console.log(
            `unit10 Carry: CARRY: ${this.state.carry} COLLAPSED: ${this.state.hasCollapsed}`
          );
          carryBus.registerCarry(this.state.carry, `Unit${this.unitNumber - 1}`);
        } else {
          this.state.currentSymbol = SYMBOL_SEQUENCE[currentIndex];
          console.log(
            `unit10 Push: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: 1`
          );
        }
        this.state.pushes.push(this.state.currentSymbol);
      }
      
      this.state.pushesLength = this.state.pushes.length;
      console.log(`unit10 Push End: pushesLength=${this.state.pushesLength}`);
    }
  }

  class Unit11Push extends Unit11 {
    push(count, carryBus) {
      console.log(`unit11 Push Start: times=${count}, currentSymbol=${this.state.currentSymbol}`);
      
      let currentIndex = this.state.currentSymbol && this.state.currentSymbol !== VOID_SYMBOL
        ? SYMBOL_SEQUENCE.indexOf(this.state.currentSymbol)
        : -1;
      
      for (let i = 0; i < count; i++) {
        currentIndex = (currentIndex + 1);
        if (currentIndex >= SYMBOL_SEQUENCE.length - 1) {
          this.state.currentSymbol = SYMBOL_SEQUENCE[0]; // Reset to 0 (⚙)
          this.state.carry = 1;
          this.state.hasCollapsed = true;
          console.log(
            `unit11 Push: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: 1`
          );
          console.log(
            `unit11 Carry: CARRY: ${this.state.carry} COLLAPSED: ${this.state.hasCollapsed}`
          );
          carryBus.registerCarry(this.state.carry, `Unit${this.unitNumber - 1}`);
        } else {
          this.state.currentSymbol = SYMBOL_SEQUENCE[currentIndex];
          console.log(
            `unit11 Push: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: 1`
          );
        }
        this.state.pushes.push(this.state.currentSymbol);
      }
      
      this.state.pushesLength = this.state.pushes.length;
      console.log(`unit11 Push End: pushesLength=${this.state.pushesLength}`);
    }
  }

  class Unit12Push extends Unit12 {
    push(count, carryBus) {
      console.log(`unit12 Push Start: times=${count}, currentSymbol=${this.state.currentSymbol}`);
      
      let currentIndex = this.state.currentSymbol && this.state.currentSymbol !== VOID_SYMBOL
        ? SYMBOL_SEQUENCE.indexOf(this.state.currentSymbol)
        : -1;
      
      for (let i = 0; i < count; i++) {
        currentIndex = (currentIndex + 1);
        if (currentIndex >= SYMBOL_SEQUENCE.length - 1) {
          this.state.currentSymbol = SYMBOL_SEQUENCE[0]; // Reset to 0 (⚙)
          this.state.carry = 1;
          this.state.hasCollapsed = true;
          console.log(
            `unit12 Push: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: 1`
          );
          console.log(
            `unit12 Carry: CARRY: ${this.state.carry} COLLAPSED: ${this.state.hasCollapsed}`
          );
          carryBus.registerCarry(this.state.carry, `Unit${this.unitNumber - 1}`);
        } else {
          this.state.currentSymbol = SYMBOL_SEQUENCE[currentIndex];
          console.log(
            `unit12 Push: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: 1`
          );
        }
        this.state.pushes.push(this.state.currentSymbol);
      }
      
      this.state.pushesLength = this.state.pushes.length;
      console.log(`unit12 Push End: pushesLength=${this.state.pushesLength}`);
    }
  }

  return {
    Unit1: Unit1Push,
    Unit2: Unit2Push,
    Unit3: Unit3Push,
    Unit4: Unit4Push,
    Unit5: Unit5Push,
    Unit6: Unit6Push,
    Unit7: Unit7Push,
    Unit8: Unit8Push,
    Unit9: Unit9Push,
    Unit10: Unit10Push,
    Unit11: Unit11Push,
    Unit12: Unit12Push
  };
}