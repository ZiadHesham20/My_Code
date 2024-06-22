import React from 'react';

export default function Hero() {
  return (
    <>
      <section className="pb-36  lg:pb-0 lg:h-dvh z-30 pt-5 relative overflow-hidden">
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
                fill-opacity="0.12"
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
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                <stop stop-color="#B224EF" />
                <stop offset="1" stop-color="#7579FF" />
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
        <div className="grid grid-cols-12 lg:h-dvh items-start  justify-items-center">
          <div
            className="col-span-12 lg:col-span-6 relative mt-20"
            id="contactHeroButton"
          >
            <h1 className="md:text-8xl text-[55.21px] leading-snug text-[var(--mainColor)] font-semibold">
              Hi, I am <br />
              Hassan 🎨
            </h1>
            <p className="max-w-[300px] md:max-w-[370px] md:text-sm  font-light leading-5 my-8">
              I am a UI/UX Designer, I like to make interfaces simple and
              aesthetically pleasing for users; The idea is not to create an
              interface for creating it, it is that users prefer you because
              your product is easy to use.
            </p>
            <button className="active:scale-95 transition-all ease-in-out w-[182.88px] h-[46.01px] md:w-[286px] md:h-[68px] bg-gradient-to-r from-[var(--mainGradient1)] to-[var(--mainGradient2)] rounded-[16px] text-white font-semibold text-[13.8px] md:text-2xl flex justify-center items-center">
              Contact Me!{' '}
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
                  stroke-width="2.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.6348 16.8241L15.4481 12.9999L11.6348 9.17578"
                  stroke="white"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="col-span-6 lg:block hidden z-30 me-20">
            <figure className="w-full ">
              <img
                src="./Allura UI Windows.svg"
                className="w-[959px] "
                alt="svg image"
              />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
