"use client";

import { useFavourites } from "@app-hooks/index";
import { GamesGrid } from "@app-components/shared";
import { Spinner } from "@/src/components/ui";
import { Header } from "./Header";

export const FavouriteGames = () => {
  const { favouriteItems, loading } = useFavourites();

  return (
    <>
      <Header />
      {loading ? (
        <div className="pt-40">
          <Spinner />
        </div>
      ) : (
        <GamesGrid games={favouriteItems} emptyMessage="No favourite games" />
      )}
    </>
  );
};
