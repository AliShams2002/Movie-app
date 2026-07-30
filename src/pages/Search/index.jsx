import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, SlidersHorizontal, X, ChevronDown, Star, Calendar, Clock, Film, Filter, Play, Loader2 } from 'lucide-react';

// --- داده‌های ساختگی (شبیه‌سازی API) ---
// در پروژه واقعی، این داده‌ها از بک‌ند می‌آیند
const ALL_MOVIES = Array.from({ length: 50 }).map((_, i) => ({
  id: i + 1,
  title: `Movie Title ${i + 1}`,
  year: 2000 + (i % 24),
  rating: (Math.random() * 2 + 7).toFixed(1), // بین 7 تا 9
  genre: ['اکشن', 'درام', 'کمدی', 'علمی تخیلی', 'وحشت', 'جنایی'][Math.floor(Math.random() * 6)],
  popularity: Math.floor(Math.random() * 1000),
  img: `https://images.unsplash.com/photo-${1500000000 + i}?w=500&q=80`, // عکس‌های تصادفی مختلف
}));

// --- کامپوننت فیلتر (Accordion) ---
const FilterSection = ({ icon, label, options, selectedValue, onChange }) => {
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
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-2 space-y-1"
          >
            {options.map((opt) => (
              <label key={opt} className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors group">
                <input 
                  type="radio" 
                  name={label} 
                  value={opt} 
                  checked={selectedValue === opt}
                  onChange={() => onChange(opt)}
                  className="w-4 h-4 text-red-500 bg-gray-700 border-gray-600 focus:ring-red-500 focus:ring-2"
                />
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{opt}</span>
              </label>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- کامپوننت اصلی ---
const SearchPage = () => {
  // استیت‌های فیلتر
  const [filters, setFilters] = useState({
    genre: 'همه',
    year: 'همه',
    rating: 'همه',
    sortBy: 'محبوب‌ترین'
  });
  
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false); // برای موبایل
  
  // استیت‌های اینفینیتی اسکرول
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  // هوک تشخیص رسیدن به انتهای صفحه
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  // --- ۱. منطق فیلتر کردن داده‌ها ---
  // هر وقت فیلترها یا متن جستجو تغییر کرد، لیست را ریست می‌کنیم
  const filteredData = useMemo(() => {
    let data = [...ALL_MOVIES];

    // فیلتر جستجو بر اساس عنوان
    if (searchQuery.trim() !== '') {
      data = data.filter(m => m.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    // فیلتر ژانر
    if (filters.genre !== 'همه') {
      data = data.filter(m => m.genre === filters.genre);
    }

    // فیلتر سال
    if (filters.year !== 'همه') {
      if (filters.year === '2020-2024') data = data.filter(m => m.year >= 2020 && m.year <= 2024);
      else if (filters.year === '2010-2019') data = data.filter(m => m.year >= 2010 && m.year <= 2019);
      else if (filters.year === '2000-2009') data = data.filter(m => m.year >= 2000 && m.year <= 2009);
      else if (filters.year === 'قبل از 2000') data = data.filter(m => m.year < 2000);
    }

    // فیلتر امتیاز
    if (filters.rating !== 'همه') {
      const score = parseFloat(filters.rating.replace('بالای ', ''));
      data = data.filter(m => parseFloat(m.rating) >= score);
    }

    // مرتب‌سازی (Sorting)
    if (filters.sortBy === 'جدیدترین') {
      data.sort((a, b) => b.year - a.year);
    } else if (filters.sortBy === 'امتیاز بالا') {
      data.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    } else { // محبوب‌ترین
      data.sort((a, b) => b.popularity - a.popularity);
    }

    return data;
  }, [filters, searchQuery]);

  // --- ۲. منطق لود کردن بخش‌بخش (اینفینیتی اسکرول) ---
  const loadMoreMovies = () => {
    if (loading || !hasMore) return;

    setLoading(true);
    
    // شبیه‌سازی تاخیر شبکه (API Call)
    setTimeout(() => {
      const startIndex = page * 6; // هر بار ۶ تا فیلم لود کن
      const endIndex = startIndex + 6;
      const newChunk = filteredData.slice(startIndex, endIndex);

      if (newChunk.length > 0) {
        setDisplayedMovies(prev => [...prev, ...newChunk]);
        setPage(prev => prev + 1);
      } else {
        setHasMore(false); // اگر داده‌ای باقی نمانده بود
      }
      setLoading(false);
    }, 800); // تاخیر ۸۰۰ میلی‌ثانیه برای نمایش لودینگ
  };

  // --- ۳. افکت‌های واکنش‌گرا ---
  // هر وقت فیلترها عوض شد، لیست نمایشی را ریست کن
  useEffect(() => {
    setDisplayedMovies([]);
    setPage(0);
    setHasMore(true);
  }, [filters, searchQuery]);

  // هر وقت به انتهای صفحه رسیدیم و لیست خالی نبود، لود کن
  useEffect(() => {
    if (inView && hasMore && !loading) {
      loadMoreMovies();
    }
  }, [inView, hasMore, loading]);

  // برای بار اول که کامپوننت لود می‌شود، داده‌ها را بگیر
  useEffect(() => {
    if (displayedMovies.length === 0 && hasMore) {
      loadMoreMovies();
    }
  }, [displayedMovies]);

  // --- رندر ---
  return (
    <div className="min-h-screen bg-[#0f1014] text-white font-sans relative pb-20" dir="rtl">
      
      {/* --- Header / Search Input --- */}
      <div className="relative bg-gradient-to-b from-gray-900 to-[#0f1014] pt-24 pb-12 px-6 md:px-12 border-b border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">جستجوی پیشرفته</h1>
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="نام فیلم، کارگردان یا بازیگر..."
              className="w-full bg-gray-800/80 border border-gray-700 rounded-2xl py-4 pr-12 pl-14 text-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* --- Main Layout --- */}
      <div className="container mx-auto max-w-7xl px-6 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Filters Panel */}
        <div className="lg:col-span-3 relative">
          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="lg:hidden w-full flex items-center justify-center gap-2 bg-gray-800 p-4 rounded-xl mb-4 border border-gray-700 text-white"
          >
            <Filter className="w-5 h-5" />
            {isFilterOpen ? 'بستن فیلترها' : 'نمایش فیلترها'}
          </button>

          {/* Filter Content */}
          <motion.div 
            initial={false}
            animate={{ height: isFilterOpen ? 'auto' : '0', opacity: isFilterOpen ? 1 : 0 }}
            className={`lg:h-auto lg:opacity-100 overflow-hidden lg:overflow-visible bg-gray-900/50 rounded-2xl p-6 border border-gray-800 backdrop-blur-sm sticky top-24`}
          >
            <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5 text-red-500" />
                فیلترها
              </h3>
              <button 
                onClick={() => setFilters({ genre: 'همه', year: 'همه', rating: 'همه', sortBy: 'محبوب‌ترین' })}
                className="text-xs text-red-400 hover:text-red-300 font-medium"
              >
                پاک کردن همه
              </button>
            </div>

            <div className="space-y-2">
              {/* فیلتر مرتب‌سازی (Sort) */}
              <div className="mb-4">
                 <label className="block text-xs text-gray-400 mb-2">مرتب‌سازی بر اساس</label>
                 <select 
                   value={filters.sortBy}
                   onChange={(e) => setFilters({...filters, sortBy: e.target.value})}
                   className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500"
                 >
                   <option value="محبوب‌ترین">محبوب‌ترین</option>
                   <option value="جدیدترین">جدیدترین</option>
                   <option value="امتیاز بالا">امتیاز بالا</option>
                 </select>
              </div>

              <FilterSection 
                icon={<Film className="w-4 h-4 text-blue-400" />} 
                label="ژانر" 
                options={['همه', 'اکشن', 'درام', 'کمدی', 'علمی تخیلی', 'وحشت', 'جنایی']} 
                selectedValue={filters.genre}
                onChange={(val) => setFilters({...filters, genre: val})}
              />
              <FilterSection 
                icon={<Calendar className="w-4 h-4 text-green-400" />} 
                label="سال ساخت" 
                options={['همه', '2020-2024', '2010-2019', '2000-2009', 'قبل از 2000']} 
                selectedValue={filters.year}
                onChange={(val) => setFilters({...filters, year: val})}
              />
              <FilterSection 
                icon={<Star className="w-4 h-4 text-yellow-400" />} 
                label="حداقل امتیاز" 
                options={['همه', 'بالای 8', 'بالای 7', 'بالای 6']} 
                selectedValue={filters.rating}
                onChange={(val) => setFilters({...filters, rating: val})}
              />
            </div>
          </motion.div>
        </div>

        {/* Results Grid */}
        <div className="lg:col-span-9">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">نتایج جستجو <span className="text-gray-400 text-sm font-normal">({filteredData.length} عنوان)</span></h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedMovies.map((movie, index) => (
              <motion.div
                key={movie.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index % 6) * 0.05 }} // Staggered animation
                whileHover={{ y: -5 }}
                className="group bg-gray-900/40 border border-gray-800/50 hover:border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-red-500/10 transition-all duration-300 flex flex-col md:flex-row gap-4 p-3"
              >
                <div className="relative w-full md:w-1/3 aspect-[3/4] md:aspect-[3/4] rounded-xl overflow-hidden shrink-0">
                  <img 
                    src={movie.img} 
                    alt={movie.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 bg-black/80 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 text-xs font-bold text-yellow-400">
                    <Star className="w-3 h-3 fill-current" /> {movie.rating}
                  </div>
                </div>

                <div className="flex flex-col justify-between flex-1 p-2 py-1">
                  <div>
                    <h3 className="font-bold text-lg text-white leading-tight mb-1 group-hover:text-red-400 transition-colors line-clamp-1">
                      {movie.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {movie.year}</span>
                      <span className="text-gray-600">|</span>
                      <span className="line-clamp-1">{movie.genre}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex gap-2">
                       <span className="bg-gray-800 text-[10px] px-2 py-0.5 rounded border border-gray-700 text-gray-300">HD</span>
                    </div>
                    <button className="bg-red-600/80 hover:bg-red-600 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors flex items-center gap-1">
                      <Play className="w-3 h-3 fill-current" /> پخش
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* --- بخش اینفینیتی اسکرول (لودینگ و سنسور انتهای صفحه) --- */}
          <div ref={ref} className="w-full flex justify-center py-8 mt-4">
            {loading && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="flex items-center gap-3 text-gray-400"
              >
                <Loader2 className="w-6 h-6 animate-spin text-red-500" />
                <span>در حال بارگذاری فیلم‌های بیشتر...</span>
              </motion.div>
            )}
            
            {!hasMore && displayedMovies.length > 0 && (
              <div className="text-gray-500 text-sm py-4">
                — همه فیلم‌های موجود نمایش داده شدند —
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default SearchPage;