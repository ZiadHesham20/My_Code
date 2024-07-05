import React from 'react';
import Slider from './Slider';

export default function Projects() {
  const projectList = [
    {
      name: 'Web Development',
      tags: 'Frontend - Backend - Saas',
      image: '/web/webDevelopment3.png',
      link: 'webDevelopment'
    },
    {
      name: 'Graphic Design',
      tags: 'Logos - Posts - Thumbnails - Business Cards - Stories - Illustration - Digital Art - Concept Art - Character Design',
      image: '/graphic.png',
      link: 'graphicDesign'
    },
    {
      name: 'Video Editing',
      tags: 'Intro/Outro - Color Correction - VFX - Youtube Video - Ads Tiktok/Instagram Reels - Short Films - Social Media Storys',
      image: '/Capture.png',
      link: 'videoEditing'
    },
    {
      name: 'Architectural Design',
      tags: 'Interior Design - Exterior Design',
      image: '/interiro.jfif',
      link: 'architecturalDesign'
    },
    {
      name: 'Animation',
      tags: '2D Animation - Motion Graphic - White Board Animation',
      image: '/ykwim-pixlated.gif',
      link: 'animation'
    },
  ];
  return (
    <>
      <section className=" relative overflow-hidden">
        <div className="container grid grid-cols-12   justify-items-center w-11/12 m-auto px-12 pb-20 ">
          {/* title */}
          <div className="col-span-12 relative  justify-self-start w-full md:w-auto">
            <h3 className="font-semibold md:text-6xl text-2xl gradiantText portfolio relative">
              Portfolio
            </h3>
          </div>
          <div className="col-span-12 w-full md:mb-40 md:mt-10 mb-16 mt-5">
            <hr className="border-t-2 border-[var(--secondryColor)] w-full " />
          </div>
          {/* slider */}
          <div className="col-span-12 w-full">
            <Slider projectList={projectList} />
          </div>
        </div>

        {/* svg aroud */}
        <figure className="w-[340px] h-[414.25px] absolute -right-40 ">
          <img src="/Ellipse 39.svg" alt="svg elipse" />
        </figure>
        <figure className="w-[113.24px] h-[55.8px] lg:w-[340px] lg:h-[414.25px] absolute left-0 top-[60%] lg:top-3/4">
          <img src="/Patron de Puntos11.svg" alt="svg elipse" />
        </figure>
      </section>
    </>
  );
}
