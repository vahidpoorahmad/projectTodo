import { createStore } from "redux";
import ItemsReducer from "./ReduxItems/ItemsReducer";

import TaskReducer from "./ReduxTasks/TaskReducer";

import { combineReducers } from "redux";
const reducer = combineReducers({
  ItemReducer: ItemsReducer,
  TaskReducer: TaskReducer,
});

export const store = createStore(reducer);
