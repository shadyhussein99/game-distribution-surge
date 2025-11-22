import { createStore } from "zustand/vanilla";
import type { Game } from "@app-types/index";
import { games } from "@app-constants/mockedData";

export type GamesState = {
  games: Game[];
  selectedCategories: string[];
  searchQuery: string;
};

export type GamesActions = {
  setSelectedCategories: (cats: string[]) => void;
  setSearchQuery: (q: string) => void;
  clearAllFilters: () => void;
  getFilteredGames: () => Game[];
};

export type GamesStore = GamesState & GamesActions;

export const initGamesStore = (): GamesState => {
  return {
    games,
    selectedCategories: [],
    searchQuery: "",
  };
};

export const defaultGamesState: GamesState = {
  games,
  selectedCategories: [],
  searchQuery: "",
};

export const createGamesStore = (initState: GamesState = defaultGamesState) => {
  return createStore<GamesStore>()((set, get) => ({
    ...initState,
    setSelectedCategories: (cats: string[]) =>
      set((state) => ({
        ...state,
        selectedCategories: cats,
      })),
    setSearchQuery: (q: string) =>
      set((state) => ({
        ...state,
        searchQuery: q,
      })),
    clearAllFilters: () =>
      set((state) => ({
        ...state,
        selectedCategories: [],
        searchQuery: "",
      })),
    getFilteredGames: (): Game[] => {
      const state = get();
      return state.games.filter((game) => {
        const matchesCategory =
          state.selectedCategories.length === 0 ||
          state.selectedCategories.includes(game.category);

        const matchesSearch =
          state.searchQuery === "" ||
          game.title.toLowerCase().includes(state.searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
      });
    },
  }));
};
