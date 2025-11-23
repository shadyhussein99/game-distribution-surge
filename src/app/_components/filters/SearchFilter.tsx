"use client";

import { useEffect, useState } from "react";
import { Search, X } from "lucide-react";
import { Button, TextInput } from "@/src/components/ui";
import { useGamesStore } from "@/src/store/useGamesStore";
import { useDebounce } from "@app-hooks/index";

export const SearchFilter = () => {
  const [inputValue, setInputValue] = useState("");
  const { searchQuery, setSearchQuery } = useGamesStore();

  // Simulate pulling data from API using debounce
  const debouncedSearchQuery = useDebounce(inputValue);

  useEffect(() => {
    setSearchQuery(debouncedSearchQuery);
  }, [debouncedSearchQuery]);

  useEffect(() => {
    if (!searchQuery) {
      setInputValue("");
    }
  }, [searchQuery]);

  return (
    <div className="mb-8 max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted" />
        <TextInput
          type="text"
          placeholder="Search Games"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="pl-10 h-12 rounded-xl border-2 bg-background focus-visible:ring-2 focus-visible:ring-primary"
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSearchQuery("")}
            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0 hover:bg-muted"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};
