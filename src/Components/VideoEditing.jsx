import React from 'react'
import { IoArrowBackCircleOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'


export default function VideoEditing() {
    const videoList = [
      {
        title: "Lyrics Video",
        description:"Lyrics video(character drawing, moving the clouds, background, animation, lyrics and color selection)",
        video: "https://www.youtube.com/embed/qokcA-WEHFA?si=CSwngdAVlZVAceyB",
      },
        {
          title: "Intro For Cooking/Vlogs Youtube Channel",
          description:"We can make professional intrusions for YouTube cooking channels",
          video: "https://www.youtube.com/embed/jyFwB-nj9qg?si=-d0CdW5Hxx4spvKp",
        },
        {
          
          title: "Music Channel Intro",
          description:"Video introduction (Intro) for music channel",
          video: "/MO-RADOO-intro-mp4-HD.mp4",
        },
        {
          
          title: "Series Summary Youtube",
          description:"Video series summary edit",
          video: "https://www.youtube.com/embed/NuczSZ7FFvU?si=Fdu-e02RleafzlfU",
        },
        {
            title: "Intro For Youtube Sports Channel",
            description:"We can make professional intrusions for YouTube sports channels",
            video: "https://www.youtube.com/embed/60jML8NV7sU?si=thuZozvnPwfk9AAj",
          },
          {
            title: "Vlog",
            description:"A full day vlog in the city of Fujairah, clips cut, color/sound adjustment and thumbnail design",
            video: "https://www.youtube.com/embed/20KIbtDzyvU?si=lNr34hDZPkb3-AYe",
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

        <div className="absolute top-[120%] left-[-110px] hidden lg:block">
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
          <div className='flex items-center'>
          <Link to={'/'} className='z-50'>
          <IoArrowBackCircleOutline  className='text-5xl text-[var(--secondryColor)]'/>
          </Link>
          <h3 className='text-3xl md:text-5xl font-semibold text-white'>Video Editing</h3>
          </div>
          <div className='px-5 md:px-10 mt-5 grid grid-cols-12 justify-items-center gap-y-5 md:gap-5 lg:gap-y-5'>
          {videoList.map((elem,idx)=><div className='col-span-12 md:col-span-6 lg:col-span-4' key={idx}>
            {elem.title != "Music Channel Intro"?<div className="card bg-white  w-[22rem] lg:w-96 h-full shadow-xl">
  <figure>
  <iframe className='w-full h-[250px]' src={elem.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl gradiantText">{elem.title}</h2>
    <div >
    <p className='text-[var(--mainColor)] text-sm'>{elem.description}</p>
    </div>
  </div>
</div>:<div className="card bg-white w-[22rem] lg:w-96 shadow-xl">
  <figure>
    <video className='h-[250px] w-full object-cover' src={elem.video} controls></video>
  </figure>
  <div className="card-body h-[176px]">
    <h2 className="card-title text-2xl gradiantText">{elem.title}</h2>
    <div className=' overflow-y-scroll costumScroll'>
    <p className='text-[var(--mainColor)] text-sm'>{elem.description}</p>
    </div>
    
  </div>
</div>}
          </div>)}
          </div>
        </div>
  </>
}
