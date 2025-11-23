import Image from "next/image";
import { zIndexes } from "@app-constants/index";

export const Navbar = () => {
  return (
    <header
      className={`w-full bg-white border-b sticky top-0 z-${zIndexes.navbar}`}
    >
      <div className="p-4 sm:pl-6 lg:pl-8">
        <div className="relative h-14 w-auto max-w-[320px]">
          <Image
            src="https://gamedistribution.com/assets/logos/logo-2line.svg"
            alt="Game-distribution-logo"
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            loading="lazy"
          />
        </div>
      </div>
    </header>
  );
};
