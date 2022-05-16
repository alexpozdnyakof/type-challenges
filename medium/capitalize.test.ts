import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<xCapitalize<'foobar'>, 'Foobar'>>,
  Expect<Equal<xCapitalize<'FOOBAR'>, 'FOOBAR'>>,
  Expect<Equal<xCapitalize<'foo bar'>, 'Foo bar'>>,
  Expect<Equal<xCapitalize<''>, ''>>,
  Expect<Equal<xCapitalize<'a'>, 'A'>>,
  Expect<Equal<xCapitalize<'b'>, 'B'>>,
  Expect<Equal<xCapitalize<'c'>, 'C'>>,
  Expect<Equal<xCapitalize<'d'>, 'D'>>,
  Expect<Equal<xCapitalize<'e'>, 'E'>>,
  Expect<Equal<xCapitalize<'f'>, 'F'>>,
  Expect<Equal<xCapitalize<'g'>, 'G'>>,
  Expect<Equal<xCapitalize<'h'>, 'H'>>,
  Expect<Equal<xCapitalize<'i'>, 'I'>>,
  Expect<Equal<xCapitalize<'j'>, 'J'>>,
  Expect<Equal<xCapitalize<'k'>, 'K'>>,
  Expect<Equal<xCapitalize<'l'>, 'L'>>,
  Expect<Equal<xCapitalize<'m'>, 'M'>>,
  Expect<Equal<xCapitalize<'n'>, 'N'>>,
  Expect<Equal<xCapitalize<'o'>, 'O'>>,
  Expect<Equal<xCapitalize<'p'>, 'P'>>,
  Expect<Equal<xCapitalize<'q'>, 'Q'>>,
  Expect<Equal<xCapitalize<'r'>, 'R'>>,
  Expect<Equal<xCapitalize<'s'>, 'S'>>,
  Expect<Equal<xCapitalize<'t'>, 'T'>>,
  Expect<Equal<xCapitalize<'u'>, 'U'>>,
  Expect<Equal<xCapitalize<'v'>, 'V'>>,
  Expect<Equal<xCapitalize<'w'>, 'W'>>,
  Expect<Equal<xCapitalize<'x'>, 'X'>>,
  Expect<Equal<xCapitalize<'y'>, 'Y'>>,
  Expect<Equal<xCapitalize<'z'>, 'Z'>>
];
