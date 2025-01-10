import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import required modules
import { Navigation } from 'swiper/modules';

export default function SliderComponent({ projectList }) {
  const screenWidth = window.screen.width;

  return (
    <Swiper
      navigation={screenWidth < 850 ? false : true}
      modules={[Navigation]}
      slidesPerView={3}
      spaceBetween={30}
      breakpoints={{
        200: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      className="mySwiper"
    >
      {projectList.map((elem, idx) => (
        <SwiperSlide key={idx}>
          <Link to={`/categoryDetails/${elem.link}`} onClick={() => { document.documentElement.style.scrollBehavior = 'auto' }}>
            <div className="relative w-full bg-white rounded-[16px] shadow-lg overflow-hidden mt-10 transform transition-all duration-300 hover:scale-105">
              <div className="w-full h-[200px] bg-cover bg-center" style={{ backgroundImage: `url(${elem.image})` }}>
                {/* Optional: If you want to add specific styles for the image */}
              </div>
              <div className="px-5 py-6">
                <h4 className="text-[20px] md:text-[28px] font-semibold text-gradient">{elem.name}</h4>
                <p className="text-[12px] md:text-[14px] lg:text-[16px] text-[var(--thirdColor)]">{elem.tags}</p>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
