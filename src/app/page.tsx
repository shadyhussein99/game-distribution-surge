import type { Metadata } from "next";
import { Header } from "./_components/Header";
import { Filters } from "./_components/filters/index";
import { ResultsCount } from "./_components/ResultsCount";
import { GamesList } from "./_components/GamesList";

export const metadata: Metadata = {
  title: "Game Distribution Games List",
  description: "Game Distribution Games List, browse, search and filter games",
};

export default function Home() {
  return (
    <>
      <Header />
      <Filters />
      <ResultsCount />
      <GamesList />
    </>
  );
}
