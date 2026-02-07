import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-[#1f1f1f] to-[#0f0f0f] text-white">
      {/* ================= Footer ================= */}
      <footer className=" border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
          {/* About */}
          <div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-orange-500 mb-4"></div>
            <p className="text-gray-400 leading-6">
              بهترین پلتفرم نمایش آنلاین فیلم و سریال ایرانی با کیفیت بالا و
              محتوای متنوع
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">شرکت</h4>
            <ul className="space-y-2 text-gray-400">
              <li>درباره ما</li>
              <li>تماس با ما</li>
              <li>فرصت‌های شغلی</li>
              <li>اخبار</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">پشتیبانی</h4>
            <ul className="space-y-2 text-gray-400">
              <li>مرکز پشتیبانی</li>
              <li>سوالات متداول</li>
              <li>شرایط استفاده</li>
              <li>حریم خصوصی</li>
            </ul>
          </div>

          {/* Content */}
          <div>
            <h4 className="font-bold mb-4">محتوا</h4>
            <ul className="space-y-2 text-gray-400">
              <li>فیلم‌ها</li>
              <li>سریال‌ها</li>
              <li>جدیدترین‌ها</li>
              <li>محبوب‌ترین‌ها</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-6 text-xs text-gray-500 flex flex-col md:flex-row items-center justify-between px-6 max-w-7xl mx-auto">
          <span>© 2024 تمامی حقوق محفوظ است.</span>
          <span>Powered by Readdy</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
