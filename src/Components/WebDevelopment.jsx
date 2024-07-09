import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoArrowBackCircleOutline  } from "react-icons/io5";
export default function WebDevelopment() {
    const webList = [
        {
          title: "KNM Travels",
          link: "https://knm-travels.com/",
          image: "/web/KNM.png",
          description: "KNM Travels provides travel-related services, likely including tour packages, transportation options, and travel planning assistance. It is designed to cater to travelers looking for organized and convenient travel solutions. The site likely features details on various destinations, itineraries, pricing, and booking options, aiming to offer a seamless travel experience for its users."
        },
        {
          title: "GPT Genius",
          link: "https://genuis-gpt.vercel.app/chat",
          image: "/web/webDevelopment3.png",
          description: "This is a chatbot website powered by the Eden AI API, designed to assist you with your trips."
        },
        {
            title: "Product Rolodex",
            link: "https://mvp-test-six.vercel.app/",
            image: "/web/MockUp.png",
            description: "Product Rolodex is a tool designed to help users manage and analyze product data. It offers various filters and metrics such as price, orders, revenue, ratings, and more to help users organize and assess their product portfolio. Users can interact with sliders and input fields to customize their data view, making it a valuable resource for product management and optimization."
          },
        
        {
            title: "H2 Group",
            link: "https://h2-group.netlify.app/",
            image: "/web/H2.png",
            description: "H2 Group is a home service company which provide cleaning and residence and cooking services."
          },
          {
            title: "Entertainment Theatre",
            link: "https://entertainment-theatre.netlify.app/",
            image: "/web/ET.png",
            description: "The Entertainment Theatre website is a platform dedicated to showcasing various theatrical performances and entertainment events. It likely includes information on upcoming shows, ticket booking options, and details about the venue and performers. The site is designed to provide an engaging user experience for theatre enthusiasts, making it easy to explore and attend live performances."
          },
          {
            title: "Leno Cafe Menu",
            link: "https://leno-caffee.netlify.app",
            image: "/web/cf9dff02-171d-499a-b2bd-2320e6ef8027.jfif",
            description: "Leno Caffee offers a wide variety of beverages and desserts, including hot drinks, fresh juices, cocktails, mocktails, soft drinks, crepes, waffles, ice coffee, ice cream, smoothies, mixed yogurt, milkshakes, frappés, and shisha. The website provides a detailed menu with prices for each item, catering to a range of tastes and preferences. The site can be accessed via a QR code for convenience."
          },
          
      ];
      
      
  return <>
  <div className='my-20 pt-5 cosBehavior'>
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
          <div className='flex items-center '>
          <Link to={'/'} className='z-50'>
          <IoArrowBackCircleOutline  className='text-5xl text-[var(--secondryColor)] '/>
          </Link>
          <h3 className='text-3xl md:text-5xl font-semibold text-white'>Web Development</h3>
          </div>
          <div className='px-5 lg:px-10 mt-5 grid grid-cols-12 justify-items-center gap-y-5 md:gap-5 lg:gap-y-5 '>
          {webList.map((elem,idx)=><div className='col-span-12 md:col-span-6 lg:col-span-4' key={idx}>
            <div className="card bg-white w-full lg:w-96 shadow-xl">
  <figure >
    <img
    className='object-cover h-[189px] w-full'
      src={elem.image}
      alt={elem.title} />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl gradiantText">{elem.title}</h2>
    <div className='h-[100px] overflow-y-scroll costumScroll'>
    <p className='text-[var(--mainColor)] text-sm'>{elem.description}</p>
    </div>
    <div className="card-actions justify-end">
      <Link to={elem.link} target='_blank' className="btn btn-primary bg-[var(--secondryColor)] text-white w-full">View</Link>
    </div>
  </div>
</div>
          </div>)}
          </div>
        </div>
  </>
}
