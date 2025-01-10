import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
//------------------------

//------------

export default function Hero() {

  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      strokeDashoffset: 0
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      strokeDashoffset: 0, // Adjust this value if needed
      // fill: 'white',
      transition: {
        pathLength: {
          duration: 2,
          ease: "easeInOut",
        },
        strokeDashoffset: {
          duration: 2,
          ease: "easeInOut",
        },
        
      },
    },
  };

  const serviceHero=[{
    title:'Web Development',
    image:"/Developer activity-amico.svg"
  },
  {
    title:'Graphic Design',
    image:"/brand creation-amico.svg"
  },
  {
    title:'Video Editing',
    image:"/Video files-amico.svg"
  },
  {
    title:'Mobile Application',
    image:"/Mobile development-amico.svg"
  },
  {
    title:'Desktop Application',
    image:"/Software code testing-amico.svg"
  },
  {
    title:'Interior/Exterior Design',
    image:"/Interior design-amico.svg"
  },{
    title:'Animation',
    image:"/Animation-amico.svg"
  }]

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass('fade-out');
      setTimeout(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % serviceHero.length);
        setFadeClass('fade-in');
      }, 500);
    }, 3000);

    return () => clearInterval(interval);


  }, [serviceHero.length]);

  return (
    <>
      <div className="py-36 mt-10 lg:pb-0 h-dvh z-30 pt-5 relative overflow-hidden " id='home'>
      {/* <span className='points'></span> 
   <span className='points'></span>
   <span className='points'></span>
   <span className='points'></span>
   <span className='points'></span>
   <span className='points'></span>
   <span className='points'></span>
   <span className='points'></span>
   <span className='points'></span>
   <span className='points'></span>
   <span className='points'></span>
   <span className='points'></span>
   <span className='points'></span>
   <span className='points'></span>
   <span className='points'></span> */}


        {/* background svgs */}
        <div className="absolute top-[100px] left-[-99px]">
          <svg
            width="288"
            height="308"
            viewBox="0 0 249 428"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_16_390)">
              <path
                d="M189 210.652C189 284.61 91.6356 368 17.8696 368C-55.8965 368 -99 239.028 -99 165.07C-99 91.112 -22.5052 60 51.2609 60C125.027 60 189 136.694 189 210.652Z"
                fill="url(#paint0_linear_16_390)"
                fillOpacity="0.12"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_16_390"
                x="-159"
                y="0"
                width="408"
                height="428"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="30"
                  result="effect1_foregroundBlur_16_390"
                />
              </filter>
              <linearGradient
                id="paint0_linear_16_390"
                x1="-99"
                y1="214"
                x2="189"
                y2="214"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#B224EF" />
                <stop offset="1" stopColor="#7579FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute top-[63%] left-[-90px] hidden lg:block">
          <svg
            width="278"
            height="137"
            viewBox="0 0 95 137"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="17.5" cy="17.5" r="17.5" fill="#EDEEFF" />
            <circle cx="77.5" cy="17.5" r="17.5" fill="#EDEEFF" />
            <circle cx="17.5" cy="68.5" r="17.5" fill="#EDEEFF" />
            <circle cx="77.5" cy="68.5" r="17.5" fill="#EDEEFF" />
            <circle cx="17.5" cy="119.5" r="17.5" fill="#EDEEFF" />
            <circle cx="77.5" cy="119.5" r="17.5" fill="#EDEEFF" />
          </svg>
        </div>
        <div className="absolute top-44 right-0 hidden lg:block">
          <svg
            className="z-10"
            width="130"
            height="137"
            viewBox="0 0 130 137"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="17.5" cy="17.5" r="17.5" fill="#EDEEFF" />
            <circle cx="78.5" cy="17.5" r="17.5" fill="#EDEEFF" />
            <circle cx="138.5" cy="17.5" r="17.5" fill="#EDEEFF" />
            <circle cx="17.5" cy="68.5" r="17.5" fill="#EDEEFF" />
            <circle cx="78.5" cy="68.5" r="17.5" fill="#EDEEFF" />
            <circle cx="138.5" cy="68.5" r="17.5" fill="#EDEEFF" />
            <circle cx="17.5" cy="119.5" r="17.5" fill="#EDEEFF" />
            <circle cx="78.5" cy="119.5" r="17.5" fill="#EDEEFF" />
            <circle cx="138.5" cy="119.5" r="17.5" fill="#EDEEFF" />
          </svg>
        </div>
        {/* hero contnet */}
        <div className="grid grid-cols-12 h-dvh md:items-center lg:items-start  justify-items-center pt-20 md:pt-0">
          <div
            className="col-span-12 mt-10 lg:col-span-6 relative "
            
          >
            <figure className='w-full h-[196px] md:h-auto flex justify-center '>
            <img srcSet='/logo-1.webp' src="/logo-1.webp" className="w-3/4 md:w-2/3 rounded-full" alt="My Code Logo" loading="lazy"/>

          </figure>
            
            <div className='flex justify-center '>
            <div className='relative'>
            <h1 className="max-w-[450px] md:max-w-[400px] relative text-lg md:text-xl text-white font-semibold md:font-light leading-5 my-8">
            Are you ready to elevate your brand? 
            </h1>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSd2qEbT3dON9PGlYinAA7SCfLFE-2LdBvhhUio-iO89c0kPbA/viewform?usp=sf_link" className="active:scale-95 transition-all ease-in-out w-[182.88px] h-[46.01px] md:w-[286px] m-auto md:h-[68px] bg-gradient-to-r from-[var(--mainGradient1)] to-[var(--mainGradient2)] hover:from-[#8a1cb9] hover:to-[#5558b9] rounded-[16px] text-white font-semibold text-[13.8px] md:text-2xl flex justify-center items-center hover:transition-all hover:ease-in-out">
              Request Service{' '}
              <svg
                className="ms-3"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.9998 23.8333C18.9829 23.8333 23.8332 18.983 23.8332 13C23.8332 7.01687 18.9829 2.16663 12.9998 2.16663C7.01675 2.16663 2.1665 7.01687 2.1665 13C2.1665 18.983 7.01675 23.8333 12.9998 23.8333Z"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.6348 16.8241L15.4481 12.9999L11.6348 9.17578"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              
            </a>
           
         <figure className='absolute top-24 scale-90 md:scale-100 right-7 md:top-28 md:-right-7 xl:scale-[65%] xl:top-20'>
         <motion.svg initial="hidden"
    animate="visible" width="67" height="174" viewBox="0 0 67 174" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_268_11)">
