import React from 'react';

export default function AboutUs() {
  return (
    <section className=" md:h-[782px] lg:h-[1071px] relative overflow-hidden mb-16 md:mb-0">
      {/* title */}
      <h2 className="md:text-[64px] text-[24px] font-semibold text-white text-center py-8 md:py-16 lg:py-8">
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
      <div className="relative md:flex justify-center items-center md:pt-20">
        <div  className='w-full md:w-1/2 flex justify-center'>
          <figure className='w-3/4'>
            <img src="/logo-12.png" className="w-full rounded-full" alt="My Code Logo" />
          </figure>
        </div>
        <div className='w-full md:w-1/2 flex md:justify-start px-5 md:px-0'>
          <div>
          <h3 className="text-2xl md:text-5xl text-white mb-5">Who are we?</h3>
          <p className='text-white  md:max-w-[30rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, minus corrupti omnis quisquam aut non iure esse cum atque, error mollitia exercitationem temporibus laudantium iusto quidem sunt nisi nemo rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque consectetur hic molestiae nemo impedit aliquam nulla iusto natus harum, corrupti eius possimus, vitae magni nisi assumenda commodi minima placeat officia.</p>
          </div>
        </div>
      </div>

      {/* svg around this section */}
      <figure className="absolute left-[12.65px] md:-left-4 lg:left-0 top-[14%] w-[40.23px] h-[19.25px] md:w-[93.08px] md:h-[44.53px] lg:w-auto lg:h-auto">
        <img src="/Patron de Puntos6.svg" className="w-full" alt="svg" />
      </figure>
      <figure className="absolute top-[50%] md:bottom-[15%] md:-right-16 lg:right-0 right-0 w-[48.69px] h-[23.29px] md:w-[112.64px] md:h-[53.89px] lg:w-auto lg:h-auto">
        <img src="/Patron de Puntos10.svg" className="w-full" alt="svg" />
      </figure>
    </section>
  );
}
