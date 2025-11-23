import Image from "next/image";
import Link from "next/link";
import { Card } from "@app-components/shared";
import { Favourite } from "@app-components/ui";
import type { Game } from "@app-types/index";

type GameCardProps = {
  game: Game;
};

export const GameCard = ({ game }: GameCardProps) => {
  return (
    <Link href={`/games/${game.id}`}>
      <Card className="group relative overflow-hidden rounded-xl border-0 bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer">
        <div className="relative aspect-4/3 overflow-hidden group h-64">
          <Image
            src={game.image}
            alt={`${game.title}-img`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(min-width: 1024px) 33vw, 100vw"
            loading="lazy"
          />

          <Favourite game={game} />
        </div>
        <div className="p-4 bg-white">
          <h3 className="font-semibold text-card-foreground mb-1 line-clamp-1 group-hover:text-primary transition-colors">
            {game.title}
          </h3>
          <p className="text-sm text-muted line-clamp-1">{game.developer}</p>
        </div>
      </Card>
    </Link>
  );
};
