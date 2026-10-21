import { getTmdbImage } from "../../utils/tmdbImage";

const CastCard = ({ cast }) => {
  return (
    <div className="flex items-center flex-col gap-1">
      <img
        src={
          cast?.profile_path
            ? getTmdbImage(cast.profile_path, "w185")
            : "/images/Avatar.png"
        }
        sizes="185w"
        alt={cast?.name || "Cast member"}
        loading="lazy"
        className="h-12 w-12 rounded-full bg-cover"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.srcset = "";
          e.currentTarget.src = "/images/Avatar.png";
        }}
      />
      <span>{cast?.name}</span>
    </div>
  );
};

export default CastCard;
