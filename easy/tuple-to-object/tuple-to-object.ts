import { xReadonly } from '../readonly/readonly';

export type xTupleToObject<T extends Readonly<Array<string | number>>> = Record<
  T[number],
  T[number]
>;
