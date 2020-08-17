import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  todoSlice,
  selectTodoSlice,
  counterSlice,
} from "../features/todo/todoSlice";
import { projectSlice } from "../features/project/projectSlice";

export default function configureAppStore() {
  const rootReducer = {
    todos: todoSlice.reducer,
    selectTodo: selectTodoSlice.reducer,
    counter: counterSlice.reducer,
    projects: projectSlice.reducer,
  };

  const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware()],
    devTools: process.env.NODE_ENV !== "production",
  });

  //may add hot reloading

  return store;
}
