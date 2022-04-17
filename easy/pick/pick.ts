export type xPick<K, T extends keyof K> = Record<T, K[T]>;
