import { v1 as uuid } from "uuid";
import { ITodo } from "../../components/todos/type";
import {
  TodoActionTypes,
  SelectedTodoActionTypes,
  CREATE_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  SELECT_TODO,
} from "../actions/types";

const todoInit = [
  {
    id: uuid(),
    desc: "learn redux",
    isComplete: false,
  },
  {
    id: uuid(),
    desc: "learn typescrpt",
    isComplete: true,
  },
  {
    id: uuid(),
    desc: "learn redux",
    isComplete: false,
  },
];

export const todoReducer = (
  state: ITodo[] = todoInit,
  action: TodoActionTypes
) => {
  switch (action.type) {
    case CREATE_TODO: {
      return [...state, action.payload];
    }
    case EDIT_TODO: {
      const { payload } = action;
      return state.map((todo) =>
        todo.id === payload.id ? { ...todo, desc: payload.desc } : todo
      );
    }
    case TOGGLE_TODO: {
      const { payload } = action;
      return state.map((todo) =>
        todo.id === payload.id
          ? { ...todo, isComplete: payload.isComplete }
          : todo
      );
    }
    case DELETE_TODO: {
      const { payload } = action;
      return state.filter((todo) => todo.id !== payload.id);
    }
    default: {
      return state;
    }
  }
};

export const selectedTodoReducer = (
  state: string | null = null,
  action: SelectedTodoActionTypes
) => {
  switch (action.type) {
    case SELECT_TODO: {
      const { payload } = action;
      return payload.id;
    }
    default: {
      return state;
    }
  }
};

export const counterReducer = (state: number = 0, action: TodoActionTypes) => {
  switch (action.type) {
    case CREATE_TODO: {
      return state + 1;
    }
    case EDIT_TODO: {
      return state + 1;
    }
    case TOGGLE_TODO: {
      return state + 1;
    }
    default: {
      return state;
    }
  }
};
