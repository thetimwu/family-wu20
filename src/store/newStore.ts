import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  todoSlice,
  selectTodoSlice,
  counterSlice,
} from "../features/todo/todoSlice";

export default function configureAppStore() {
  const rootReducer = {
    todo: todoSlice.reducer,
    selectTodo: selectTodoSlice.reducer,
    counter: counterSlice.reducer,
  };

  const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware()],
    devTools: process.env.NODE_ENV !== "production",
  });

  //may add hot reloading

  return store;
}
