import type { Equal, Expect } from '@type-challenges/utils';
import { xOmit } from './omit';

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = xOmit<Todo, 'description' | 'title'>;

type Expected = { completed: boolean };

type Case = Expect<Equal<TodoPreview, Expected>>;
