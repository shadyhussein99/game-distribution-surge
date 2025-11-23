import type { Metadata } from "next";
import { FavouriteGames } from "./_components/FavouriteGames";

export const metadata: Metadata = {
  title: "Game Distribution favorites",
  description: "Game Distribution favorites, favorite games",
};

const Favourites = () => {
  return <FavouriteGames />;
};

export default Favourites;
