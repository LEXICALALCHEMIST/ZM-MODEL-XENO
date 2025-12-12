// ZMXENO/gate/matrix.js — PHASE 1: INITIALIZE

// MATRIX IS THE SHAPE MACHINE THAT RESOLES INTENT SUCH AS 1+3 AS SET 1 INTENT: PUSH : 1 -> > > 3 > 4


import SkeletonInitializer from '../MorphLogic/SkeletonInitializer.js';
import { phaser } from './phaser/phaser.js';

export class Matrix {
  constructor() {
    this.skeletons = new Map();
  }

  async initialize(appId = "test") {
    phaser.begin("INITIALIZE", { appId });

    let skeleton = this.skeletons.get(appId);
    if (skeleton) {
      phaser.end();
      return skeleton;
    }

    skeleton = new SkeletonInitializer();
    await skeleton.set(0, true);

    this.skeletons.set(appId, skeleton);
    phaser.snap(skeleton).end();

    return skeleton;
  }
}