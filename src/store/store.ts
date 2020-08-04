import {
  configureStore,
  getDefaultMiddleware,
  compose,
  applyMiddleware,
} from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";

export default function configureAppStore() {
  //   const composeEnhancers =
  //     (window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose) ||
  //     compose;

  const composeEnhancers = composeWithDevTools(applyMiddleware(compose));
  // const composeEnhancers = [compose]

  const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware()],
    enhancers: [composeEnhancers],
  });

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./reducers/rootReducer", () => {
      const newRootReducer = require("./reducers/rootReducer").default;
      store.replaceReducer(newRootReducer);
    });
  }

  return store;
}
