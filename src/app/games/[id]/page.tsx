import GamePlayer from "./GamePlayer";

type GamePreviewProps = {
  params: Promise<{
    id: string;
  }>;
};

const GamePreview = async ({ params }: GamePreviewProps) => {
  const { id } = await params;
  return <GamePlayer id={id} />;
};

export default GamePreview;
