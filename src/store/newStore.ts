import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  todoSlice,
  selectTodoSlice,
  counterSlice,
} from "../features/todo/todoSlice";
import { projectSlice } from "../features/project/projectSlice";
import { authSlice } from "../features/auth/authSlice";
import { constants as rfConstants } from "redux-firestore";
import {
  getFirebase,
  actionTypes as rrfActionTypes,
} from "react-redux-firebase";
import { ThunkAction } from "redux-thunk";
// import rootReducer from "./reducers/rootReducer";

export default function configureAppStore() {
  const extraArgument = {
    getFirebase,
  };

  const rootReducer = {
    todos: todoSlice.reducer,
    selectTodo: selectTodoSlice.reducer,
    counter: counterSlice.reducer,
    projects: projectSlice.reducer,
    auth: authSlice.reducer,
  };

  const store = configureStore({
    reducer: rootReducer,
    middleware: [
      ...getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [
            // just ignore every redux-firebase and react-redux-firebase action type
            ...Object.keys(rfConstants.actionTypes).map(
              (type) => `${rfConstants.actionsPrefix}/${type}`
            ),
            ...Object.keys(rrfActionTypes).map(
              (type) => `@@reactReduxFirebase/${type}`
            ),
          ],
          ignoredPaths: ["firebase", "firestore"],
        },
        thunk: {
          extraArgument,
        },
      }),
    ],
    devTools: process.env.NODE_ENV !== "production",
  });

  //may add hot reloading

  return store;
}
