import { xOmit } from './omit';

export type xReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P];
} & xOmit<T, K>;
