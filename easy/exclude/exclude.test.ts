import { xPick } from '../pick/pick';
import { xExclude } from './exclude';

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = xPick<Todo, xExclude<keyof Todo, 'title' | 'completed'>>;

const todo: TodoPreview = {
  description: 'Clean room',
};
