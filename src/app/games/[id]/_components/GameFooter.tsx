import type { Game } from "@app-types/index";

type GameFooterProps = {
  selectedGame: Game;
};

const FooterItem = ({ type, value }: { type: string; value: string }) => {
  return (
    <p className="text-lg font-semibold border-b-2 pb-2 border-gray-200 ">
      <span className="text-black">{type}: </span>
      <span className="text-primary">{value}</span>
    </p>
  );
};

export const GameFooter = ({ selectedGame }: GameFooterProps) => {
  return (
    <div className="flex flex-col gap-2 mt-6">
      <FooterItem type="Title" value={selectedGame.title} />
      <FooterItem type="Developer" value={selectedGame.developer} />
      <FooterItem type="category" value={selectedGame.category} />
    </div>
  );
};
