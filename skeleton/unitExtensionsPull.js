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
  class Unit1Pull extends Unit1 {
    pull(count, carryBus) {
      console.log(`unit1 Pull Start: times=${count}, currentSymbol=${this.state.currentSymbol}`);
      
      let currentIndex = this.state.currentSymbol && this.state.currentSymbol !== VOID_SYMBOL
        ? SYMBOL_SEQUENCE.indexOf(this.state.currentSymbol)
        : 0;
      
      for (let i = 0; i < count; i++) {
        currentIndex = (currentIndex - 1);
        if (currentIndex < 0) {
          this.state.currentSymbol = SYMBOL_SEQUENCE[10]; // Set to ♤ (10) temporarily
          this.state.carry = -1; // Register a borrow
          this.state.hasCollapsed = true;
          this.state.u1Collapse = true;
          console.log(
            `unit1 Pull: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: -1`
          );
          console.log(
            `unit1 Borrow: CARRY: ${this.state.carry} COLLAPSED: ${this.state.hasCollapsed} U1COLLAPSE: ${this.state.u1Collapse}`
          );
          carryBus.registerCarry(this.state.carry, `Unit${this.unitNumber - 1}`);
        } else {
          this.state.currentSymbol = SYMBOL_SEQUENCE[currentIndex];
          console.log(
            `unit1 Pull: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: -1`
          );
        }
        this.state.pushes.push(this.state.currentSymbol);
      }
      
      this.state.pushesLength = this.state.pushes.length;
      console.log(`unit1 Pull End: pushesLength=${this.state.pushesLength}`);
    }
  }

  class Unit2Pull extends Unit2 {
    pull(count, carryBus) {
      console.log(`unit2 Pull Start: times=${count}, currentSymbol=${this.state.currentSymbol}`);
      
      let currentIndex = this.state.currentSymbol && this.state.currentSymbol !== VOID_SYMBOL
        ? SYMBOL_SEQUENCE.indexOf(this.state.currentSymbol)
        : 0;
      
      for (let i = 0; i < count; i++) {
        currentIndex = (currentIndex - 1);
        if (currentIndex < 0) {
          this.state.currentSymbol = SYMBOL_SEQUENCE[10]; // Set to ♤ (10) temporarily
          this.state.carry = -1; // Register a borrow
          this.state.hasCollapsed = true;
          console.log(
            `unit2 Pull: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: -1`
          );
          console.log(
            `unit2 Borrow: CARRY: ${this.state.carry} COLLAPSED: ${this.state.hasCollapsed}`
          );
          carryBus.registerCarry(this.state.carry, `Unit${this.unitNumber - 1}`);
        } else {
          this.state.currentSymbol = SYMBOL_SEQUENCE[currentIndex];
          console.log(
            `unit2 Pull: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: -1`
          );
        }
        this.state.pushes.push(this.state.currentSymbol);
      }
      
      this.state.pushesLength = this.state.pushes.length;
      console.log(`unit2 Pull End: pushesLength=${this.state.pushesLength}`);
    }
  }

  class Unit3Pull extends Unit3 {
    pull(count, carryBus) {
      console.log(`unit3 Pull Start: times=${count}, currentSymbol=${this.state.currentSymbol}`);
      
      let currentIndex = this.state.currentSymbol && this.state.currentSymbol !== VOID_SYMBOL
        ? SYMBOL_SEQUENCE.indexOf(this.state.currentSymbol)
        : 0;
      
      for (let i = 0; i < count; i++) {
        currentIndex = (currentIndex - 1);
        if (currentIndex < 0) {
          this.state.currentSymbol = SYMBOL_SEQUENCE[10]; // Set to ♤ (10) temporarily
          this.state.carry = -1; // Register a borrow
          this.state.hasCollapsed = true;
          console.log(
            `unit3 Pull: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: -1`
          );
          console.log(
            `unit3 Borrow: CARRY: ${this.state.carry} COLLAPSED: ${this.state.hasCollapsed}`
          );
          carryBus.registerCarry(this.state.carry, `Unit${this.unitNumber - 1}`);
        } else {
          this.state.currentSymbol = SYMBOL_SEQUENCE[currentIndex];
          console.log(
            `unit3 Pull: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: -1`
          );
        }
        this.state.pushes.push(this.state.currentSymbol);
      }
      
      this.state.pushesLength = this.state.pushes.length;
      console.log(`unit3 Pull End: pushesLength=${this.state.pushesLength}`);
    }
  }

  class Unit4Pull extends Unit4 {
    pull(count, carryBus) {
      console.log(`unit4 Pull Start: times=${count}, currentSymbol=${this.state.currentSymbol}`);
      
      let currentIndex = this.state.currentSymbol && this.state.currentSymbol !== VOID_SYMBOL
        ? SYMBOL_SEQUENCE.indexOf(this.state.currentSymbol)
        : 0;
      
      for (let i = 0; i < count; i++) {
        currentIndex = (currentIndex - 1);
        if (currentIndex < 0) {
          this.state.currentSymbol = SYMBOL_SEQUENCE[10]; // Set to ♤ (10) temporarily
          this.state.carry = -1; // Register a borrow
          this.state.hasCollapsed = true;
          console.log(
            `unit4 Pull: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: -1`
          );
          console.log(
            `unit4 Borrow: CARRY: ${this.state.carry} COLLAPSED: ${this.state.hasCollapsed}`
          );
          carryBus.registerCarry(this.state.carry, `Unit${this.unitNumber - 1}`);
        } else {
          this.state.currentSymbol = SYMBOL_SEQUENCE[currentIndex];
          console.log(
            `unit4 Pull: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: -1`
          );
        }
        this.state.pushes.push(this.state.currentSymbol);
      }
      
      this.state.pushesLength = this.state.pushes.length;
      console.log(`unit4 Pull End: pushesLength=${this.state.pushesLength}`);
    }
  }

  class Unit5Pull extends Unit5 {
    pull(count, carryBus) {
      console.log(`unit5 Pull Start: times=${count}, currentSymbol=${this.state.currentSymbol}`);
      
      let currentIndex = this.state.currentSymbol && this.state.currentSymbol !== VOID_SYMBOL
        ? SYMBOL_SEQUENCE.indexOf(this.state.currentSymbol)
        : 0;
      
      for (let i = 0; i < count; i++) {
        currentIndex = (currentIndex - 1);
        if (currentIndex < 0) {
          this.state.currentSymbol = SYMBOL_SEQUENCE[10]; // Set to ♤ (10) temporarily
          this.state.carry = -1; // Register a borrow
          this.state.hasCollapsed = true;
          console.log(
            `unit5 Pull: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: -1`
          );
          console.log(
            `unit5 Borrow: CARRY: ${this.state.carry} COLLAPSED: ${this.state.hasCollapsed}`
          );
          carryBus.registerCarry(this.state.carry, `Unit${this.unitNumber - 1}`);
        } else {
          this.state.currentSymbol = SYMBOL_SEQUENCE[currentIndex];
          console.log(
            `unit5 Pull: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: -1`
          );
        }
        this.state.pushes.push(this.state.currentSymbol);
      }
      
      this.state.pushesLength = this.state.pushes.length;
      console.log(`unit5 Pull End: pushesLength=${this.state.pushesLength}`);
    }
  }

  class Unit6Pull extends Unit6 {
    pull(count, carryBus) {
      console.log(`unit6 Pull Start: times=${count}, currentSymbol=${this.state.currentSymbol}`);
      
      let currentIndex = this.state.currentSymbol && this.state.currentSymbol !== VOID_SYMBOL
        ? SYMBOL_SEQUENCE.indexOf(this.state.currentSymbol)
        : 0;
      
      for (let i = 0; i < count; i++) {
        currentIndex = (currentIndex - 1);
        if (currentIndex < 0) {
          this.state.currentSymbol = SYMBOL_SEQUENCE[10]; // Set to ♤ (10) temporarily
          this.state.carry = -1; // Register a borrow
          this.state.hasCollapsed = true;
          console.log(
            `unit6 Pull: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: -1`
          );
          console.log(
            `unit6 Borrow: CARRY: ${this.state.carry} COLLAPSED: ${this.state.hasCollapsed}`
          );
          carryBus.registerCarry(this.state.carry, `Unit${this.unitNumber - 1}`);
        } else {
          this.state.currentSymbol = SYMBOL_SEQUENCE[currentIndex];
          console.log(
            `unit6 Pull: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: -1`
          );
        }
        this.state.pushes.push(this.state.currentSymbol);
      }
      
      this.state.pushesLength = this.state.pushes.length;
      console.log(`unit6 Pull End: pushesLength=${this.state.pushesLength}`);
    }
  }

  class Unit7Pull extends Unit7 {
    pull(count, carryBus) {
      console.log(`unit7 Pull Start: times=${count}, currentSymbol=${this.state.currentSymbol}`);
      
      let currentIndex = this.state.currentSymbol && this.state.currentSymbol !== VOID_SYMBOL
        ? SYMBOL_SEQUENCE.indexOf(this.state.currentSymbol)
        : 0;
      
      for (let i = 0; i < count; i++) {
        currentIndex = (currentIndex - 1);
        if (currentIndex < 0) {
          this.state.currentSymbol = SYMBOL_SEQUENCE[10]; // Set to ♤ (10) temporarily
          this.state.carry = -1; // Register a borrow
          this.state.hasCollapsed = true;
          console.log(
            `unit7 Pull: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: -1`
          );
          console.log(
            `unit7 Borrow: CARRY: ${this.state.carry} COLLAPSED: ${this.state.hasCollapsed}`
          );
          carryBus.registerCarry(this.state.carry, `Unit${this.unitNumber - 1}`);
        } else {
          this.state.currentSymbol = SYMBOL_SEQUENCE[currentIndex];
          console.log(
            `unit7 Pull: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: -1`
          );
        }
        this.state.pushes.push(this.state.currentSymbol);
      }
      
      this.state.pushesLength = this.state.pushes.length;
      console.log(`unit7 Pull End: pushesLength=${this.state.pushesLength}`);
    }
  }

  class Unit8Pull extends Unit8 {
    pull(count, carryBus) {
      console.log(`unit8 Pull Start: times=${count}, currentSymbol=${this.state.currentSymbol}`);
      
      let currentIndex = this.state.currentSymbol && this.state.currentSymbol !== VOID_SYMBOL
        ? SYMBOL_SEQUENCE.indexOf(this.state.currentSymbol)
        : 0;
      
      for (let i = 0; i < count; i++) {
        currentIndex = (currentIndex - 1);
        if (currentIndex < 0) {
          this.state.currentSymbol = SYMBOL_SEQUENCE[10]; // Set to ♤ (10) temporarily
          this.state.carry = -1; // Register a borrow
          this.state.hasCollapsed = true;
          console.log(
            `unit8 Pull: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: -1`
          );
          console.log(
            `unit8 Borrow: CARRY: ${this.state.carry} COLLAPSED: ${this.state.hasCollapsed}`
          );
          carryBus.registerCarry(this.state.carry, `Unit${this.unitNumber - 1}`);
        } else {
          this.state.currentSymbol = SYMBOL_SEQUENCE[currentIndex];
          console.log(
            `unit8 Pull: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: -1`
          );
        }
        this.state.pushes.push(this.state.currentSymbol);
      }
      
      this.state.pushesLength = this.state.pushes.length;
      console.log(`unit8 Pull End: pushesLength=${this.state.pushesLength}`);
    }
  }

  class Unit9Pull extends Unit9 {
    pull(count, carryBus) {
      console.log(`unit9 Pull Start: times=${count}, currentSymbol=${this.state.currentSymbol}`);
      
      let currentIndex = this.state.currentSymbol && this.state.currentSymbol !== VOID_SYMBOL
        ? SYMBOL_SEQUENCE.indexOf(this.state.currentSymbol)
        : 0;
      
      for (let i = 0; i < count; i++) {
        currentIndex = (currentIndex - 1);
        if (currentIndex < 0) {
          this.state.currentSymbol = SYMBOL_SEQUENCE[10]; // Set to ♤ (10) temporarily
          this.state.carry = -1; // Register a borrow
          this.state.hasCollapsed = true;
          console.log(
            `unit9 Pull: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: -1`
          );
          console.log(
            `unit9 Borrow: CARRY: ${this.state.carry} COLLAPSED: ${this.state.hasCollapsed}`
          );
          carryBus.registerCarry(this.state.carry, `Unit${this.unitNumber - 1}`);
        } else {
          this.state.currentSymbol = SYMBOL_SEQUENCE[currentIndex];
          console.log(
            `unit9 Pull: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: -1`
          );
        }
        this.state.pushes.push(this.state.currentSymbol);
      }
      
      this.state.pushesLength = this.state.pushes.length;
      console.log(`unit9 Pull End: pushesLength=${this.state.pushesLength}`);
    }
  }

  class Unit10Pull extends Unit10 {
    pull(count, carryBus) {
      console.log(`unit10 Pull Start: times=${count}, currentSymbol=${this.state.currentSymbol}`);
      
      let currentIndex = this.state.currentSymbol && this.state.currentSymbol !== VOID_SYMBOL
        ? SYMBOL_SEQUENCE.indexOf(this.state.currentSymbol)
        : 0;
      
      for (let i = 0; i < count; i++) {
        currentIndex = (currentIndex - 1);
        if (currentIndex < 0) {
          this.state.currentSymbol = SYMBOL_SEQUENCE[10]; // Set to ♤ (10) temporarily
          this.state.carry = -1; // Register a borrow
          this.state.hasCollapsed = true;
          console.log(
            `unit10 Pull: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: -1`
          );
          console.log(
            `unit10 Borrow: CARRY: ${this.state.carry} COLLAPSED: ${this.state.hasCollapsed}`
          );
          carryBus.registerCarry(this.state.carry, `Unit${this.unitNumber - 1}`);
        } else {
          this.state.currentSymbol = SYMBOL_SEQUENCE[currentIndex];
          console.log(
            `unit10 Pull: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: -1`
          );
        }
        this.state.pushes.push(this.state.currentSymbol);
      }
      
      this.state.pushesLength = this.state.pushes.length;
      console.log(`unit10 Pull End: pushesLength=${this.state.pushesLength}`);
    }
  }

  class Unit11Pull extends Unit11 {
    pull(count, carryBus) {
      console.log(`unit11 Pull Start: times=${count}, currentSymbol=${this.state.currentSymbol}`);
      
      let currentIndex = this.state.currentSymbol && this.state.currentSymbol !== VOID_SYMBOL
        ? SYMBOL_SEQUENCE.indexOf(this.state.currentSymbol)
        : 0;
      
      for (let i = 0; i < count; i++) {
        currentIndex = (currentIndex - 1);
        if (currentIndex < 0) {
          this.state.currentSymbol = SYMBOL_SEQUENCE[10]; // Set to ♤ (10) temporarily
          this.state.carry = -1; // Register a borrow
          this.state.hasCollapsed = true;
          console.log(
            `unit11 Pull: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: -1`
          );
          console.log(
            `unit11 Borrow: CARRY: ${this.state.carry} COLLAPSED: ${this.state.hasCollapsed}`
          );
          carryBus.registerCarry(this.state.carry, `Unit${this.unitNumber - 1}`);
        } else {
          this.state.currentSymbol = SYMBOL_SEQUENCE[currentIndex];
          console.log(
            `unit11 Pull: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: -1`
          );
        }
        this.state.pushes.push(this.state.currentSymbol);
      }
      
      this.state.pushesLength = this.state.pushes.length;
      console.log(`unit11 Pull End: pushesLength=${this.state.pushesLength}`);
    }
  }

  class Unit12Pull extends Unit12 {
    pull(count, carryBus) {
      console.log(`unit12 Pull Start: times=${count}, currentSymbol=${this.state.currentSymbol}`);
      
      let currentIndex = this.state.currentSymbol && this.state.currentSymbol !== VOID_SYMBOL
        ? SYMBOL_SEQUENCE.indexOf(this.state.currentSymbol)
        : 0;
      
      for (let i = 0; i < count; i++) {
        currentIndex = (currentIndex - 1);
        if (currentIndex < 0) {
          this.state.currentSymbol = SYMBOL_SEQUENCE[10]; // Set to ♤ (10) temporarily
          this.state.carry = -1; // Register a borrow
          this.state.hasCollapsed = true;
          console.log(
            `unit12 Pull: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: -1`
          );
          console.log(
            `unit12 Borrow: CARRY: ${this.state.carry} COLLAPSED: ${this.state.hasCollapsed}`
          );
          carryBus.registerCarry(this.state.carry, `Unit${this.unitNumber - 1}`);
        } else {
          this.state.currentSymbol = SYMBOL_SEQUENCE[currentIndex];
          console.log(
            `unit12 Pull: SYMBOL: ${this.state.currentSymbol} CARRY: ${this.state.carry} DIRECTION: -1`
          );
        }
        this.state.pushes.push(this.state.currentSymbol);
      }
      
      this.state.pushesLength = this.state.pushes.length;
      console.log(`unit12 Pull End: pushesLength=${this.state.pushesLength}`);
    }
  }

  return {
    Unit1: Unit1Pull,
    Unit2: Unit2Pull,
    Unit3: Unit3Pull,
    Unit4: Unit4Pull,
    Unit5: Unit5Pull,
    Unit6: Unit6Pull,
    Unit7: Unit7Pull,
    Unit8: Unit8Pull,
    Unit9: Unit9Pull,
    Unit10: Unit10Pull,
    Unit11: Unit11Pull,
    Unit12: Unit12Pull
  };
}