"use client";

import { GamesGrid } from "@app-components/shared";
import { useGamesStore } from "@/src/store/useGamesStore";

export const GamesList = () => {
  const { getFilteredGames } = useGamesStore();

  const filteredGames = getFilteredGames();

  return <GamesGrid games={filteredGames} emptyMessage="No Results!" />;
};
