import { X } from "lucide-react";
import { FILTERS, MOVIE_GENRES, TV_GENRES } from "../../utils/constants";
import { getActiveFilters } from "../../utils/urlHelpers";

// Return filter label
function getFilterLabel(key, value, filters) {
  const list = filters.type === "tv" ? TV_GENRES : MOVIE_GENRES;
  switch (key) {
    case "q":
      return `"${value}"`;
    case "type":
      return value === "tv" ? "TV Series" : "Movies";
    case "genre":
      return list.find((g) => g.value === value)?.label || `Genre ${value}`;
    case "year":
      return `${value}`;

    case "minRating":
      return `⭐ ${value}+`;
    case "sort":
      return (
        FILTERS.SORT_OPTIONS.find((s) => s.value === value)?.label || value
      );

    case "list":
      return value
        .split("_")
        .map((w) => w[0].toUpperCase() + w.slice(1))
        .join(" ");

    default:
      return String(value);
  }
}

const FilterChips = ({ filters, onRemove, onClearAll }) => {
  // get active keys
  const activeKeys = getActiveFilters(filters);

  // check active keys length
  if (activeKeys.length === 0) return null;

  return (
    <div className="flex items-center flex-wrap gap-2 mb-6">
      <span className="text-sm text-white/50 mr-2">Active filters:</span>
      {/* Chips */}
      {activeKeys.map((key) => (
        <button
          key={key}
          onClick={() => onRemove(key)}
          className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-700 hover:bg-dark-600 border border-dark-600 text-sm transition-colors"
          aria-label={`Remove ${key} filter`}
        >
          <span className="text-white/90">
            {getFilterLabel(key, filters[key], filters)}
          </span>
          <X className="w-3.5 h-3.5 text-white/50 group-hover:text-primary transition-colors" />
        </button>
      ))}

      {/* Clear all btn */}
      {activeKeys.length > 1 && (
        <button
          onClick={onClearAll}
          className="ml-2 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
        >
          Clear all
        </button>
      )}
    </div>
  );
};

export default FilterChips;
