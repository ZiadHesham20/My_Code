import React from 'react'
import { Link } from 'react-router-dom'
import { IoArrowBackCircleOutline  } from "react-icons/io5";
export default function VoiceOver() {
    const voiceOversList = [
        {
            id: 1,
            title: "Mira Omar",
            image: "/voiceOver/mira/vioceOverMira.jpeg",
        },
        {
          id: 2,
          title: "Noor Sleem",
          image: "/voiceOver/Nourhan/Noor.jpeg",
      },
      {
        id: 3,
        title: "Reem Naser",
        image: "/voiceOver/reem/image.png",
    },
    
    ];
    
      
      
  return <>
  <div className='my-20 pt-5 cosBehavior  lg:h-auto'>
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
                <stop stopColor="#B224EF" />
                <stop offset="1" stopColor="#7579FF" />
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
        <div className="absolute top-44 right-0 hidden lg:block ">
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
          <IoArrowBackCircleOutline  className='text-5xl text-[var(--secondryColor)] '/>
          </Link>
          <h3 className='text-3xl md:text-5xl font-semibold text-white'>Voice Over</h3>
          </div>
          <div className='px-5 lg:px-10 mt-5 grid grid-cols-12 justify-items-center gap-y-5 md:gap-5 lg:gap-y-5 '>
          {voiceOversList.map((elem,idx)=><div className='col-span-12 w-full lg:w-auto md:col-span-6 lg:col-span-4' key={idx}>
            <div className="card bg-white w-full lg:w-96 shadow-xl">
  <figure >
    <img
    className={`${elem.id == 3 ?'object-contain':elem.id == 4?'object-fill':'object-cover'} h-[189px] w-full`}
      src={elem.image}
      alt={elem.title} />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl gradiantText">{elem.title}</h2>
    
    <div className="card-actions justify-end">
      <Link to={{pathname:`/categoryDetails/voiceOver/${elem.id}`,search:elem.title}} className="btn btn-primary bg-[var(--secondryColor)] text-white w-full">View</Link>
    </div>
  </div>
</div>
          </div>)}
          </div>
        </div>
  </>
}
