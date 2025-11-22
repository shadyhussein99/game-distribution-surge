"use client";

import { Button, TextInput } from "@/src/components/ui";
import { Search, X } from "lucide-react";
import React from "react";
import { useGamesStore } from "@/src/store/useGamesStore";

export const SearchFilter = () => {
  const { searchQuery, setSearchQuery } = useGamesStore();

  return (
    <div className="mb-8 max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <TextInput
          type="text"
          placeholder="Search Games"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
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
