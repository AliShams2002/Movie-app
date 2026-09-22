import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export const MovieSlider = ({
  children,
  autoplay = true,
  delay = 3000,
  spaceBetween = 16,
  slidesPerViewPc = 5,
  showNavigation = false,
  showPagination = false,
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation={showNavigation}
      pagination={showPagination ? { clickable: true } : false}
      autoplay={autoplay ? { delay, disableOnInteraction: false } : false}
      spaceBetween={spaceBetween}
      breakpoints={{
        320: { slidesPerView: 2 },
        640: { slidesPerView: 3 },
        1024: { slidesPerView: 5 },
        1280: { slidesPerView: slidesPerViewPc },
      }}
      className="w-full"
    >
      {children}
    </Swiper>
  );
};

export const HeroSlider = ({ children }) => {
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
