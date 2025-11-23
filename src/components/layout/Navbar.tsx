import Image from "next/image";
import Link from "next/link";
import { zIndexes } from "@app-constants/index";
import { Button } from "@/src/components/ui";

export const Navbar = () => {
  return (
    <header
      className="w-full bg-white border-b px-[6%] sticky top-0"
      style={{ zIndex: zIndexes.navbar }}
    >
      <div className="flex items-center justify-between py-4 ">
        <div className="relative h-14 w-auto">
          <Image
            src="https://gamedistribution.com/assets/logos/logo-2line.svg"
            alt="Game-distribution-logo"
            width={180}
            height={180}
            sizes="(min-width: 1024px) 33vw, 100vw"
            loading="lazy"
          />
        </div>

        <Link href="/favourites">
          <Button>Favourites</Button>
        </Link>
      </div>
    </header>
  );
};
