import { createStore, compose, applyMiddleware } from "redux";
import rootReducers from "./reducers";
import thunk from "redux-thunk";

const logger = (store) => {
  return (next) => {
    return (actions) => {
      console.log("[Middleware] Dispatched", actions);
      let result = next(actions);
      console.log("[Middleware] next state", store.getState());
      return result;
    };
  };
};
const configStore = (initialState) => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducers,
    initialState,
    composeEnhancers(applyMiddleware(thunk, logger))
  );
};

export default configStore;
