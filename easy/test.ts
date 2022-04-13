import { xPick } from './pick';

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = xPick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
};
