import { games } from "@app-constants/mockedData";
import { GamesGrid } from "@app-components/shared";
import type { Game } from "@app-types/index";

type RelatedGamesProps = {
  selectedGame: Game;
};

export const RelatedGames = ({ selectedGame }: RelatedGamesProps) => {
  const relatedGames = games.filter(
    (game) =>
      game.category === selectedGame.category && game.id !== selectedGame.id
  );

  return (
    <div className="pt-12 flex flex-col gap-4">
      <p className="text-2xl text-primary font-semibold">Related Games:</p>
      <GamesGrid games={relatedGames} emptyMessage="No related games" />
    </div>
  );
};
