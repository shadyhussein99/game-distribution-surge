import { BackButton } from "@app-components/shared";

export const Header = () => {
  return (
    <div className="flex flex-col mb-4 gap-8">
      <BackButton />

      <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">
        Favorites
      </h1>
    </div>
  );
};
