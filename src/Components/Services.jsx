import React from 'react';
import { Link } from 'react-router-dom';
import programming from './Coding.png';
import social from './social.jpg';
import content from './content.jpg';
import branding from './branding.jpg';
import { Megaphone, LayoutGrid, CodeXml, Brush, ImagePlay, MessagesSquare } from 'lucide-react';
//---------------------------------------------------------
export default function Services() {
  // Array of service data, each object represents a service
  const servicesArray = [
    {
      name: 'Programming Services',
      description: 'Web, Mobile & Desktop Development',
      img: <CodeXml className="w-16 h-16 text-white" />,
      link: 'programming',
      animationfrom: 'left'
    },
    {
      name: 'Branding',
      description: 'branding, logo design, web design',
      img: <Brush className="w-16 h-16 text-white" />,
      link: 'branding',
      animationfrom: 'left'
    },
    {
      name: 'Content Creation',
      description: 'Videos, Graphics & Animation',
      img: <ImagePlay className="w-16 h-16 text-white" />,
      link: 'content',
      animationfrom: 'right'
    },
    {
      name: 'Voice Over',
      description: 'Professional Voice Acting & Audio Production',
      img: <Megaphone className="w-16 h-16 text-white" />,
      link: 'voiceOver',
      animationfrom: 'left'
    },
    {
      name: 'Social Media Management',
      description: 'Strategy, Content & Community Management',
      img: <MessagesSquare className="w-16 h-16 text-white" />,
      link: 'social-media',
      animationfrom: 'down'
    },
    {
      name: 'Interior/Exterior Design',
      description: 'Architectural & Space Planning',
      img: <LayoutGrid className="w-16 h-16 text-white" />,
      link: 'architecturalDesign',
      animationfrom: 'right'
    }
  ];

  return (
    <div
      className='relative lg:mb-48 overflow-hidden lg:overflow-visible mt-36 mb-10 md:mb-10'
      id='services'
    >
      {/* Container for services section */}
      <div className='container grid grid-cols-12 justify-items-center w-11/12 m-auto px-7 md:px-6'>
        {/* Section Title */}
        <div className='col-span-12  relative justify-self-start' id='serviceTitle'>
          <h3 className='font-semibold md:text-6xl text-4xl gradiantText pb-0 lg:pb-1'>Services</h3>
          {/* Title decoration */}
          <div className='absolute bottom-0 md:bottom-1 lg:bottom-0 right-full '>
            <svg
              className='w-[75.21px] h-[37.07px] md:w-[100px] md:h-[50px] lg:w-[138px] lg:h-[68.01px]'
              viewBox="0 0 83 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="13.7518" cy="8.68705" r="8.68705" fill="#EDEEFF" />
              <circle cx="44.5288" cy="8.68705" r="8.68705" fill="#EDEEFF" />
              <circle cx="74.313" cy="8.68705" r="8.68705" fill="#EDEEFF" />
              <circle cx="13.7518" cy="34.0036" r="8.68705" fill="#EDEEFF" />
              <circle cx="44.5288" cy="34.0036" r="8.68705" fill="#EDEEFF" />
              <circle cx="74.313" cy="34.0036" r="8.68705" fill="#EDEEFF" />
              <circle cx="13.7518" cy="59.3202" r="8.68705" fill="#EDEEFF" />
              <circle cx="44.5288" cy="59.3202" r="8.68705" fill="#EDEEFF" />
              <circle cx="74.313" cy="59.3202" r="8.68705" fill="#EDEEFF" />
            </svg>
          </div>
        </div>

        {/* Horizontal divider */}
        <div className="col-span-12 w-full md:mb-20 md:mt-10 mb-16 mt-5" id='serviceTitle'>
          <hr className="border-t-2 border-[var(--secondryColor)] w-full" />
        </div>

        {/* Service Cards */}
        <div className='col-span-12 py-3 md:py-0' id='serviceContent'>
          <div className='relative grid grid-cols-12 gap-6 lg:gap-10'>
            {servicesArray.map((service, idx) => (
              <div
                className='col-span-12 md:col-span-6 lg:col-span-4 m-auto md:m-0 w-full'
                key={idx}
                id={service.animationfrom}
              >
                {/* Service Card */}
                <Link
                  to={`/categoryDetails/${service.link}`}
                  onClick={() => {
                    document.documentElement.style.scrollBehavior = 'auto';
                  }}
                >
                  <div className="card h-full bg-gray-900/50 backdrop-blur-sm border-[0.1px] border-gray-800 hover:border-purple-500/50 p-6 rounded-xl hover:scale-105 transition-all duration-300 ease-in-out">
                    <div className="flex flex-col items-center text-center space-y-4">
                      {/* Service Image or Icon */}
                      <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg">
                        {typeof service.img === 'string' ? (
                          <img src={service.img} alt={service.name} className="w-16 h-16" />
                        ) : (
                          service.img
                        )}
                      </div>
                      {/* Service Name */}
                      <h2 className="text-xl lg:text-2xl font-bold text-white">{service.name}</h2>
                      {/* Service Description */}
                      <p className="text-gray-400 text-sm lg:text-base">{service.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className='absolute top-[90%] hidden lg:block right-[94%]'>
        <svg
          width="183"
          height="428"
          viewBox="0 0 183 428"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_16_388)">
            <path
              d="M123 210.652C123 284.61 25.6356 368 -48.1304 368C-121.896 368 -165 239.028 -165 165.07C-165 91.112 -88.5052 60 -14.7391 60C59.0269 60 123 136.694 123 210.652Z"
              fill="url(#paint0_linear_16_388)"
              fillOpacity="0.14"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_16_388"
              x="-225"
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
              <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_16_388" />
            </filter>
            <linearGradient
              id="paint0_linear_16_388"
              x1="-165"
              y1="214"
              x2="123"
              y2="214"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B224EF" />
              <stop offset="1" stopColor="#7579FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
