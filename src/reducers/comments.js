import { SAVE_COMMENT, FETCH_COMMENTS } from "actions/types";

export const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload, {}];
    case FETCH_COMMENTS:
      const newComments = action.payload.data.map((comment) => comment.name);
      return [...state, ...newComments];
    default:
      return state;
  }
};
