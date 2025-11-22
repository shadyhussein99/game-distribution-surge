"use client";

import { X } from "lucide-react";
import { useGamesStore } from "@/src/store/useGamesStore";

export const ActiveFilters = () => {
  const { selectedCategories, setSelectedCategories } = useGamesStore();

  if (selectedCategories.length === 0) return null;

  return (
    <div className="mb-6 flex flex-wrap gap-2">
      {selectedCategories.map((category) => (
        <span
          key={category}
          className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20"
        >
          {category}
          <button
            onClick={() =>
              setSelectedCategories(
                selectedCategories.filter((c) => c !== category)
              )
            }
            className="hover:bg-primary/20 rounded-full p-0.5"
          >
            <X className="h-3 w-3" />
          </button>
        </span>
      ))}
    </div>
  );
};
