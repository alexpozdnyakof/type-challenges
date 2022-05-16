import { xReadonly } from '../easy/readonly/readonly';

type IsObject<T> = T extends { [key: string]: any } ? true : false;

export type DeepReadonly<T> = {
  readonly [K in keyof T]: IsObject<T[K]> extends true ? xReadonly<T[K]> : T[K];
};
