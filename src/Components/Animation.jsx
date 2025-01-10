import React from 'react'
import { Link } from 'react-router-dom'
import { IoArrowBackCircleOutline  } from "react-icons/io5";
export default function Animation() {
    const webList = [
        {
          title: "Twilight Reflection",
          src: "/animation/Twilight Reflection.mp4",
          description: "In this evocative digital illustration, a solitary figure stands against a vibrant twilight sky filled with purples, pinks, and deep blues. The person, partially obscured by shadows, is smoking and appears contemplative. They blend into the evening shadows, contrasting with the colorful sky. Utility poles and wires stretch across the scene, adding urban realism, silhouetted against the sunset. The overall mood is one of quiet reflection and melancholy, with the serene, twilight colors enhancing the sense of solitude and contemplation. The artwork captures the emotional transition between day and night through light and shadow."
        },
        {
          title: "Youtube Channel Intro",
          src: "/animation/elements.mp4",
          description: "This 2D animation, created using Photoshop and After Effects, showcases a seamless transformation through various elements. It begins with a realistic drop of water that ripples upon impact. These ripples morph into a blooming flower with detailed petals, which then transform into flickering flames. The flames take the shape of a bird that takes flight, eventually morphing into a human figure. Finally, a crocodile appears and consumes the person, bringing the animation to a dramatic close. Technically, Photoshop is used for detailed frame-by-frame drawings of each element, while After Effects animates the transitions, motion paths, and adds effects like motion blur and particle effects. Artistically, the animation uses distinct color palettes for each transformation and ensures smooth transitions with natural flow. Sound effects and music enhance the narrative and impact, creating a captivating visual story that showcases detailed transformations and seamless transitions."
        },
        {
            title: "Advertising Mockup",
            src: "/animation/logoMockup.mp4",
            description: "An advertising mockup is a visual representation of how an advertisement will look once it is finalized and placed in its intended medium. It typically includes design elements, such as images, text, logos, and branding, arranged in a format that simulates the final output. Mockups are used to present concepts to clients, stakeholders, or team members, allowing them to see the design in context, provide feedback, and make necessary adjustments before the advertisement goes into production."
        },
        {
          title: "Midnight",
          src: "/animation/midnight.mp4",
          description: "Midnight is an evocative and visually captivating video that encapsulates the serene beauty and enigmatic ambiance of the nighttime. Featuring meticulously edited sequences, the video seamlessly blends tranquil natural landscapes with mesmerizing urban scenes, creating a harmonious contrast between nature and modernity. The precise editing work enhances the mood, bringing out the essence of midnight through stunning visuals and fluid transitions. This piece showcases our expertise in video editing, combining technical proficiency with artistic vision to create an immersive viewing experience."
      },
        
          
      ];
  return <>
  <div className='my-20 pt-5'>
          {/* svg */}
  <div className="absolute top-[100px] left-[-99px] ">
          <svg
            width="288"
            height="308"
            viewBox="0 0 249 428"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className='z-20'
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
                <stop stop-color="#B224EF" />
                <stop offset="1" stop-color="#7579FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute top-[70%] left-[-110px] hidden lg:block">
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

    {/* content */}
          <div className='flex items-center '>
          <Link to="javascript:history.back()" className='z-50'>
          <IoArrowBackCircleOutline  className='text-5xl text-[var(--secondryColor)]'/>
          </Link>
          <h3 className='text-3xl md:text-5xl font-semibold text-white'>Animation</h3>
          </div>
          <div className='px-5 md:px-10 mt-5 grid grid-cols-12 justify-items-center gap-y-5 md:gap-5 lg:gap-y-5'>
          {webList.map((elem,idx)=><div className='col-span-12 md:col-span-6 lg:col-span-4' key={idx}>
            <div className="card bg-white w-[22rem] lg:w-96 shadow-xl">
  <figure>
    <video className={`${elem.title == 'Advertising Mockup'?'object-contain':'object-cover'} h-[207px] w-full`} src={elem.src} controls></video>
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl gradiantText">{elem.title}</h2>
    <div className='h-[100px] overflow-y-scroll costumScroll'>
    <p className='text-[var(--mainColor)] text-sm'>{elem.description}</p>
    </div>
    
  </div>
</div>
          </div>)}
          </div>
        </div>
  </>
}
