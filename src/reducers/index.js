import { combineReducers } from "redux";
import { commentsReducer } from "reducers/comments";

export const reducers = combineReducers({
  comments: commentsReducer,
});
