import React from "react";
import { mount } from "enzyme";
import { CommentBox } from "components/commentBox";
import { Root } from "root";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

test("Has a text area and two buttons", () => {
  expect(wrapped.find("textarea").length).toBe(1);
  expect(wrapped.find("button").length).toBe(2);
});

describe("Text area", () => {
  beforeEach(() => {
    wrapped.find("textarea").simulate("change", {
      target: {
        value: "new comment",
      },
    });

    wrapped.update();
  });

  test("User can enter text", () => {
    expect(wrapped.find("textarea").prop("value")).toBe("new comment");
  });

  test("When form is submitted, gets emptied", () => {
    wrapped.find("form").simulate("submit");
    wrapped.update();
    expect(wrapped.find("textarea").prop("value")).toBe("");
  });
});
