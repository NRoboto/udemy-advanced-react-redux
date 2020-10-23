import React from "react";
import { mount } from "enzyme";
import { CommentList } from "components/commentList";
import { Root } from "root";

const initialState = {
  comments: ["Comment A", "Comment B", "Comment C"],
};

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

test("Creates one li per comment", () => {
  expect(wrapped.find("li").length).toBe(3);
});

test("Shows the text for each comment", () => {
  const text = wrapped.render().text();
  expect(text).toContain("Comment A");
  expect(text).toContain("Comment B");
  expect(text).toContain("Comment C");
});
