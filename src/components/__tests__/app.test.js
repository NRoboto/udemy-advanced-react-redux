import React from "react";
import { shallow } from "enzyme";
import { App } from "components/app";
import { CommentBox } from "components/commentBox";
import { CommentList } from "components/commentList";

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

test("Shows a comment box", () => {
  expect(wrapped.find(CommentBox).length).toBe(1);
});

test("Shows a comment list", () => {
  expect(wrapped.find(CommentList).length).toBe(1);
});
