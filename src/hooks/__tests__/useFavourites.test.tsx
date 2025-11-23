import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react";
import { useFavourites } from "../useFavourites";
import { useFavouritesStore } from "@app-store/useFavouritesStore";
import type { Game } from "@app-types/index";

const sampleGame: Game = {
  id: "1",
  title: "Test Game",
  developer: "Tester",
  image: "/img.png",
  category: "arcade",
  iframeURL: "https://example.com",
};

function TestComponent() {
  const { favouriteItems, loading, handleFavourites } = useFavourites();

  React.useEffect(() => {
    (globalThis as any).__lastHandle = handleFavourites;
  }, [handleFavourites]);

  return React.createElement(
    "div",
    null,
    React.createElement("span", { "data-testid": "loading" }, String(loading)),
    React.createElement(
      "span",
      { "data-testid": "count" },
      String(favouriteItems.length)
    )
  );
}

describe("useFavourites", () => {
  beforeEach(() => {
    act(() => {
      useFavouritesStore.setState({ favouriteGames: [] });
    });

    delete (globalThis as any).__lastHandle;
  });

  it("starts loading and then updates favouriteItems from the store", async () => {
    act(() => {
      useFavouritesStore.setState({ favouriteGames: [sampleGame] });
    });

    render(React.createElement(TestComponent));

    await waitFor(() => {
      expect(screen.getByTestId("loading").textContent).toBe("false");
      expect(screen.getByTestId("count").textContent).toBe("1");
    });
  });
});
