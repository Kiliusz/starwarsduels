import { fireEvent, render, screen } from "@testing-library/react";
import axios from "axios";
import HeroesPage from "./Heroespage";

describe("testing heroespage integrity", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render a heading", async () => {
    render(<HeroesPage />);
    const nameHeader = screen.getByRole("heading", { name: /Hero Battle/i });
    expect(nameHeader).toBeInTheDocument();
  });

  it("should call axios after render,", async () => {
    jest.mock("axios");
    render(<HeroesPage />);
    expect(axios.get).toHaveBeenCalled();
  });

  it("should call axios after click next duel, and display Luke Skywalker in 2 cards", async () => {
    jest.mock("axios");

    render(<HeroesPage />);

    const duelButton = screen.getByRole("button", { name: /Next Duel/i });
    fireEvent.click(duelButton);
    const headerCardNames = await screen.findAllByRole("heading", {
      name: /skywalker/i,
    });
    expect(axios.get).toHaveBeenCalledTimes(4);
    expect(duelButton).toBeInTheDocument();
    expect(headerCardNames.length).toBe(2);
  });
});
