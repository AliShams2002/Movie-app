import toast from "react-hot-toast";
import useAuthStore from "../../store/useAuthStore";
import { useUserDataStore } from "../../store/useUserDataStore";

export function useWatchlist(mediaId) {
  const user = useAuthStore((s) => s.user);
  const watchlist = useUserDataStore((s) => s.watchlist);
  const toggleWatchlist = useUserDataStore((s) => s.toggleWatchlis);

  const isInWatchlist = !!watchlist[mediaId];

  const toggle = async (mediaObject) => {
    if (!user) return { needsLogin: true };
    const result = await toggleWatchlist(user.uid, mediaObject);

    if (result.success) {
      toast.success(
        isInWatchlist ? "Removed from watchlist" : "Added to watchlist",
      );
    } else {
      toast.error("Operation failed. Please try again");
    }
    return result;
  };

  return {
    isInWatchlist,
    toggle,
  };
}
