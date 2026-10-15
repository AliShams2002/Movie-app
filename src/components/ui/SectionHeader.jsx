import { ChevronRight } from "lucide-react";
import Button from "../common/Button";

const SectionHeader = ({ title, subtitle, icon, linkTo }) => {
  return (
    <div className="flex justify-between items-end mb-8">
      {/* Textual content */}
      <div>
        <h2 className="text-2xl font-bold flex items-center gap-2">
          {icon && <span className="text-purple-400">{icon}</span>} {title}
        </h2>
        <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
      </div>
      {/* Btn */}
      <Button
        type="link"
        action={linkTo || "/search"}
        className="text-sm text-gray-400 hover:text-red-400 flex items-center gap-1 transition-colors"
      >
        View All
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default SectionHeader;
