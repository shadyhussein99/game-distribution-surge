import type { Metadata } from "next";
import { games } from "@app-constants/mockedData";
import GamePlayer from "./_components/GamePlayer";

type GamePreviewProps = {
  params: Promise<{
    id: string;
  }>;
};

// Dynamic metadata for each game to optimize SEO
export async function generateMetadata({
  params,
}: GamePreviewProps): Promise<Metadata> {
  const id = (await params).id;

  const selectedGame = games.find((g) => g.id === id);

  return {
    title: selectedGame?.title,
    description: `${selectedGame?.title}, ${selectedGame?.category}, developed by ${selectedGame?.developer}, play now!`,
  };
}

const GamePreview = async ({ params }: GamePreviewProps) => {
  const { id } = await params;
  return <GamePlayer id={id} />;
};

export default GamePreview;
