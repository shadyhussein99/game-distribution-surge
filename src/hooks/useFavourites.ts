import { useState, useEffect } from "react";

import { useFavouritesStore } from "@app-store/useFavouritesStore";

import type { Game } from "@app-types/index";

/**
 * A hook that returns the current favourite games, a function to handle favourites, and a boolean indicating whether the hook is loading.
 * @returns { favouriteItems: Game[], handleFavourites: (game: Game) => void, loading: boolean }
 */
export const useFavourites = () => {
  const [favouriteItems, setFavouriteItems] = useState<Game[] | []>([]);
  const [loading, setLoading] = useState(true);

  const { favouriteGames, handleFavourites } = useFavouritesStore(
    (state) => state
  );

  useEffect(() => {
    setFavouriteItems(favouriteGames);
    setLoading(false);
  }, [favouriteGames]);

  return {
    favouriteItems,
    handleFavourites,
    loading,
  };
};
