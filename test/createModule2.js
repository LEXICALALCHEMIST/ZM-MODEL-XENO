// ZMXENO/test/createModule2.js
import SkeletonInitializer from '../MorphLogic/SkeletonInitializer.js';
import PullModule from '../MorphLogic/PullModule.js';  // ← PULL instead of PUSH
import { SYMBOL_SEQUENCE, VOID_SYMBOL } from '../core/sacred9.js';

console.log('ZMXENO — PULLMODULE : LOADED\n');

async function modulePull(imprint) {
  console.log(`Running pull test: ${imprint.a} - ${imprint.b}`);

  const skeleton = new SkeletonInitializer();
  await skeleton.set(imprint.a, true);

  const pullModule = new PullModule(skeleton);
  const state = await pullModule.pull(imprint.b);

  const display = state.units.map(u => u.currentSymbol).join('');
  console.log(`Skeleton: <${display.slice(0,4)}|${display.slice(4,8)}|${display.slice(8,12)}>`);
  console.log(`Length: ${state.numberLength} | Target: ${state.activeUnitTarget}`);

  // Reconstruct value for verification
  let value = 0;
  for (let i = 0; i < state.numberLength; i++) {
    value = value * 10 + SYMBOL_SEQUENCE.indexOf(state.units[i].currentSymbol);
  }

  const expected = imprint.a - imprint.b;
  const passed = value === expected;

  console.log(`Reconstructed value: ${value} (expected ${expected})`);
  console.log(`Result: ${passed ? 'PASS' : 'FAIL'}\n`);

  if (passed) {
    console.log('ZMXENO PULL MODULE — SACRED AND TRUE');
  }
}

// Example imprint — replace with your real one
const testImprint = {
  a: 550,
  b: 50
};

modulePull(testImprint);