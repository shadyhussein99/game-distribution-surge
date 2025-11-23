import React from "react";
import { render, screen } from "@testing-library/react";

jest.mock("@/src/store/useGamesStore", () => ({
  useGamesStore: jest.fn(),
}));

import { useGamesStore } from "@/src/store/useGamesStore";
import { ResultsCount } from "../ResultsCount";

const mockedUseGamesStore = useGamesStore as unknown as jest.Mock;

describe("ResultsCount", () => {
  afterEach(() => {
    mockedUseGamesStore.mockReset();
  });

  it("renders single game when there is a single result", () => {
    mockedUseGamesStore.mockReturnValue({
      getFilteredGames: () => [{ id: "1" }],
    });

    render(React.createElement(ResultsCount));

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(document.body.textContent).toMatch(/\bgame\b/i);
  });

  it("renders multiple games when there are multiple results", () => {
    mockedUseGamesStore.mockReturnValue({
      getFilteredGames: () => [{}, {}, {}],
    });

    render(React.createElement(ResultsCount));

    expect(screen.getByText("3")).toBeInTheDocument();
    expect(document.body.textContent).toMatch(/\bgames\b/i);
  });

  it("renders multiple games when there are multiple results", () => {
    mockedUseGamesStore.mockReturnValue({
      getFilteredGames: () => [{}, {}, {}],
    });

    render(React.createElement(ResultsCount));

    expect(screen.getByText("3")).toBeInTheDocument();
    expect(document.body.textContent).toMatch(/\bgames\b/i);
  });
});
