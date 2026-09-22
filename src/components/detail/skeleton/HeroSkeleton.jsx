import Skeleton from "../../common/Skeleton";

export default function HeroSkeleton() {
  return (
    <div className="relative h-[80vh] w-full -mt-16 bg-dark-800">
      {/* Backdrop */}
      <Skeleton className="absolute inset-0" rounded="sm" />

      {/* Content */}
      <div className="relative container mx-auto px-6 h-full flex items-end pb-16 gap-8">
        {/* Poster */}
        <Skeleton className="w-48 h-72 hidden md:block" rounded="lg" />

        {/* Info */}
        <div className="flex-1 space-y-4 pb-4">
          <Skeleton className="h-12 w-2/3" />
          <Skeleton className="h-5 w-1/3" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/6" />
          </div>
          <div className="flex gap-3 pt-4">
            <Skeleton className="h-12 w-40" rounded="lg" />
            <Skeleton className="h-12 w-12" rounded="full" />
            <Skeleton className="h-12 w-12" rounded="full" />
          </div>
        </div>
      </div>
    </div>
  );
}
