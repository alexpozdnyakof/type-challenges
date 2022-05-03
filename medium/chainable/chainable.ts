export type Chainable<Result = {}> = {
  option<K extends string, V>(
    key: K,
    value: V
  ): Chainable<Result & { [T in K]: V }>;
  get: () => Result;
};
