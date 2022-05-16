import type { Equal, Expect } from '@type-challenges/utils';
import { xReturnType } from './return-type';

type cases = [
  Expect<Equal<string, xReturnType<() => string>>>,
  Expect<Equal<123, xReturnType<() => 123>>>,
  Expect<Equal<ComplexObject, xReturnType<() => ComplexObject>>>,
  Expect<Equal<Promise<boolean>, xReturnType<() => Promise<boolean>>>>,
  Expect<Equal<() => 'foo', xReturnType<() => () => 'foo'>>>,
  Expect<Equal<1 | 2, xReturnType<typeof fn>>>,
  Expect<Equal<1 | 2, xReturnType<typeof fn1>>>
];

type ComplexObject = {
  a: [12, 'foo'];
  bar: 'hello';
  prev(): number;
};

const fn = (v: boolean) => (v ? 1 : 2);
const fn1 = (v: boolean, w: any) => (v ? 1 : 2);
