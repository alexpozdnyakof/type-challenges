// type xReadonly<T> = Record<keyof T, T[keyof T]>
export type xReadonly<T> = {
  readonly [P in keyof T]: T[P];
};
