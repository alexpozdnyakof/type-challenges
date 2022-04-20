export type Includes<T extends Array<any>, U> = U extends T[number]
  ? true
  : false;
