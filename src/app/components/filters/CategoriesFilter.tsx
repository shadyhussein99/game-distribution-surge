"use client";

import { Button, MultiSelectDropdown } from "@/src/components/ui";
import { X } from "lucide-react";
import { useGamesStore } from "@/src/store/useGamesStore";
import { categories } from "@/src/constants";

export const CategoriesFilter = () => {
  const {
    selectedCategories,
    setSelectedCategories,
    searchQuery,
    clearAllFilters,
  } = useGamesStore();

  const hasActiveFilters = selectedCategories.length > 0 || searchQuery !== "";

  return (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
        <h2 className="text-lg font-semibold text-foreground">Filters</h2>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="text-destructive hover:bg-destructive/10 hover:text-destructive font-medium"
          >
            <X className="h-4 w-4 mr-2" />
            Clear All Filters
          </Button>
        )}
      </div>

      <div className="flex flex-wrap gap-3">
        <MultiSelectDropdown
          label="Categories"
          options={categories}
          selected={selectedCategories}
          onChange={setSelectedCategories}
          onClear={() => setSelectedCategories([])}
        />
      </div>
    </div>
  );
};
