import type { Game } from "@app-types/index";
import { GameCard } from "./GameCard";

type GamesGridProps = {
  games: Game[];
  emptyMessage: string;
};

export const GamesGrid = ({ games, emptyMessage }: GamesGridProps) => {
  return (
    <>
      {games.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <h3 className="text-center text-5xl font-bold pt-12">{emptyMessage}</h3>
      )}
    </>
  );
};
