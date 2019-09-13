import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { postReducer, specialityReducer, teacherReducer, courseReducer, fragmentReducer } from "./reducers";

export default createStore(
  combineReducers({
    postReducer,
    specialityReducer,
    teacherReducer,
    courseReducer,
    fragmentReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
