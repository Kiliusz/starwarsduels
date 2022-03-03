import { fireEvent, render, screen } from "@testing-library/react";
import GameNavButtons from "./GameNavButtons";

const backAction = jest.fn();
const duelAction = jest.fn();

describe("testing game nav buttons", () => {
  it("should renders 2 buttons", () => {
    render(<GameNavButtons backAction={backAction} duelAction={duelAction} />);
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(2);
  });

  it("should fire calls onClick props when clicked", () => {
    render(<GameNavButtons backAction={backAction} duelAction={duelAction} />);
    const button = screen.getByRole("button", { name: "Back" });
    fireEvent.click(button);
    expect(backAction).toHaveBeenCalledTimes(1);
  });
});
