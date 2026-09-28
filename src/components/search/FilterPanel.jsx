import {
  Calendar,
  Film,
  List,
  ListSortDescending,
  Star,
  Tag,
} from "lucide-react";
import { FilterSection } from "./FilterSection";
import { FILTERS, MOVIE_GENRES, TV_GENRES } from "../../utils/constants";

const FilterPanel = ({ filters, updateFilters }) => {
  return (
    <div className="space-y-2">
      {/* Type */}
      <FilterSection
        icon={<Film className="w-4 h-4 text-blue-400" />}
        type="radio"
        label="Type"
        options={FILTERS.TYPE_OPTIONS}
        selectedValue={filters.type}
        value={filters.type}
        onChange={(val) =>
          updateFilters({ type: val, genre: null, list: null })
        }
      />

      {/* Lists */}
      <FilterSection
        icon={<List className="w-4 h-4 text-green-600" />}
        type="radio"
        label="Lists"
        options={filters.type === "tv" ? FILTERS.TV_LISTS : FILTERS.MOVIE_LISTS}
        selectedValue={filters.list}
        value={filters.list}
        onChange={(val) => updateFilters({ list: val })}
      />

      {/* Genre */}
      <FilterSection
        icon={<Tag className="w-4 h-4 text-blue-400" />}
        type="selectBox"
        label="Genre"
        options={filters.type === "tv" ? TV_GENRES : MOVIE_GENRES}
        selectedValue={filters.genre}
        value={filters.genre}
        onChange={(e) => updateFilters({ genre: e.target.value })}
      />

      {/* Year */}
      <FilterSection
        icon={<Calendar className="w-4 h-4 text-green-400" />}
        type="radio"
        label="Year"
        options={FILTERS.YEAR_OPTIONS}
        selectedValue={filters.year}
        value={filters.year}
        onChange={(val) => updateFilters({ year: val })}
      />

      {/* Rating */}
      <FilterSection
        icon={<Star className="w-4 h-4 text-yellow-400" />}
        type="radio"
        label="Rating"
        options={FILTERS.VOTE_OPTIONS}
        selectedValue={filters.minRating}
        value={filters.minRating}
        onChange={(val) => updateFilters({ minRating: val })}
      />

      {/* SortBy */}
      <FilterSection
        icon={<ListSortDescending className="w-4 h-4 text-red-400" />}
        type="selectBox"
        label="SortBy"
        options={FILTERS.SORT_OPTIONS}
        selectedValue={filters.sort}
        value={filters.sort}
        onChange={(e) => updateFilters({ sort: e.target.value })}
      />
    </div>
  );
};

export default FilterPanel;
