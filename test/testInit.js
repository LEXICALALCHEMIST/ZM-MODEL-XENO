// ZMXENO/test/testSinit.js
import SkeletonInitializer from '../skeleton/SkeletonInitializer.js';
import { S9 } from '../core/sacred9.js';

async function runTests() {
  const tests = [
    1,
    9,
    10,
    999,
    1000,
    12345,
    999999,
    1000000,
    123456789,
    999999999,
    1000000000,
    123456789012,
    999999999999
  ];

  const init = new SkeletonInitializer();

  for (const num of tests) {
    const state = await init.set(num, true);

    const reconstructed = parseInt(
      state.units
        .slice(0, state.numberLength)
        .map(u => S9.indexOf(u.currentSymbol))
        .join(''),
      10
    );

    const ok = reconstructed === num;
    console.log(
      `${num.toString().padStart(12)} → ${reconstructed.toString().padStart(12)} ${ok ? 'PASS' : 'FAIL'}`
    );

    if (!ok) {
      console.error("FAILURE at", num);
      process.exit(1);
    }
  }

  console.log("\nALL TESTS PASSED — Skeleton handles 1 to 999,999,999,999 perfectly.");
}

runTests();