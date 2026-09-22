import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  // Search,
  SlidersHorizontal,
  X,
  ChevronDown,
  Star,
  Calendar,
  Clock,
  Film,
  Filter,
  Play,
  Loader2,
} from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { FILTERS } from "../../constants/filters";
import { updateSearchParams } from "../../utils/updateSearchParams";
import { getDiscoverMovies } from "../../services/movieService";
import { FilterSection } from "../../components/search/FilterSection";
import MovieCard from "../../components/search/MovieCard";
import { MOVIEGENRE } from "../../utils/constants";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  let genre = searchParams.get("genre") || FILTERS.DEFAULT.genre;
  let year = searchParams.get("year") || FILTERS.DEFAULT.year;
  let rating = searchParams.get("rating") || FILTERS.DEFAULT.vote;
  let sortBy = searchParams.get("sort") || FILTERS.DEFAULT.sort_by;
  let page = searchParams.get("page") || FILTERS.DEFAULT.page;

  const maxPageLimit = 5;
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const resetFilters = () => {
    genre = FILTERS.DEFAULT.genre;
    year = FILTERS.DEFAULT.year;
    rating = FILTERS.DEFAULT.vote;
    sortBy = FILTERS.DEFAULT.sort_by;
    page = FILTERS.DEFAULT.page;
    updateSearchParams(searchParams, setSearchParams, {
      genre: FILTERS.DEFAULT.genre,
      year: FILTERS.DEFAULT.year,
      rating: FILTERS.DEFAULT.rating,
      sortBy: FILTERS.DEFAULT.sort_by,
      page: FILTERS.DEFAULT.page,
    });
  };

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);

      try {
        const newMovies = await getDiscoverMovies({
          genre,
          year,
          rating,
          sortBy,
          page,
        });

        if (page === "1") {
          setDisplayedMovies(newMovies);
        } else {
          setDisplayedMovies((prev) => [...prev, ...newMovies]);
        }

        setHasMore(newMovies.length > 0 && Number(page) < maxPageLimit);
      } finally {
        setLoading(false);
        setIsInitialLoad(false);
      }
    };

    fetchMovies();
  }, [genre, year, rating, sortBy, page]);

  const observerRef = useRef();
  // هر وقت به انتهای صفحه رسیدیم و لیست خالی نبود، لود کن
  const lastItemRef = useCallback(
    (node) => {
      if (loading || !hasMore || isInitialLoad) return;

      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setSearchParams((prev) => {
            const params = new URLSearchParams(prev);

            const currentPage = Number(params.get("page") || "1");

            params.set("page", String(currentPage + 1));

            return params;
          });
        }
      });

      if (node) {
        observerRef.current.observe(node);
      }
    },
    [loading, hasMore, isInitialLoad, setSearchParams],
  );

  return (
    <div
      className="min-h-screen bg-[#0f1014] text-white font-sans relative pb-20"
      dir="rtl"
    >
      {/* --- Header / Search Input --- */}
      <div className="relative bg-gradient-to-b from-gray-900 to-[#0f1014] pt-24 pb-12 px-6 md:px-12 border-b border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            جستجوی پیشرفته
          </h1>
          <div className="relative max-w-2xl mx-auto">
            {/* <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" /> */}
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="نام فیلم، کارگردان یا بازیگر..."
              className="w-full bg-gray-800/80 border border-gray-700 rounded-2xl py-4 pr-12 pl-14 text-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all shadow-xl"
            />
          </div>
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
            {isFilterOpen ? "بستن فیلترها" : "نمایش فیلترها"}
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
                فیلترها
              </h3>
              <button
                onClick={() => resetFilters()}
                className="text-xs text-red-400 hover:text-red-300 font-medium"
              >
                پاک کردن همه
              </button>
            </div>

            <div className="space-y-2">
              {/* فیلتر مرتب‌سازی (Sort) */}
              <div className="mb-4">
                <label className="block text-xs text-gray-400 mb-2">
                  مرتب‌سازی بر اساس
                </label>
                <select
                  value={sortBy}
                  onChange={(e) =>
                    updateSearchParams(searchParams, setSearchParams, {
                      sort: e.target.value,
                    })
                  }
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500"
                >
                  {FILTERS.SORT_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <FilterSection
                icon={<Film className="w-4 h-4 text-blue-400" />}
                label="ژانر"
                options={MOVIEGENRE}
                selectedValue={genre}
                onChange={(val) =>
                  updateSearchParams(searchParams, setSearchParams, {
                    genre: val,
                    page: "1",
                  })
                }
              />
              <FilterSection
                icon={<Calendar className="w-4 h-4 text-green-400" />}
                label="سال ساخت"
                options={FILTERS.YEAR_OPTIONS}
                selectedValue={year}
                onChange={(val) =>
                  updateSearchParams(searchParams, setSearchParams, {
                    year: val,
                    page: "1",
                  })
                }
              />
              <FilterSection
                icon={<Star className="w-4 h-4 text-yellow-400" />}
                label="حداقل امتیاز"
                options={FILTERS.VOTE_OPTIONS}
                selectedValue={rating}
                onChange={(val) =>
                  updateSearchParams(searchParams, setSearchParams, {
                    rating: val,
                    page: "1",
                  })
                }
              />
            </div>
          </motion.div>
        </div>

        {/* Results Grid */}
        <div className="lg:col-span-9">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">
              نتایج جستجو{" "}
              <span className="text-gray-400 text-sm font-normal">
                ({displayedMovies.length} عنوان)
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedMovies.map((movie, index) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                lastItemRef={lastItemRef}
                displayedMovies={displayedMovies}
                index={index}
              />
            ))}
          </div>

          {/* --- بخش اینفینیتی اسکرول (لودینگ و سنسور انتهای صفحه) --- */}
          <div
            ref={lastItemRef}
            className="w-full flex justify-center py-8 mt-4"
          >
            {loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-3 text-gray-400"
              >
                <Loader2 className="w-6 h-6 animate-spin text-red-500" />
                <span>در حال بارگذاری فیلم‌های بیشتر...</span>
              </motion.div>
            )}

            {!hasMore && displayedMovies.length > 0 && (
              <div className="text-gray-500 text-sm py-4">
                — همه فیلم‌های موجود نمایش داده شدند —
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
