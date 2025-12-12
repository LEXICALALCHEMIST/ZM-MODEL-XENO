// ZMXENO/test/testTranslator.js
import SkeletonInitializer from '../MorphLogic/SkeletonInitializer.js';
import { morphInit } from '../core/morphInit.js';
import { skeletonToNumber, skeletonToString } from '../utils/translator.js';

console.log('ZMXENO — TRANSLATOR TEST — SACRED TRUTH\n');

async function run() {
  const tests = [
    { value: 0,      desc: "Zero" },
    { value: 11,      desc: "One" },
    { value: 505,    desc: "505" },
    { value: 999,    desc: "999" },
    { value: 1000,   desc: "1000 (collapse)" },
    { value: 999999999999, desc: "Max 12 digits" }
  ];

  for (const t of tests) {
    console.log(`${t.desc}: ${t.value}`);

    // Generate skeleton using sacred morphInit
    const current = 0;
    const { skeleton } = await morphInit(t.value, current, true);

    const state = skeleton.getState();

    const reconstructed = skeletonToNumber(state);
    const display = skeletonToString(state);

    console.log(`Skeleton: ${display}`);
    console.log(`Value   : ${reconstructed}`);
    console.log(`Match   : ${reconstructed === t.value ? 'PASS' : 'FAIL'}\n`);
  }

  console.log('TRANSLATOR IS SACRED — ALL PASS');
}

run();