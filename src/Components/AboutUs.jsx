import React from 'react';

export default function AboutUs() {
  return (
    <div className="md:h-[782px] lg:h-[800px] relative overflow-hidden mb-16 md:mb-0 " id='aboutUs'>
      {/* title */}
      <h2 className="md:text-[64px] text-5xl font-semibold gradiantText text-center py-8 md:py-16 lg:py-8" >
        About Us
      </h2>
      {/* SVG LAYER */}
      <figure className="absolute top-0 bottom-0 left-0 right-0">
        <img
          src="/Vector-Cuadros.svg"
          className="w-full scale-90"
          alt="grid vector image"
        />
      </figure>
      {/* ABOUT ME RECTANGLE */}
      <div className="relative md:flex justify-center items-center lg:h-dvh  " id='aboutUsSection'>
        <div  className='w-full md:w-1/2 flex justify-center' id='slogan'>
          <h2 className='text-3xl lg:text-6xl ps-3 text-white  slogan leading-snug'><span className='text-[var(--secondryColor)] lg:text-[93px] text-5xl'>Unleashing</span> Your Brand’s Full Potential  !</h2>
        </div>
        <div className='w-full mt-5 md:w-1/2 flex md:justify-start px-5 md:px-0' id='aboutContent'>
          <div className='ps-3'>
          <h3 className="text-2xl md:text-5xl text-white mb-5">Who are we?</h3>
          <p className='text-white md:max-w-[23rem] lg:max-w-[30rem]'>My Code is a skilled agency located in Cairo, Egypt, specializing in programming, graphic design, video editing, animation, and architectural design. With over five years of experience, our dedicated team has built a solid reputation for delivering high-quality projects for prominent brands and clients. We pride ourselves on our efficiency, creativity, and competitive edge, ensuring your vision is brought to life with precision and excellence.</p>
          </div>
        </div>
      </div>

      {/* svg around this div */}
      <figure className=" absolute left-[12.65px] md:-left-4 lg:left-0 top-[7.5] lg:top-[14%] w-[40.23px] h-[19.25px] md:w-[93.08px] md:h-[44.53px] lg:w-auto lg:h-auto" id='aboutUsFirstsvg'>
        <img src="/Patron de Puntos6.svg" className="w-full" alt="svg" />
      </figure>
      <figure className="lg:block hidden absolute top-[50%] md:bottom-[15%] md:-right-16 lg:right-0 right-0 w-[48.69px] h-[23.29px] md:w-[112.64px] md:h-[53.89px] lg:w-auto lg:h-auto" id='aboutUsSecondsvg'>
        <img src="/Patron de Puntos10.svg" className="w-full" alt="svg" />
      </figure>
    </div>
  );
}
