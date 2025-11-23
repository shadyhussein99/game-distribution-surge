type GamePreviewProps = {
  params: Promise<{
    id: string;
  }>;
};

const GamePreview = async ({ params }: GamePreviewProps) => {
  const { id } = await params;
  return <div>{id}</div>;
};

export default GamePreview;
