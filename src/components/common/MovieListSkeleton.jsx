const MovieCardSkeleton = () => {
  return (
    // Main card container - dark background color similar to your image
    <div className="relative w-full aspect-[2/3] bg-[#1e2530] rounded-lg overflow-hidden animate-pulse border border-gray-800">
      <div className="absolute top-4 left-0 right-0 flex justify-center px-4">
        <div className="h-4 bg-gray-700 rounded w-3/4"></div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
        <div className="h-6 w-12 bg-gray-700 rounded"></div>

        <div className="h-4 bg-gray-700 rounded w-1/2"></div>
      </div>
    </div>
  );
};

// List component for displaying multiple cards side-by-side (similar to your image)
const MovieListSkeleton = () => {
  return (
    <div className="w-full p-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {[...Array(6)].map((_, index) => (
          <MovieCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default MovieListSkeleton;
