import { create } from "zustand";
import type { Game } from "@app-types/index";
import { games } from "@app-constants/mockedData";

type GamesState = {
  games: Game[];
  selectedCategories: string[];
  searchQuery: string;
  setSelectedCategories: (cats: string[]) => void;
  setSearchQuery: (q: string) => void;
  clearAllFilters: () => void;
  getFilteredGames: () => Game[];
};

export const useGamesStore = create<GamesState>((set, get) => ({
  games,
  selectedCategories: [],
  searchQuery: "",
  setSelectedCategories: (cats: string[]) => set({ selectedCategories: cats }),
  setSearchQuery: (q: string) => set({ searchQuery: q }),
  clearAllFilters: () =>
    set({
      selectedCategories: [],
      searchQuery: "",
    }),
  getFilteredGames: (): Game[] => {
    const { games, selectedCategories, searchQuery } = get();
    return games.filter((game) => {
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(game.category);

      const matchesSearch =
        searchQuery === "" ||
        game.title.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  },
}));
