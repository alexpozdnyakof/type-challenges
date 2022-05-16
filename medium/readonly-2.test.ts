import type { Alike, Expect } from '@type-challenges/utils';
import { xReadonly2 } from './readonly-2';

interface Todo {
  title: string;
  description?: string;
  completed: boolean;
}

interface Todo2 {
  readonly title: string;
  description?: string;
  completed: boolean;
}

interface Expected {
  readonly title: string;
  readonly description?: string;
  completed: boolean;
}

type cases = [
  Expect<Alike<xReadonly2<Todo>, Readonly<Todo>>>,
  Expect<Alike<xReadonly2<Todo, 'title' | 'description'>, Expected>>,
  Expect<Alike<xReadonly2<Todo2, 'title' | 'description'>, Expected>>
];
