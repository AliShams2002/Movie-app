import { FaStar } from "react-icons/fa";
import { formatDateHelper } from "../../utils/dateHelpers";
import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div
      key={review.id}
      className="border-b border-white/5 pb-6 last:border-0 last:pb-0"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex gap-3 items-center">
          {/* Image */}
          <img
            src={
              review.author_details.avatar_path
                ? `https://image.tmdb.org/t/p/original/${review.author_details.avatar_path}`
                : "/images/Avatar.png"
            }
            alt={review.author_details.name}
            loading="lazy"
            className="h-10 w-10 rounded-full bg-cover"
          />
          <div className="flex flex-col items-start">
            {/* Username */}
            <span className="font-bold text-sm">
              {review.author_details.username}
            </span>
            {/* Date */}
            <span className="text-gray-500 text-[10px]">
              {formatDateHelper(review.created_at)}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1 bg-yellow-500/10 px-2 py-1 rounded-lg text-yellow-400 text-xs font-bold border border-yellow-500/10">
          {/* Rating */}
          {review.author_details.rating ? (
            <small className="flex items-center gap-1">
              <FaStar className="w-3 h-3" /> {review.author_details.rating}
            </small>
          ) : (
            <small>_</small>
          )}
        </div>
      </div>
      {/* Title */}
      <p className="text-gray-400 text-sm leading-relaxed text-left">
        {review.content}
      </p>
    </div>
  );
};

export default React.memo(ReviewCard);
