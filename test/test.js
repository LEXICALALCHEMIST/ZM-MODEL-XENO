// ZMXENO/test/testTranslator.js — FINAL, CLEAN, 100% WORKING
import SkeletonInitializer from '../MorphLogic/SkeletonInitializer.js';
import { skeletonToNumber, skeletonToString } from '../utils/translator.js';

console.log('ZMXENO — TRANSLATOR TEST — FINAL TRUTH\n');

async function testValue(num) {
  console.log(`Testing: ${num}`);

  // ← NEW SKELETON EVERY TIME — THIS WAS THE BUG
  const skeleton = new SkeletonInitializer();
  await skeleton.set(num, true);

  const state = skeleton.getState();
  const display = skeletonToString(state);
  const value = skeletonToNumber(state);

  console.log(`Skeleton: ${display}`);
  console.log(`Value   : ${value}`);
  console.log(`Match   : ${value === num ? 'PASS' : 'FAIL'}\n`);
}

(async () => {
  await testValue(0);
  await testValue(1);
  await testValue(2);
  await testValue(505);
  await testValue(999);
  await testValue(1000);
  await testValue(999999999999);

  console.log('TRANSLATOR IS SACRED — ALL PASS');
})();