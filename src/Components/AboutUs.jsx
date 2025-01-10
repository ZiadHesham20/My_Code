import React from 'react';
import videoo from "./mycodefinal.mp4";

/*********************************************************** */

export default function AboutUs() {
  return (
    <div className="about-us-container px-4">
      {/* عنوان "About Us" */}
      <h1
  className="text-5xl font-bold text-center text-purple-700 mb-10 lg:mt-10"
>
  About Us
</h1>


      {/* قسم الفيديو */}
      <section className="video-section mb-10 flex justify-center">
        <video
          className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-auto border-8 border-[var(--secondryColor)] rounded-lg shadow-lg"
          autoPlay={true}
          loop
          muted
          controls
        >
          <source src={videoo} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </section>

      {/* قسم النصوص الأول */}
      <section className="text-section mb-8">
        <div className="w-full md:w-1/2 flex justify-center" id="slogan">
          <h2 className="text-3xl lg:text-6xl ps-3 text-white slogan leading-snug">
            <span className="text-[var(--secondryColor)] lg:text-[93px] text-5xl">
              Unleashing
            </span>{" "}
            Your Brand’s Full Potential!
          </h2>
        </div>
      </section>

      {/* قسم النصوص الثاني */}
      <section className="small-text-section">
        <div className="ps-3 flex justify-end">
          <div className="text-right">
            <h3 className="text-2xl md:text-5xl lg:text-3xl text-white mb-5">
              Who are we?
            </h3>
            <p className="text-white md:max-w-[30rem] lg:max-w-[40rem] text-lg lg:text-base">
              My Code is an agency located in Cairo, Egypt, specializing in programming, graphic design, video editing, animation, and architectural design. With over five years of experience, our dedicated team has built a solid reputation for delivering high-quality projects for prominent brands and clients. We pride ourselves on our efficiency, creativity, and competitive edge, ensuring your vision is brought to life with precision and excellence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

