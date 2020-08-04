export interface ITodo {
  id: string;
  desc: string;
  isComplete: boolean;
}

export interface IState {
  todos: ITodo[];
  selectedTodo: string | null;
  counter: number;
}
