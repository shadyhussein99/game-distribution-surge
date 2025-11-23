import { create } from "zustand";
import type { Game } from "@app-types/index";
import { localStorageNames } from "@app-constants/index";
import { handleFavourites } from "./favouriteStoreUtils";

type FavouritesState = {
  favouriteGames: Game[];
  handleFavourites: (game: Game) => void;
};

const localStorageFavourites =
  typeof window !== "undefined" &&
  localStorage.getItem(localStorageNames.favourites);

const getFavouritesValue = () => {
  let favourites: Game[] | [] = [];
  if (typeof window !== "undefined") {
    if (localStorageFavourites) {
      favourites = JSON.parse(localStorageFavourites);
    }
  }
  return favourites;
};

export const useFavouritesStore = create<FavouritesState>((set) => ({
  favouriteGames: getFavouritesValue(),
  handleFavourites: (game) =>
    set((state) => {
      if (typeof window !== "undefined") {
        handleFavourites(state.favouriteGames, game);
        return {
          favouriteGames: JSON.parse(
            localStorage.getItem(localStorageNames.favourites) ?? "[]"
          ),
        };
      } else {
        return { favouriteGames: state.favouriteGames };
      }
    }),
}));
