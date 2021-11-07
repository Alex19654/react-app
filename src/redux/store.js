import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import { description } from "./reducers/description.reducer";
import { text } from "./reducers/text.reducer";
import { list } from "./reducers/list.reducer";

const logger = createLogger({
   collapsed: true
});

const store = createStore(
   combineReducers({
      description,
      text,
      list
   }),
   applyMiddleware(logger)
);

export default store;