export type xTupleToObject<T extends readonly any[]> = {
  [key in T[number]]: key;
};
