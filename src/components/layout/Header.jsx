import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useScrollPosition } from "../../hooks/ui/useScrollPosition";
import useAuthStore from "../../store/useAuthStore";
import HeaderSkeleton from "./HeaderSkeleton";
import MobileMenu from "./MobileMenu";
import Button from "../common/Button";
import { NAV_ITEMS } from "../../utils/constants";

const Navbar = () => {
  const isScrolled = useScrollPosition(50);
  const { user, isLoading, error } = useAuthStore();

  if (isLoading && user === null) return <HeaderSkeleton />;

  // Change classes on scroll
  const navClass = isScrolled
    ? "bg-[#0a0a0a]/90 backdrop-blur-lg border-b border-white/5 backdrop-blur-md shadow-lg text-gray-200"
    : "bg-gradient-to-b from-black/80 to-transparent";

  return (
    <nav className={`fixed top-0 z-40 w-full ${navClass}`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="text-2xl font-bold text-red-500 tracking-wider drop-shadow-md"
        >
          CINEMA
        </a>
        {/* Nav items */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <ul className="flex items-center gap-8 text-sm font-medium">
            {NAV_ITEMS.map((i, index) => (
              <Button
                key={index}
                type="link"
                action={i.path}
                className="hover:text-red-400 transition-colors duration-150"
              >
                {i.label}
              </Button>
            ))}
          </ul>
        </div>

        {/* User icon to go to the login page & Avatar icon to go to the Account page  */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <Link to="/account" className="cursor-pointer">
              <img
                src={user.avatar || "/images/UserAvatar.png"}
                alt={user.name}
                className="w-8 h-8 object-cover rounded-full"
              />
            </Link>
          ) : (
            <Link to="/login" className="cursor-pointer">
              <BiUser className="w-4 h-4" />
            </Link>
          )}
        </div>

        <MobileMenu user={user} />
      </div>
    </nav>
  );
};

export default Navbar;
