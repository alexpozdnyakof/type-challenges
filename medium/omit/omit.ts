import { xExclude } from '../../easy/exclude/exclude';
import { xPick } from '../../easy/pick/pick';

export type xOmit<T, K extends keyof T> = xPick<T, xExclude<keyof T, K>>;
