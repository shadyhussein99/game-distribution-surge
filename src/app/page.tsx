"use client";

import { useState } from "react";
import { Button, MultiSelectDropdown, TextInput } from "@app-components/ui";
import { X, Search } from "lucide-react";
import { GameCard } from "./components/GameCard";
import { games, categories } from "@app-constants/index";
import { Header } from "./components/Header";
import { Filters } from "./components/filters/index";
import { ResultsCount } from "./components/ResultsCount";
import { GamesList } from "./components/GamesList";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Header />
            <Filters />
            <ResultsCount />
            <GamesList />

            {/* No Results */}
            {/* {filteredGames.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg mb-4">
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
