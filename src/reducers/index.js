import { combineReducers } from "redux";
import { commentsReducer } from "reducers/comments";
import { authReducer } from "reducers/auth";

export const reducers = combineReducers({
  comments: commentsReducer,
  auth: authReducer,
});
