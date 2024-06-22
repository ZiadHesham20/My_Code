import React from 'react';

export default function AboutMe() {
  return (
    <section className="lg:mt-72 aboutMeBackground h-[307.2px] md:h-[782px] lg:h-[1071px] relative overflow-hidden  ">
      {/* title */}
      <h2 className="md:text-[64px] text-[24px] font-semibold text-white text-center py-8 md:py-16 lg:py-8">
        About me
      </h2>
      {/* SVG LAYER */}
      <figure className="absolute top-0 bottom-0 left-0 right-0 z-10">
        <img
          src="/Vector-Cuadros.svg"
          className="w-full scale-90"
          alt="grid vector image"
        />
      </figure>
      {/* ABOUT ME RECTANGLE */}
      <div className="flex justify-center items-center md:h-[286.5px] lg:h-dvh aboutMeSvgHigh relative lg:my-0 my-5">
        <div className="relative bg-white flex justify-evenly gap-x-[154.11px] md:gap-x-[287.49px] lg:gap-x-96 z-50 items-center w-[90%] h-[109px] md:w-[675.85px] md:h-[204.2px] lg:w-[1198.96px] lg:h-[363px] rounded-[18.13px] lg:rounded-[60px]">
          {/* Responsibility */}
          <figure className="w-[35.66px] h-[78.99px] md:w-[66.52px]  lg:w-[118px] md:h-auto">
            <img src="/Icono.svg" className="w-full" alt="Responsibility" />
            <figcaption className="text-center flex justify-center">
              <div>
                <p className="font-bold text-[var(--mainColor)] text-[19.34px] md:text-[36.08px] lg:text-[64px]">
                  100%
                </p>
                <p className="text-[var(--thirdColor)] text-[10.88px] md:text-[20.29px] lg:text-4xl font-semibold">
                  Responsibility
                </p>
              </div>
            </figcaption>
          </figure>
          {/* Colombian */}
          <figure className="absolute md:bottom-10 lg:bottom-14 bottom-4 ">
            <div className="flex justify-center items-center bg-gradient-to-r from-[var(--mainGradient1)] to-[var(--mainGradient2)] w-[97.89px] h-[133.38px] md:w-[182.64px] md:h-[249.3px] lg:w-[324px] lg:h-[443px] rounded-[18.13px] lg:rounded-[60px] relative overflow-hidden">
              <figure className="absolute top-0 lg:-top-5 md:-top-3 ">
                <img
                  src="/Mask group.svg"
                  className="w-full"
                  alt="colombia flag"
                />
              </figure>

              <div className="text-center mt-6 lg:mt-0">
                <p className="font-bold text-white text-[19.34px] md:text-[36.08px] lg:text-[64px]">
                  100%
                </p>
                <p className="text-white text-[10.88px] lg:text-4xl font-semibold md:text-[20.29px]">
                  Colombian
                </p>
              </div>
            </div>
          </figure>
          {/* Puntuality */}
          <figure className="w-[35.66px] h-[78.99px] md:w-[66.52px]  lg:w-[118px] md:h-auto">
            <img src="/IconoDate.svg" className="w-full" alt="Puntuality" />
            <figcaption className="text-center flex justify-center ">
              <div>
                <p className="font-bold text-[var(--mainColor)] text-[19.34px] md:text-[36.08px] lg:text-[64px]">
                  100%
                </p>
                <p className="text-[var(--thirdColor)] text-[10.88px] lg:text-4xl font-semibold md:text-[20.29px]">
                  Puntuality
                </p>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
      {/* svg around this section */}
      <figure className="absolute left-[12.65px] md:-left-4 lg:left-0 top-[14%] w-[40.23px] h-[19.25px] md:w-[93.08px] md:h-[44.53px] lg:w-auto lg:h-auto">
        <img src="/Patron de Puntos6.svg" className="w-full" alt="svg" />
      </figure>
      <figure className="absolute bottom-[15%] md:-right-16 lg:right-0 right-0 w-[48.69px] h-[23.29px] md:w-[112.64px] md:h-[53.89px] lg:w-auto lg:h-auto">
        <img src="/Patron de Puntos10.svg" className="w-full" alt="svg" />
      </figure>
    </section>
  );
}
