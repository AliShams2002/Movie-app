import { Bird, Camera, Tv } from "lucide-react";
import { FOOTER_ITEMS } from "../../utils/constants";
import Button from "../common/Button";

const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-10 pb-4 px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 text-right">
        <div className="flex flex-col items-start justify-center">
          {/* Logo */}
          <a
            href="/"
            className="text-2xl font-bold text-red-500 tracking-wider drop-shadow-md"
          >
            CINEMA
          </a>
          {/* Subtitle */}
          <p className="text-gray-500 text-start text-sm leading-relaxed font-light">
            The largest resource for downloading and watching high-quality
            movies, series, and animations.
          </p>
          {/* Icons */}
          <div className="flex items-center justify-start self-end gap-2 mt-3">
            <IconItem icon={<Tv />} />
            <IconItem icon={<Bird />} />
            <IconItem icon={<Camera />} />
          </div>
        </div>
        {/* Quick Access nav */}
        <div className="text-start">
          <h4 className="font-bold mb-4 text-white tracking-wide">
            Quick Access
          </h4>
          <div className="flex flex-col gap-2 text-sm text-gray-500 font-light">
            {FOOTER_ITEMS.QUICK_ACCESS.map((i, index) => (
              <Button
                key={index}
                type="link"
                action={i.path}
                className="hover:text-red-400 transition-colors duration-150"
              >
                {i.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Support nav */}
        <div className="text-start">
          <h4 className="font-bold mb-4 text-white tracking-wide">Support</h4>
          <div className="flex flex-col gap-2 text-sm text-gray-500 font-light">
            {FOOTER_ITEMS.SUPPORT.map((i, index) => (
              <Button
                key={index}
                type="link"
                action={i.path}
                className="hover:text-red-400 transition-colors duration-150"
              >
                {i.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Rules nav */}
        <div className="text-start">
          <h4 className="font-bold mb-4 text-white tracking-wide">Rules</h4>
          <div className="flex flex-col gap-2 text-sm text-gray-500 font-light">
            {FOOTER_ITEMS.RULES.map((i, index) => (
              <Button
                key={index}
                type="link"
                action={i.path}
                className="hover:text-red-400 transition-colors duration-150"
              >
                {i.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-600 mt-6 border-t border-white/5 pt-4 tracking-wider">
        &copy; 2026 <a href="https://www.shams-js.ir">Shams-js</a> - All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;

const IconItem = ({ icon }) => {
  return (
    <div className="text-sx p-2 rounded-full hover:bg-white/5 flex items-center justify-center text-gray-400 hover:text-red-400 transition-colors border border-white/5 duration-150">
      {icon}
    </div>
  );
};
