import Flicking from '@egjs/react-flicking';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination,Navigation } from 'swiper/modules';


export default function SliderComponent({ projectList }) {
  let screenWidth = window.screen.width
  useEffect(() => {
    console.log(screenWidth);
  }, [screenWidth])
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return <>
  <Swiper
  navigation={screenWidth < 850?false:true} modules={[Navigation]}
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
        <SwiperSlide>
       <span
         key={idx}
         className="relative w-[100%] h-[120px] md:h-[260px] bg-white rounded-[16.29px] md:rounded-[40px] customShadow flex items-center justify-center mt-10"
       >
         <div className="absolute -top-[55%] md:-top-[40%] lg:-top-[55%] lg:left-[7%] ">
           <img
             src={elem.image}
             className="w-[190px] h-[105.9px] md:w-[280px] md:h-[200px] lg:w-[400px] lg:h-[250px] rounded-[16px] projectImageShadow object-cover"
             alt="projectName"
           />
         </div>
         <div className="px-5 mt-5 lg:px-8 md:mt-10 lg:mt-16 w-full">
         <Link to={`/categoryDetails/${elem.link}`} onClick={()=>{document.documentElement.style.scrollBehavior = 'auto'}}>
           <h4 className="text-[10px] md:text-[24px] gradiantText font-semibold">
             {elem.name}
           </h4>
           </Link>
           <p className={`text-[6px] md:text-[12px] lg:text-[14px] text-[var(--thirdColor)]`}>
             {elem.tags}
           </p>
         </div>
       </span>
       </SwiperSlide>
     ))}
      </Swiper>
  </>
    // <Flicking
    //   moveType="freeScroll"
    //   horizontal={true}
    //   align={{ camera: '0%', panel: '40px' }}
    //   cameraClass="gap-x-5 md:gap-x-10 "
    // >
    //   {projectList.map((elem, idx) => (
       
    //     <span
    //       key={idx}
    //       className="relative w-[100%] h-[120px] md:w-[518px] md:h-[276px] bg-white rounded-[16.29px] md:rounded-[40px] customShadow flex items-end justify-center"
    //     >
    //       <div className="absolute -top-[40%] md:left-[10%] ">
    //         <img
    //           src={elem.image}
    //           className="w-[190px] h-[105.9px] md:w-[417.08px] md:h-[260px] rounded-[16px] projectImageShadow object-cover"
    //           alt="projectName"
    //         />
    //       </div>
    //       <div className="py-5 md:py-10 w-4/5">
    //       <Link to={`/categoryDetails/${elem.link}`} onClick={()=>{document.documentElement.style.scrollBehavior = 'auto'}}>
    //         <h4 className="text-[10px] md:text-[24px] gradiantText font-semibold">
    //           {elem.name}
    //         </h4>
    //         </Link>
    //         <p className={`text-[7px] md:text-[14px] text-[var(--thirdColor)]`}>
    //           {elem.tags}
    //         </p>
    //       </div>
    //     </span>
       
    //   ))}
    // </Flicking>
{/* <div className="slider-container ">
      <Slider {...settings}>
      {projectList.map((elem, idx) => (
       
       <div
         key={idx}
         className="relative w-[100%] h-[120px] md:w-[518px] md:h-[276px] bg-white rounded-[16.29px] md:rounded-[40px] customShadow flex items-end justify-center "
       >
         <div className="absolute -top-[40%] md:left-[10%] ">
           <img
             src={elem.image}
             className="w-[190px] h-[105.9px] md:w-[417.08px] md:h-[260px] rounded-[16px] projectImageShadow object-cover"
             alt="projectName"
           />
         </div>
         <div className="py-5 md:py-10 w-4/5">
         <Link to={`/categoryDetails/${elem.link}`} onClick={()=>{document.documentElement.style.scrollBehavior = 'auto'}}>
           <h4 className="text-[10px] md:text-[24px] gradiantText font-semibold">
             {elem.name}
           </h4>
           </Link>
           <p className={`text-[7px] md:text-[14px] text-[var(--thirdColor)]`}>
             {elem.tags}
           </p>
         </div>
       </div>
      
     ))}
      </Slider>
    </div> */}

}
