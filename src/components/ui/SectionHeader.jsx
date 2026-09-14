import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const SectionHeader = ({ title, subtitle, icon, linkTo }) => {
  return (
    <div className="flex justify-between items-end mb-8">
      <div>
        <h2 className="text-2xl font-bold flex items-center gap-2">
          {icon && <span className="text-purple-400">{icon}</span>} {title}
        </h2>
        <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
      </div>
      <Link
        to={linkTo || "/search"}
        className="text-sm text-gray-400 hover:text-red-400 flex items-center gap-1 transition-colors"
      >
        View All
        <ChevronRight className="w-4 h-4" />
      </Link>
    </div>
  );
};

export default SectionHeader;
