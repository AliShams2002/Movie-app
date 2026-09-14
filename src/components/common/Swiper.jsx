import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { useState } from "react";

export const MovieSilder = ({
  children,
  autoplay = true,
  delay = 3000,
  spaceBetween = 30,
  slidesPerViewPc = 5,
}) => {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={
          autoplay
            ? {
                delay: delay,
                disableOnInteraction: false,
              }
            : false
        }
        spaceBetween={spaceBetween}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: slidesPerViewPc },
        }}
        className="!pb-10 w-full"
      >
        {children}
      </Swiper>

      {/* Custom Styling For Arrows */}
      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          width: 40px;
          height: 40px;
          padding: 5px;
          border-radius: 999px;
          backdrop-filter: blur(4px);
          transition: 0.2s;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(0, 0, 0, 0.6);
        }

        .swiper-pagination-bullet {
          width: 8px !important;
          height: 8px !important;
          background: rgba(255, 255, 255, 0.3) !important;
          opacity: 1 !important;
          border-radius: 4px !important;
          margin: 0 4px !important;
          transition: all 0.3s ease !important;
        }

        .swiper-pagination-bullet-active {
          width: 15px !important;
          background: #dc2626 !important;
          border-radius: 10px !important;
        }
      `}</style>
    </div>
  );
};

export const MovieSlider2 = ({ children, autoplay = true, delay = 3000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Autoplay]}
        centeredSlides={true}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        autoplay={
          autoplay
            ? {
                delay: delay,
                disableOnInteraction: false,
              }
            : false
        }
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1100: { slidesPerView: 5 },
        }}
        className="!pb-14 w-full h-full pt-4"
      >
        {Array.isArray(children) &&
          children.map((child, index) => (
            <SwiperSlide key={index}>
              <div
                className={`transition-all duration-500 ${
                  index === activeIndex
                    ? "scale-100 blur-0 opacity-100"
                    : "scale-90 blur-sm opacity-60"
                }`}
              >
                {child}
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* Pagination Custom Style */}
      <style>{`
        .swiper-pagination-bullet {
          background: #444;
          opacity: 1;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background: #dc2626;
          width: 20px;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export const MovieSlider3 = ({ children }) => {
  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay, EffectFade, Navigation]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="h-full"
      >
        {children}
      </Swiper>

      {/* Custom Pagination Style */}
      <style>{`
        .swiper-pagination {
          bottom: 10px !important;
        }
        .swiper-button-next,
        .swiper-button-prev {
          background: rgba(24, 84, 72, 0.4);
          color: white;
          width: 45px;
          height: 45px;
          padding: 10px;
          border-radius: 999px;

          transition: 0.2s;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(24, 84, 72, 0.8);
        }
        .swiper-pagination-bullet {
          width: 32px !important;
          height: 4px !important;
          background: rgba(255, 255, 255, 0.3) !important;
          opacity: 1 !important;
          border-radius: 4px !important;
          margin: 0 4px !important;
          transition: all 0.3s ease !important;
        }
        .swiper-pagination-bullet-active {
          width: 40px !important;
          background: #dc2626 !important;
          border-radius: 10px !important;
        }
      `}</style>
    </>
  );
};
