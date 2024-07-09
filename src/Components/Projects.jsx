import React from 'react';

import SliderComponent from './Slider';

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
      image: '/sddefault.jpg',
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
      <div className=" relative overflow-hidden" id='portfolio'>
        <div className="container grid grid-cols-12   justify-items-center w-11/12 m-auto px-12 pb-20 ">
          {/* title */}
          <div className="col-span-12 relative  justify-self-start w-full md:w-auto">
            <h3 className="font-semibold md:text-6xl text-4xl gradiantText  relative" id='portofilioTitle'>
              Portfolio
            </h3>
            <div className='absolute top-[10%] lg:top-[0%] md:top-[8%] md:-left-[100px] -left-[77px] lg:-left-36 ' id='portofilioTitle'>
        <svg className='w-[75.21px] h-[37.07px] md:w-[100px] md:h-[50px] lg:w-[138px] lg:h-[68.01px]'  viewBox="0 0 83 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="13.7518" cy="8.68705" r="8.68705" fill="#EDEEFF"/>
<circle cx="44.5288" cy="8.68705" r="8.68705" fill="#EDEEFF"/>
<circle cx="74.313" cy="8.68705" r="8.68705" fill="#EDEEFF"/>
<circle cx="13.7518" cy="34.0036" r="8.68705" fill="#EDEEFF"/>
<circle cx="44.5288" cy="34.0036" r="8.68705" fill="#EDEEFF"/>
<circle cx="74.313" cy="34.0036" r="8.68705" fill="#EDEEFF"/>
<circle cx="13.7518" cy="59.3202" r="8.68705" fill="#EDEEFF"/>
<circle cx="44.5288" cy="59.3202" r="8.68705" fill="#EDEEFF"/>
<circle cx="74.313" cy="59.3202" r="8.68705" fill="#EDEEFF"/>
</svg>

        </div>
          </div>
          <div className="col-span-12 w-full md:mb-40 md:mt-10 mb-16 mt-5" id='portofilioTitle'>
             <hr className="border-t-2 border-[var(--secondryColor)] w-full " />
          </div>
          {/* slider */}
          <div className="col-span-12 h-full w-full z-50" id='portofilioContent'>
            <SliderComponent projectList={projectList} />
          </div>
        </div>

        {/* svg aroud */}
        <figure className="w-[340px] h-[414.25px] absolute -right-40 ">
          <img src="/Ellipse 39.svg" alt="svg elipse" />
        </figure>
        
      </div>
    </>
  );
}
