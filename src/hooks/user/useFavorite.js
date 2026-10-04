import toast from "react-hot-toast";
import useAuthStore from "../../store/useAuthStore";
import { useUserDataStore } from "../../store/useUserDataStore";

export function useFavorites(mediaId) {
  const user = useAuthStore((s) => s.user);
  const favorites = useUserDataStore((s) => s.favorites);
  const toggleFavorites = useUserDataStore((s) => s.toggleFavorites);

  const isInFavorites = !!favorites[mediaId];

  const toggle = async (mediaObject) => {
    if (!user) return { needsLogin: true };
    const result = await toggleFavorites(user.uid, mediaObject);

    if (result.success) {
      toast.success(
        isInFavorites ? "Removed from favorites" : "Added to favorites",
      );
    } else {
      toast.error("Operation failed. Please try again");
    }
    return result;
  };

  return { isInFavorites, toggle };
}
