// ZMXENO/morphlogic/modules/modulePush.js
import SkeletonInitializer from '../MorphLogic/SkeletonInitializer.js';
import PushModule from '../MorphLogic/PushModule.js';
import { SYMBOL_SEQUENCE, VOID_SYMBOL } from '../core/sacred9.js';

console.log('ZMXENO — PUSHMODULE : LOADED \n');

async function modulePush(imprint) {
  console.log(`Running push test: ${imprint.a} + ${imprint.b}`);

  const skeleton = new SkeletonInitializer();
  await skeleton.set(imprint.a, true);

  const pushModule = new PushModule(skeleton);
  const state = await pushModule.push(imprint.b);

  const display = state.units.map(u => u.currentSymbol).join('');
  console.log(`Skeleton: <${display.slice(0,4)}|${display.slice(4,8)}|${display.slice(8,12)}>`);
  console.log(`Length: ${state.numberLength} | Target: ${state.activeUnitTarget}`);

  // Reconstruct value for verification
  let value = 0;
  for (let i = 0; i < state.numberLength; i++) {
    value = value * 10 + SYMBOL_SEQUENCE.indexOf(state.units[i].currentSymbol);
  }

  const expected = imprint.a + imprint.b;
  const passed = value === expected;

  console.log(`Reconstructed value: ${value} (expected ${expected})`);
  console.log(`Result: ${passed ? 'PASS' : 'FAIL'}\n`);

  if (passed) {
    console.log('ZMXENO PUSH MODULE — SACRED AND TRUE');
  }
}

// Example imprint — replace with your real one
//const testImprint = {
 // a: 0,
 // b: 1
//};

modulePush(testImprint);