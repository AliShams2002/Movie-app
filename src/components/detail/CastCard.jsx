const CastCard = ({ cast }) => {
  return (
    <div className="flex items-center flex-col gap-1">
      <img
        src={
          cast?.profile_path
            ? `https://image.tmdb.org/t/p/original/${cast?.profile_path}`
            : "/images/Avatar.png"
        }
        alt="asdf"
        loading="lazy"
        className="h-12 w-12 rounded-full bg-cover"
      />
      <span>{cast?.name}</span>
    </div>
  );
};

export default CastCard;
