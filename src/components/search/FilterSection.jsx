import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export const FilterSection = ({
  icon,
  label,
  options,
  selectedValue,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="border-b border-gray-800 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-right text-sm font-medium text-gray-300 hover:text-white transition-colors"
      >
        <span className="flex items-center gap-2">
          {icon}
          {label}
        </span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-2 space-y-1"
          >
            {options.map((opt) => (
              <label
                key={opt.value}
                className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors group"
              >
                <input
                  type="radio"
                  name={opt.label}
                  value={opt.value}
                  checked={selectedValue == opt.value}
                  onChange={() => onChange(opt.value)}
                  className="w-4 h-4 text-red-500 bg-gray-700 border-gray-600 focus:ring-red-500 focus:ring-2"
                />
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                  {opt.label}
                </span>
              </label>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