<motion.path variants={pathVariants} d="M8.50102 1.61569L3.93029 6.10017C3.46695 6.08834 3.00067 6.07884 2.53144 6.07169L7.80068 0.901885L7.80069 0.901882C7.99779 0.708494 8.31436 0.711504 8.50776 0.908621C8.70115 1.10574 8.69813 1.42231 8.50102 1.61569ZM2.50742 9.07167C2.98746 9.07904 3.46412 9.08892 3.93742 9.10129L8.38653 13.636L8.38654 13.636C8.57993 13.8331 8.57687 14.1497 8.37983 14.343L8.37979 14.343C8.18265 14.5364 7.86607 14.5334 7.67271 14.3363L2.50742 9.07167ZM57.7762 33.0098C49.3576 18.7245 32.7705 8.94355 4.36859 8.11287L3.84779 7.58205L4.3276 7.1113C32.9947 7.93508 49.9829 17.8163 58.6377 32.5021C67.5289 47.5891 67.538 67.6083 62.6275 87.7104C57.7137 107.826 47.8531 128.115 36.8784 143.82C31.3906 151.673 25.6157 158.391 20.0296 163.374C14.6429 168.178 9.38955 171.404 4.70714 172.434L4.52193 171.451C8.94927 170.469 14.0373 167.378 19.364 162.627C24.8779 157.71 30.6027 151.054 36.0587 143.246C46.9717 127.63 56.7752 107.454 61.6561 87.4731C66.5402 67.4789 66.4748 47.77 57.7762 33.0098ZM2.93417 8.07874C2.6975 8.07438 2.46004 8.07063 2.22176 8.0675L2.23129 7.06754C2.46598 7.07062 2.69991 7.07429 2.93309 7.07856L2.79054 7.21841L2.43364 7.56858L2.78381 7.92549L2.93417 8.07874Z" stroke="white"/>
</g>
<defs>
<clipPath id="clip0_268_11">
<rect width="67" height="174" fill="white"/>
</clipPath>
</defs>
</motion.svg>
         </figure>
            </div>
            </div>
          </div>
          <div className="col-span-6 lg:block hidden z-30 lg:me-20">
            <figure className="w-full homeServiceImages">
              <img
                src={serviceHero[currentIndex].image}
                className={`2xl:w-[600px] xl:w-[500px] transition-opacity duration-500 ${fadeClass}`}
                alt="svg "
              />
              <figcaption className='flex justify-center'>
                <h2 className='text-3xl text-white font-semibold transition-opacity'>{serviceHero[currentIndex].title}</h2>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}
