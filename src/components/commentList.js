import React from "react";
import { useSelector } from "react-redux";

export const CommentList = () => {
  const comments = useSelector((state) => state.comments);

  const renderComments = () =>
    comments.map((comment) => <li key={comment}>{comment}</li>);

  return (
    <div>
      <h4>Comment List</h4>
      <ul>{renderComments()}</ul>
    </div>
  );
};
