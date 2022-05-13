type TrimLeft<T extends string> = T extends `${' ' | '\n' | '\t'}${infer U}`
  ? TrimLeft<U>
  : T;

type Trimed = TrimLeft<'  Hello World  '>; // expected to be 'Hello World  '

export type { TrimLeft };
