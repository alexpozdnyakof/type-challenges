export type If<T extends boolean, X, Y> = T extends true ? X : Y;
