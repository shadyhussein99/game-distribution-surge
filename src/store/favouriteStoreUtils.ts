import toast from "react-hot-toast";
import { localStorageNames } from "@app-constants/index";
import type { Game } from "@app-types/index";

export const handleFavourites = (favourites: Game[], game: Game) => {
  if (favourites.length > 0) {
    const gameInfavourites = favourites?.find((item) => item.id === game.id);

    if (gameInfavourites) {
      const updatedFavourites = favourites?.filter(
        (item) => item.id !== gameInfavourites.id
      );
      localStorage.setItem(
        localStorageNames.favourites,
        JSON.stringify(updatedFavourites)
      );
      toast.success("Game removed from favourites");
    } else {
      localStorage.setItem(
        localStorageNames.favourites,
        JSON.stringify([...favourites, game])
      );
      toast.success("Game added to favourites");
    }
  } else {
    localStorage.setItem(localStorageNames.favourites, JSON.stringify([game]));
    toast.success("Game added to favourites");
  }
};
