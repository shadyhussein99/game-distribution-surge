"use client";

import { type ReactNode, createContext, useState, useContext } from "react";
import { useStore } from "zustand";

import {
  type GamesStore,
  createGamesStore,
  initGamesStore,
} from "@app-store/games-store";

export type GamesStoreApi = ReturnType<typeof createGamesStore>;

export const GamesStoreContext = createContext<GamesStoreApi | undefined>(
  undefined
);

export interface GamesStoreProviderProps {
  children: ReactNode;
}

export const GamesStoreProvider = ({ children }: GamesStoreProviderProps) => {
  const [store] = useState<GamesStoreApi>(() =>
    createGamesStore(initGamesStore())
  );

  return (
    <GamesStoreContext.Provider value={store}>
      {children}
    </GamesStoreContext.Provider>
  );
};

export const useGamesStore = <T,>(selector: (store: GamesStore) => T): T => {
  const gamesStoreContext = useContext(GamesStoreContext);

  if (!gamesStoreContext) {
    throw new Error(`useGamesStore must be used within GamesStoreProvider`);
  }

  return useStore(gamesStoreContext, selector);
};
