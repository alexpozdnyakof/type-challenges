import { xAwaited } from './awaited';
import type { Equal, Expect } from '@type-challenges/utils';

type X = Promise<string>;
type Y = Promise<{ field: number }>;
type Z = Promise<Promise<string | number>>;

type cases = [
  Expect<Equal<xAwaited<X>, string>>,
  Expect<Equal<xAwaited<Y>, { field: number }>>,
  Expect<Equal<xAwaited<Z>, string | number>>
];

// @ts-expect-error
type error = MyAwaited<number>;
