import React, { useState } from 'react';

const BlogCard = ({ blog }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(blog.likes);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fa-IR', options);
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('fa-IR').format(num);
  };

  return (
    <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={blog.image} 
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
          }}
        />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full backdrop-blur-sm bg-opacity-90">
            {blog.category || "مقاله"}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Meta Info */}
        <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
              {blog.author.charAt(0)}
            </div>
            <span className="font-medium">{blog.author}</span>
          </div>
          <span className="flex items-center">
            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
            </svg>
            {formatDate(blog.datePublished)}
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-bold text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors duration-300">
          {blog.title}
        </h3>

        {/* Content Preview */}
        <p className="mb-6 text-gray-600 line-clamp-3 leading-relaxed">
          {blog.content}
        </p>

        {/* Stats and Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          {/* Stats */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-1 rtl:space-x-reverse transition-all duration-300 ${
                liked ? 'text-red-600' : 'text-gray-500 hover:text-red-500'
              }`}
              aria-label="لایک"
            >
              <svg 
                className={`w-5 h-5 transition-transform duration-300 ${liked ? 'scale-110 fill-current' : 'stroke-current'}`} 
                strokeWidth={liked ? 0 : 2}
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span className="font-medium">{formatNumber(likeCount)}</span>
            </button>

            <div className="flex items-center space-x-1 rtl:space-x-reverse text-gray-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span className="font-medium">{formatNumber(blog.seen)}</span>
            </div>

            <div className="flex items-center space-x-1 rtl:space-x-reverse text-gray-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <span className="font-medium">0</span>
            </div>
          </div>

          {/* Read More Button */}
          <button className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300 flex items-center space-x-1 rtl:space-x-reverse group">
            <span>مطالعه مقاله</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

// Component for displaying multiple blog cards
const BlogCardsGrid = () => {
  // نمونه دیتای استاتیک
  const sampleBlogs = [
    {
      id: 1,
      title: "آموزش کامل React.js از مبتدی تا پیشرفته",
      content: "در این مقاله به بررسی جامع مفاهیم ری‌اکت از مبانی اولیه تا مباحث پیشرفته مانند هوک‌ها، کانتکست و بهینه‌سازی پرداخته‌ایم. این راهنما برای همه سطوح مناسب است.",
      author: "علی محمدی",
      image: "/images/hero.jpg",
      likes: 1245,
      seen: 8560,
      datePublished: "2024-01-15",
      category: "توسعه وب"
    },
    {
      id: 2,
      title: "اصول طراحی UI/UX مدرن در سال 2024",
      content: "طراحی رابط کاربری و تجربه کاربری همواره در حال تحول است. در این مقاله جدیدترین ترندها و بهترین تمرین‌های طراحی را بررسی کرده‌ایم.",
      author: "سارا احمدی",
      image: "/images/hero.jpg",
      likes: 890,
      seen: 4321,
      datePublished: "2024-01-10",
      category: "طراحی"
    },
    {
      id: 3,
      title: "بهینه‌سازی عملکرد در اپلیکیشن‌های React",
      content: "راهکارهای عملی برای بهبود سرعت و کارایی اپلیکیشن‌های ری‌اکت. شامل تکنیک‌های لزی لودینگ، مموایزیشن و کداسپلیتینگ.",
      author: "رضا کریمی",
      image: "/images/hero.jpg",
      likes: 1567,
      seen: 9210,
      datePublished: "2024-01-05",
      category: "بهینه‌سازی"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">وبلاگ آموزشی</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">جدیدترین مقالات و آموزش‌ها در حوزه توسعه وب و طراحی</p>
        </header>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleBlogs.map(blog => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-12 p-6 bg-white rounded-2xl shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">آمار کلی</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
              <div>
                <p className="text-sm text-gray-600">کل بازدیدها</p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatNumber(sampleBlogs.reduce((sum, blog) => sum + blog.seen, 0))}
                </p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
              <div>
                <p className="text-sm text-gray-600">کل لایک‌ها</p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatNumber(sampleBlogs.reduce((sum, blog) => sum + blog.likes, 0))}
                </p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
              <div>
                <p className="text-sm text-gray-600">تعداد مقالات</p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatNumber(sampleBlogs.length)}
                </p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardsGrid;

// Utility function for formatting numbers (can be moved to a separate file)
const formatNumber = (num) => {
  return new Intl.NumberFormat('fa-IR').format(num);
};