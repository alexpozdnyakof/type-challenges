import type { Equal, Expect } from '@type-challenges/utils';
import { Pop } from './pop';

type arr1 = ['a', 'b', 'c', 'd'];
type arr2 = [3, 2, 1];

type Cases = [
  Expect<Equal<Pop<arr1>, ['a', 'b', 'c']>>,
  Expect<Equal<Pop<arr2>, [3, 2]>>
];
