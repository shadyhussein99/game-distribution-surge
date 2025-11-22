import { GameCard } from "./GameCard";
import { useGamesStore } from "@/src/store/useGamesStore";

export const GamesList = () => {
  const { getFilteredGames } = useGamesStore();

  const filteredGames = getFilteredGames();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredGames.map((game) => (
        <GameCard
          key={game.id}
          title={game.title}
          developer={game.developer}
          image={game.image}
        />
      ))}
    </div>
  );
};
