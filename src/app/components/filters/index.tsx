"use client";

import { CategoriesFilter } from "./CategoriesFilter";
import { SearchFilter } from "./SearchFilter";
import { ActiveFilters } from "./ActiveFilters";

export const Filters = () => {
  return (
    <>
      <CategoriesFilter />
      <SearchFilter />
      <ActiveFilters />
    </>
  );
};
