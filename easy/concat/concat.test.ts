import { xConcat } from './concat';

const arr1 = [1];
const arr2 = [2];
const arr3 = [3];

type Result = xConcat<typeof arr1, typeof arr2>; // expected to be [1, 2]

const result: Result = [1, 2];
