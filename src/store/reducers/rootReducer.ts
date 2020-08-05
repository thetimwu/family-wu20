import { combineReducers } from "@reduxjs/toolkit";
import {
  todoReducer,
  selectedTodoReducer,
  counterReducer,
} from "./todoReducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  selectedTodo: selectedTodoReducer,
  conter: counterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
