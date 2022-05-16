import type { Equal, Expect } from '@type-challenges/utils';
import { xPick } from './pick';

type cases = [
  Expect<Equal<Expected1, xPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, xPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  xPick<Todo, 'title' | 'completed' | 'invalid'>
];

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}
