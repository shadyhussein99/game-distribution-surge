import { useState, useRef, useEffect } from "react";
import { Button } from "@app-components/ui/Button";
import { ChevronDown, X, Check } from "lucide-react";
import { cn } from "@app-lib/utils";

interface MultiSelectDropdownProps {
  label: string;
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
  onClear: () => void;
}

export const MultiSelectDropdown = ({
  label,
  options,
  selected,
  onChange,
  onClear,
}: MultiSelectDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggle = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter((item) => item !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  const handleSelectAll = () => {
    if (selected.length === options.length) {
      onChange([]);
    } else {
      onChange(options);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full sm:w-auto justify-between rounded-xl border-2 px-4 py-2.5 font-medium transition-all",
          selected.length > 0
            ? "border-primary bg-primary/10 text-primary hover:bg-primary/20"
            : "border-border bg-background hover:border-primary/50"
        )}
      >
        <span className="flex items-center gap-2">
          {label}
          {selected.length > 0 && (
            <span className="inline-flex items-center justify-center rounded-full bg-primary px-2 py-0.5 text-xs font-semibold text-primary-foreground">
              {selected.length}
            </span>
          )}
        </span>
        <ChevronDown
          className={cn(
            "ml-2 h-4 w-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-72 rounded-xl border-2 border-border bg-background shadow-xl z-50 animate-fade-in">
          <div className="p-3 border-b border-border bg-muted/30">
            <div className="flex items-center justify-between gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSelectAll}
                className="text-xs font-medium hover:bg-accent"
              >
                {selected.length === options.length
                  ? "Deselect All"
                  : "Select All"}
              </Button>
              {selected.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    onClear();
                    setIsOpen(false);
                  }}
                  className="text-xs font-medium text-destructive hover:bg-destructive/10 hover:text-destructive"
                >
                  <X className="h-3 w-3 mr-1" />
                  Clear
                </Button>
              )}
            </div>
          </div>
          <div className="max-h-64 overflow-y-auto p-2">
            {options.map((option) => {
              const isChecked = selected.includes(option);
              return (
                <label
                  key={option}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer hover:bg-accent transition-colors group"
                >
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleToggle(option)}
                      className="peer h-4 w-4 shrink-0 rounded-sm border-2 border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none checked:bg-primary checked:border-primary cursor-pointer"
                    />
                    {isChecked && (
                      <Check className="absolute top-0 left-0 h-4 w-4 text-primary-foreground pointer-events-none" />
                    )}
                  </div>
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {option}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
