import { render, screen } from "@testing-library/react";
import GenericCard from "./GenericCard";

const mockedDataProps = {
  data: {
    name: "Yoda",
    height: "229",
    mass: "88",
    hair_color: "none",
    skin_color: "grey",
    eye_color: "black",
  },
  name: "Yoda",
  statistics: [{ key: "skin_color", label: "Skin Color" }],
  powerLabel: "Height",
  power: "height",
  loading: false,
};

describe("testing a generic card component", () => {
  it("should render a card name", () => {
    render(<GenericCard {...mockedDataProps} />);
    const nameHeader = screen.getByRole("heading", { name: "Yoda" });
    expect(nameHeader).toBeInTheDocument();
  });

  it("should render only given statistic", () => {
    render(<GenericCard {...mockedDataProps} />);
    const nameHeaders = screen.getAllByTestId(/stat/i);
    expect(nameHeaders.length).toBe(1);
  });

  it("should render spinner instead of a card", () => {
    render(<GenericCard {...{ ...mockedDataProps, loading: true }} />);
    const nameHeader = screen.queryByRole("heading", { name: "Yoda" });
    const spinner = screen.getByTestId("spinner");
    expect(nameHeader).not.toBeInTheDocument();
    expect(spinner).toBeInTheDocument();
  });
});
