import type { Equal, Expect } from '@type-challenges/utils';
import type { xFirst } from './first-of-array';
type cases = [
  Expect<Equal<xFirst<[3, 2, 1]>, 3>>,
  Expect<Equal<xFirst<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<xFirst<[]>, never>>,
  Expect<Equal<xFirst<[undefined]>, undefined>>
];

type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>
];
