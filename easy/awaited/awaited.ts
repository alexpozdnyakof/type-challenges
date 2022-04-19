export type xAwaited<T> = T extends Promise<infer U> ? xAwaited<U> : T;
