// ZMXENO/core/morphinit.js
import Skeleton from '../skeleton/Skeleton.js';
import KeyMaker from '../key/KeyMaker.js';
import ShiftKey from '../key/ShiftKey.js';
import { S9, VOID } from './sacred9.js';

export async function morphInit(value, current = 0, push = true) {
  const vLen = value.toString().length;
  const cLen = current.toString().length;

  const skeletonVal = vLen > cLen ? value : current;
  const keyVal = vLen > cLen ? current : value;

  const skeleton = new Skeleton();
  await skeleton.set(skeletonVal, push);

  const key = new ShiftKey().shift(new KeyMaker().make(keyVal), skeleton.length);

  return { skeleton, key };
}