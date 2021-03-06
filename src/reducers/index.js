import { combineReducers } from "redux-immutable";
import todos from "../reducers/todos";
import filter from "../reducers/filter";
import text from "../reducers/text";

export default combineReducers({
  todos,
  filter,
  text
});
