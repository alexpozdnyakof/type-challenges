export type LookUp<T, U extends string> = T extends { type: U } ? T : never;
