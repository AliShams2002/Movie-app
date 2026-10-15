const HeaderSkeleton = () => {
  return (
    <nav className="w-full bg-[#050505] h-14 md:h-16 flex items-center justify-between px-6 md:px-12 border-b border-gray-900 animate-pulse">
      <div className="h-6 w-28 bg-red-900/40 rounded-md"></div>

      <div className="hidden md:flex items-center gap-8">
        <div className="h-4 w-12 bg-gray-700/60 rounded"></div>
        <div className="h-4 w-16 bg-gray-700/60 rounded"></div>
        <div className="h-4 w-8 bg-gray-700/60 rounded"></div>
      </div>

      <div className="w-10 h-10 rounded-full bg-gray-700/80 shrink-0"></div>
    </nav>
  );
};

export default HeaderSkeleton;
