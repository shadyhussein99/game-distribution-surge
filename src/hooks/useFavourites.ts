import { useState, useEffect } from "react";

import { useFavouritesStore } from "@app-store/useFavouritesStore";

import type { Game } from "@app-types/index";

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
