import { xConcat } from './concat';

import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<xConcat<[], []>, []>>,
  Expect<Equal<xConcat<[], [1]>, [1]>>,
  Expect<Equal<xConcat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<
    Equal<
      xConcat<['1', 2, '3'], [false, boolean, '4']>,
      ['1', 2, '3', false, boolean, '4']
    >
  >
];
