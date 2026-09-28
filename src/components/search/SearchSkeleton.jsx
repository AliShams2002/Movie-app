const MovieCardSkeleton = () => {
  return (
    <div className="w-full bg-[#161b22] rounded-xl p-3 flex gap-4 animate-pulse border border-gray-800/60">
      <div className="relative w-24 h-36 shrink-0 bg-gray-700/50 rounded-lg overflow-hidden">
        <div className="absolute top-2 left-2 w-10 h-5 bg-gray-600 rounded"></div>
      </div>

      <div className="flex flex-col justify-between flex-1 py-1">
        <div className="h-5 bg-gray-700/80 rounded w-3/4 mb-2"></div>

        <div className="flex items-center gap-2 mb-4">
          <div className="h-3 w-10 bg-gray-700/60 rounded"></div>
          <div className="h-3 w-1 bg-gray-700/60 rounded-full"></div>{" "}
          <div className="h-3 w-20 bg-gray-700/60 rounded"></div>
        </div>

        <div className="flex items-center gap-3 mt-auto">
          <div className="h-6 w-8 bg-gray-700/60 rounded"></div>

          <div className="h-8 w-24 bg-red-900/40 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

const SearchSkeleton = () => {
  return (
    <div className="w-full bg-[#0d1117] p-8 min-h-screen">
      <div className="flex items-center gap-3 mb-6 animate-pulse">
        <div className="h-6 w-24 bg-gray-700 rounded"></div>
        <div className="h-4 w-16 bg-gray-800 rounded"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[...Array(6)].map((_, index) => (
          <MovieCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default SearchSkeleton;
