import MovieCard from "./MovieCard";
import ErrorState from "../common/ErrorState";
import SearchSkeleton from "./SearchSkeleton";

const SearchResultGrid = ({ results, status, error, refetch, filters }) => {
  if (status === "loading") return <SearchSkeleton />;
  if (error) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-[#0f1014]">
        <ErrorState errorMessage="data is not available!" refetch={refetch} />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {results.map((movie) => (
        // Movie card
        <MovieCard key={movie.id} type={filters.type} movie={movie} />
      ))}
    </div>
  );
};

export default SearchResultGrid;
