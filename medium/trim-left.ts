export type TrimLeft<T extends string> = T extends `${
  | ' '
  | '\n'
  | '\t'}${infer U}`
  ? TrimLeft<U>
  : T;
