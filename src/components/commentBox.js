import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "actions";
import { requireAuth } from "components/requireAuth";

export const CommentBox = requireAuth(() => {
  const [comment, setComment] = React.useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(actions.saveComment(comment));

    setComment("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
      <button
        className="fetch-comments"
        onClick={() => dispatch(actions.fetchComments())}
      >
        Fetch Comments
      </button>
    </div>
  );
});
