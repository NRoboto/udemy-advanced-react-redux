import { saveComment } from "actions";
import { SAVE_COMMENT } from "actions/types";

describe("saveComment", () => {
  test("Has the correct type", () => {
    const action = saveComment();

    expect(action.type).toBe(SAVE_COMMENT);
  });

  test("Has the correct payload", () => {
    const action = saveComment("New Comment");
    expect(action.payload).toBe("New Comment");
  });
});
