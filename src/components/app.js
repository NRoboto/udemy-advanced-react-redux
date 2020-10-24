import React from "react";
import { Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CommentBox } from "components/commentBox";
import { CommentList } from "components/commentList";
import * as actions from "actions";

export const App = () => {
  const isSignedIn = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const renderButton = () => (
    <button onClick={() => dispatch(actions.changeAuth(!isSignedIn))}>
      {isSignedIn ? "Sign Out" : "Sign In"}
    </button>
  );

  const renderHeader = () => (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/post">Post a Comment</Link>
      </li>
      <li>{renderButton()}</li>
    </ul>
  );

  return (
    <div>
      {renderHeader()}
      <Route path="/post" component={CommentBox} />
      <Route path="/" exact component={CommentList} />
    </div>
  );
};
