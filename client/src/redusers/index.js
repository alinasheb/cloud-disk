import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import fileReduser from "./fileReducer";
import userReduser from "./userReducer";
import thunk from "redux-thunk";

const rootReduser = combineReducers({
  user: userReduser,
  files: fileReduser

} )

export const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)))