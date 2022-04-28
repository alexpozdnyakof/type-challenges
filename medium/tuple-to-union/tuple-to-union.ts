import { TupleToUnion } from './tuple-to-union.test';

const array = ['1', '2', '3', 4, 5];

type Test = TupleToUnion<typeof array>; // expected to be '1' | '2' | '3' | 4 | 5
