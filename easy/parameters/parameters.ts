export type xParameters<X> = X extends (...args: infer Y) => any ? Y : never;
