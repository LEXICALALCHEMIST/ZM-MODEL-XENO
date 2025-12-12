// ZMXENO/test/testPhaserInit.js
import { Matrix } from '../gate/matrix.js';
import { phaser } from '../gate/phaser/phaser.js';

(async () => {
  console.log('ZMXENO — PHASER INITIALIZATION TEST\n');

  const matrix = new Matrix();
  await matrix.initialize("test-app");

  console.log('Full phase log:');
  console.log(phaser.log());

  phaser.reset();
})();