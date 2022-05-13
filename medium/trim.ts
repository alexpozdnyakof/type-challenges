import { TrimLeft } from './trim-left';

type TrimTail<T extends string> = T extends `${infer U}${' ' | '\n' | '\t'}`
  ? TrimTail<U>
  : T;

type Trim<T extends string> = TrimLeft<TrimTail<T>>;

type Trimmed = Trim<'  Hello World  '>;
