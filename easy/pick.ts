type xPick<K, T extends keyof K> = Record<T, K[T]>;


interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = xPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}