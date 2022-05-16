import { xParameters } from './parameters';

import type { Equal, Expect } from '@type-challenges/utils';

const foo = (arg1: string, arg2: number): void => {};
const bar = (arg1: boolean, arg2: { a: 'A' }): void => {};
const baz = (): void => {};

type cases = [
  Expect<Equal<xParameters<typeof foo>, [string, number]>>,
  Expect<Equal<xParameters<typeof bar>, [boolean, { a: 'A' }]>>,
  Expect<Equal<xParameters<typeof baz>, []>>
];
