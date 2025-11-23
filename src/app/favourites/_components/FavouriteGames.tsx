"use client";

import { useFavourites } from "@app-hooks/index";
import { Header } from "./Header";
import { GamesGrid } from "@app-components/shared";

export const FavouriteGames = () => {
  const { favouriteItems } = useFavourites();

  return (
    <>
      <Header />
      <GamesGrid games={favouriteItems} emptyMessage="No favourite games" />
    </>
  );
};
