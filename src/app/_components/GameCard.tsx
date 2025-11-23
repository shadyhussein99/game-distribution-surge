import Image from "next/image";
import Link from "next/link";
import { Card } from "@app-components/ui";

type GameCardProps = {
  id: string;
  title: string;
  developer: string;
  image: string;
};

export const GameCard = ({ title, developer, image, id }: GameCardProps) => {
  return (
    <Link href={`/games/${id}`}>
      <Card className="group relative overflow-hidden rounded-xl border-0 bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer">
        <div className="relative aspect-4/3 overflow-hidden group h-64">
          <Image
            src={image}
            alt={`${title}-img`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(min-width: 1024px) 33vw, 100vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-4 bg-white">
          <h3 className="font-semibold text-card-foreground mb-1 line-clamp-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted line-clamp-1">{developer}</p>
        </div>
      </Card>
    </Link>
  );
};
