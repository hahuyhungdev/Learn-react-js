import { render, screen,within } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  //test "render post if request succeeds and check all role listitem have length not 0"
    test("render post if request succeeds and check all role listitem have length not 0", async () => {
        const { findAllByRole } = render(<Async />);
        const postList = await findAllByRole("listitem");
        expect(postList).not.toHaveLength(0);
        });
 
});
