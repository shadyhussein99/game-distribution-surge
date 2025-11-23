"use client";

import { useGamesStore } from "@/src/store/useGamesStore";

export const ResultsCount = () => {
  const { getFilteredGames } = useGamesStore();

  const filteredGames = getFilteredGames();

  return (
    <div className="mb-6">
      <p className="text-sm text-muted">
        Showing{" "}
        <span className="font-semibold text-foreground">
          {filteredGames.length}
        </span>{" "}
        {filteredGames.length === 1 ? "game" : "games"}
      </p>
    </div>
  );
};
