import { createStore, applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk"; //IMPORTANTE PARA PETICIONES

import reducers from "./reducers/indexReducers";

const configureStore = () => {
  return createStore(reducers, applyMiddleware(ThunkMiddleware));
};

export default configureStore;
