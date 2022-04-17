import { xReadonly } from './readonly';

interface Todo {
  title: string;
  description: string;
}

const todo: xReadonly<Todo> = {
  title: 'Hey',
  description: 'foobar',
};

todo.title = 'Hello'; // Error: cannot reassign a readonly property
todo.description = 'barFoo'; // Error: cannot reassign a readonly property
