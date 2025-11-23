import { Header } from "./_components/Header";
import { Filters } from "./_components/filters/index";
import { ResultsCount } from "./_components/ResultsCount";
import { GamesList } from "./_components/GamesList";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center pt-12 pb-32 px-16 dark:bg-black sm:items-start">
        <div className="min-h-screen w-full bg-background pb-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto">
            <Header />
            <Filters />
            <ResultsCount />
            <GamesList />

            {/* No Results */}
            {/* {filteredGames.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted text-lg mb-4">
                  No games found matching your filters.
                </p>
                <Button
                  variant="outline"
                  onClick={clearAllFilters}
                  className="rounded-xl"
                >
                  Clear All Filters
                </Button>
              </div>
            )} */}
          </div>
        </div>
      </main>
    </div>
  );
}
