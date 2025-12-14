// ZMXENO/test/testModulePhase.js
import { Imprint } from '../gate/imprint.js';
import { modulePhase } from '../gate/phaser/modulePhase.js';

console.log('ZMXENO — MODULE PHASE TEST\n');

const testImprint = Imprint({
  app: "calculator",
  intent: "add",
  a: 500,
  b: 50
});

// Feed the imprint to the module phase
modulePhase(testImprint.intent);

console.log('\nTEST COMPLETE — MODULE PHASE LOGGED');