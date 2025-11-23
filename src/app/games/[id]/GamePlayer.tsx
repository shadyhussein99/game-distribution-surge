import { NoGameFound } from "./_components/NoGameFound";
import { Header } from "./_components/Header";
import { GameIframe } from "./_components/GameIframe";
import { GameFooter } from "./_components/GameFooter";
import { games } from "@app-constants/mockedData";

type GamePlayerProps = {
  id: string;
};

const GamePlayer = ({ id }: GamePlayerProps) => {
  const selectedGame = games.find((g) => g.id === id);

  if (!selectedGame) {
    return <NoGameFound />;
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground overflow-hidden p-4">
      <div className="w-full max-w-6xl">
        <Header />

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-2/3 flex-1">
            <GameIframe selectedGame={selectedGame} />
            <GameFooter selectedGame={selectedGame} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default GamePlayer;
