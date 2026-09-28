import { useState, useEffect, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal, Filter } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useSearch } from "../../hooks/data/useSearch";
import SearchInput from "../../components/search/SearchInput";
import FilterPanel from "../../components/search/FilterPanel";
import {
  buildSearchParams,
  hasActiveFilters,
  parsFilters,
} from "../../utils/urlHelpers";
import { useDebounce } from "../../hooks/ui/useDebounce";
import FilterChips from "../../components/search/FilterChips";
import { useInfiniteScroll } from "../../hooks/ui/useInfiniteScroll";
import Spinner from "../../components/common/Spinner";
import SearchResultGrid from "../../components/search/SearchResultGrid";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Parsing all filters
  const filters = useMemo(() => parsFilters(searchParams), [searchParams]);

  const [queryInput, setQueryInput] = useState(filters.q);
  const [isFilterOpen, setIsFilterOpen] = useState(true);

  // Debounced query input
  const debouncedQuery = useDebounce(queryInput, 500);

  // get all request off useSearch
  const { results, status, error, hasMore, loadMore, isLoadingMore, refetch } =
    useSearch({ filters });

  // custom hook for infinity scroll
  const { sentinelRef } = useInfiniteScroll({
    onLoadMore: loadMore,
    hasMore,
    isLoading: isLoadingMore,
  });

  useEffect(() => {
    // Check debouncedQuery for update Filters
    if (debouncedQuery !== filters.q) {
      updateFilters({ q: debouncedQuery });
    }
  }, [debouncedQuery]);

  // Updated filters
  const updateFilters = useCallback(
    (patch) => {
      const next = { ...filters, ...patch };
      if (patch.q) next.list = null;
      setSearchParams(buildSearchParams(next), { replace: true });
    },
    [filters, setSearchParams],
  );

  // Reset all filters
  const resetFilters = useCallback(() => {
    setSearchParams({}, { replace: true });
    setQueryInput("");
  }, [setSearchParams]);

  return (
    <div className="min-h-screen bg-[#0f1014] text-white font-sans relative pb-20">
      {/* --- Header / Search Input --- */}
      <div className="relative bg-gradient-to-b from-gray-900 to-[#0f1014] pt-24 pb-12 px-6 md:px-12 border-b border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Search
          </h1>
          <SearchInput
            value={queryInput}
            onChange={setQueryInput}
            placeholder="Movie or Tv name..."
          />
        </div>
      </div>

      {/* --- Main Layout --- */}
      <div className="container mx-auto max-w-7xl px-6 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Filters Panel */}
        <div className="lg:col-span-3 relative">
          {/* Mobile Toggle */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="lg:hidden w-full flex items-center justify-center gap-2 bg-gray-800 p-4 rounded-xl mb-4 border border-gray-700 text-white"
          >
            <Filter className="w-5 h-5" />
            {isFilterOpen ? "Close Filter" : "Open Filter"}
          </button>

          {/* Filter Content */}
          <motion.div
            initial={false}
            animate={{
              height: isFilterOpen ? "auto" : "0",
              opacity: isFilterOpen ? 1 : 0,
            }}
            className={`lg:h-auto lg:opacity-100 overflow-hidden lg:overflow-visible bg-gray-900/50 rounded-2xl p-6 border border-gray-800 backdrop-blur-sm sticky top-24`}
          >
            <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5 text-red-500" />
                Filters
              </h3>
            </div>

            <FilterPanel filters={filters} updateFilters={updateFilters} />
          </motion.div>
        </div>

        {/* Results Grid */}
        <div className="lg:col-span-9 space-y-2">
          {hasActiveFilters(filters) && (
            <FilterChips
              filters={filters}
              onRemove={(key) => updateFilters({ [key]: null })}
              onClearAll={resetFilters}
            />
          )}
          {/* Results length */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">
              Results{" "}
              <span className="text-gray-400 text-sm font-normal">
                ({results.length} Item)
              </span>
            </h2>
          </div>

          {/* Results grid */}
          <SearchResultGrid
            results={results}
            status={status}
            error={error}
            refetch={refetch}
            filters={filters}
          />

          {/* Item ref(for infinity scroll) */}
          {hasMore && <div ref={sentinelRef} className="h-10" />}

          {/* Spinner loading */}
          {isLoadingMore && (
            <div className="w-full flex items-center flex-col gap-1">
              <Spinner className="bg-transparent" />
              <span>Lodaing more item...</span>
            </div>
          )}

          {/* End of results */}
          {!hasMore && results.length > 0 && (
            <div className="text-gray-500 text-sm py-4">— End of results —</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
