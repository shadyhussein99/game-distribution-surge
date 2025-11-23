import { BackButton } from "@app-components/shared";

export const NoGameFound = () => {
  return (
    <main className="flex flex-col gap-16 p-6">
      <BackButton />

      <div className="text-center">
        <p className="text-4xl font-bold">Game not found!</p>
      </div>
    </main>
  );
};
