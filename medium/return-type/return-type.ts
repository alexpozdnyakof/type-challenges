export type xReturnType<T> = T extends (args) => infer R ? R : never;
