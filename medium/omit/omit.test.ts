import { xOmit } from './omit';

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = xOmit<Todo, 'description' | 'title'>;

const todo: TodoPreview = {
  completed: false,
};
