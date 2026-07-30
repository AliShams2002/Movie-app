import { Bird, Camera, Tv } from "lucide-react";
import React from "react";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTelegram,
  BsWhatsapp,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-12 pb-6 px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-right">
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-2xl font-bold text-red-500 mb-4 tracking-wider">
            CINEMA
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-light">
            بزرگترین مرجع دانلود و تماشای فیلم، سریال و انیمیشن با کیفیت بالا.
          </p>
          <div className="flex gap-4 mt-6">
            <div className="text-sx p-1 rounded-full bg-white/5 hover:bg-red-500/20 flex items-center justify-center text-gray-400 hover:text-red-400 transition-colors border border-white/5">
              <Tv />
            </div>
            <div className="text-sx p-1 rounded-full bg-white/5 hover:bg-red-500/20 flex items-center justify-center text-gray-400 hover:text-red-400 transition-colors border border-white/5">
              <Bird />
            </div>
            <div className="text-sx p-1 rounded-full bg-white/5 hover:bg-red-500/20 flex items-center justify-center text-gray-400 hover:text-red-400 transition-colors border border-white/5">
              <Camera />
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-white tracking-wide">
            دسترسی سریع
          </h4>
          <ul className="space-y-3 text-sm text-gray-500 font-light">
            <li>
              <Link to="/movies" className="hover:text-red-400 transition">
                فیلم‌های سینمایی
              </Link>
            </li>
            <li>
              <Link to="/series" className="hover:text-red-400 transition">
                سریال‌های جدید
              </Link>
            </li>
            <li>
              <Link to="/search" className="hover:text-red-400 transition">
                جستجوی پیشرفته
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-white tracking-wide">پشتیبانی</h4>
          <ul className="space-y-3 text-sm text-gray-500 font-light">
            <li>
              <a href="#" className="hover:text-red-400 transition">
                تماس با ما
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-400 transition">
                سوالات متداول
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-white tracking-wide">قوانین</h4>
          <ul className="space-y-3 text-sm text-gray-500 font-light">
            <li>
              <a href="#" className="hover:text-red-400 transition">
                حریم خصوصی
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-400 transition">
                شرایط استفاده
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-600 mt-12 border-t border-white/5 pt-8 tracking-wider">
        © 2026 Cinema Project. طراحی شده با React & Tailwind CSS.
      </div>
    </footer>
  );
};

export default Footer;
