import { xParameters } from './parameters';

const repeatString = (a: string, b: number): string => a.repeat(b);

const parameters: xParameters<typeof repeatString> = ['hello', 3];
