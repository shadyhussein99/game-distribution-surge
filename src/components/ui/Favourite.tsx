"use client";

import React from "react";
import { zIndexes } from "@app-constants/index";
import type { Game } from "@app-types/index";
import { Button } from "./Button";
import { FavouriteIcon, NotFavouriteIcon } from "@app-icons/index";
import { useFavourites } from "@app-hooks/index";

type FavouriteProps = {
  game: Game;
};

export const Favourite = ({ game }: FavouriteProps) => {
  const { favouriteItems, handleFavourites } = useFavourites();

  const onFavClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    handleFavourites(game);
  };

  const isFavourite = favouriteItems?.some((item) => item.id === game.id);

  return (
    <div className={`absolute top-3 right-3 z-${zIndexes.favouriteIcon}`}>
      <Button
        size="icon"
        variant={isFavourite ? "destructive" : "default"}
        onClick={onFavClick}
        aria-label={isFavourite ? "Remove favourite" : "Add to favourites"}
      >
        {isFavourite ? <FavouriteIcon /> : <NotFavouriteIcon />}
      </Button>
    </div>
  );
};
