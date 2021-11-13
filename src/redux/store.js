import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import { post } from "./reducers/post.reducer";
import { list } from "./reducers/list.reducer";
import { albums } from "./reducers/albums.reducer";
import thunk from "redux-thunk";

const logger = createLogger({
   collapsed: true
});

const store = createStore(
   combineReducers({
      post,
      list,
      albums
   }),
   applyMiddleware(thunk, logger)
);

export default store;