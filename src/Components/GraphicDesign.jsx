import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoArrowBackCircleOutline  } from "react-icons/io5";
export default function GraphicDesign() {
  const [currentImage, setCurrentImage] = useState("/graphic/Graphic1.png")
  const webList = [
    {
      id: 1,
      title: "Social Media Post",
      image: "/graphic/Brown-Premium-Coffee-Cup-3.png",
    },
    {
      id: 2,
      title: "Event Social Media Post",
      image: "/graphic/Clash-of-Titans-final-4-1.png",
    },
    {
      id: 3,
      title: "Vinicius UCL",
      image: "/graphic/v.png",
    },
    {
      id: 4,
      title: "Eternal - CR7",
      image: "/graphic/cr77framedelyhtnzl.png",
    },
    
    {
      id: 5,
      title: "Gear - 2 - Solanke",
      image: "/graphic/sol.jpg",
    },
    {
      id: 6,
      title: "Echos Of The Forgotten",
      image: "/graphic/IMG-20240427-WA0020.jpg",
    },
    {
      id: 7,
      title: "Dune",
      image: "/graphic/IMG-20240427-WA0024.jpg",
    },
    {
      id: 8,
      title: "Sunset Bus",
      image: "/graphic/IMG-20240427-WA0032.jpg",
    },
    {
      id: 9,
      title: "Lost",
      image: "/graphic/IMG-20240501-WA0006.jpg",
    },
    {
      id: 10,
      title: "Wedding",
      image: "/graphic/wedding.jpeg",
    },
    {
      id: 11,
      title: "Five Fifa World Cups",
      image: "/graphic/5-1.png",
    },
    {
      id: 12,
      title: "25 Clearans in CAF",
      image: "/graphic/AFCONCLEAR.png",
    },
    {
      id: 13,
      title: "Karim Benzma",
      image: "/graphic/benzz1.png",
    },
    {
      id: 14,
      title: "Marcelo Brozović",
      image: "/graphic/broxo.png",
    },
    {
      id: 15,
      title: "Vector Art - Salah",
      image: "/graphic/Mohamed-Salah-9.jpg",
    },
    {
      id: 16,
      title: "Corona Pandemic",
      image: "/graphic/Graphic1.png",
    },
    {
      id: 17,
      title: "Eye",
      image: "/graphic/Human_eye_with_blood_vessels.png",
    },
    {
      id: 18,
      title: "Celestial Enigma",
      image: "/design.gif",
    },
    
  ];

      function handleModalOpen(e){
        document.getElementById('my_modal_2').showModal()
        setCurrentImage(webList.filter((elem)=> elem.id == e.target.id).map(elem => elem.image)[0])
      }
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

        <div className="absolute top-[280%] left-[-110px] hidden lg:block">
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
          <Link to="javascript:history.back()" className='z-50'>
          <IoArrowBackCircleOutline  className='text-5xl text-[var(--secondryColor)]'/>
          </Link>
          <h3 className='text-3xl md:text-5xl font-semibold text-white'>Graphic Design</h3>
          </div>
          <div className='px-5 md:px-10 mt-5 grid grid-cols-12 justify-items-center gap-y-5 md:gap-5 lg:gap-y-5'>
          {webList.map((elem,idx)=><div className='col-span-12 md:col-span-6 lg:col-span-4' key={idx}>
            <div className="card bg-white  w-[22rem] lg:w-96 shadow-xl">
  <figure>
    <img
    className='w-full h-[268px] object-cover'
      src={elem.image}
      alt={elem.title} />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl gradiantText">{elem.title}</h2>
    <div className="card-actions justify-end">
      <button  className="btn btn-primary bg-[var(--secondryColor)] text-white w-full" id={elem.id} onClick={handleModalOpen}>View</button>
    </div>
  </div>
</div>
          </div>)}
          </div>
        </div>

        <dialog id="my_modal_2" className="modal p-2 md:p-28">
  <div className="modal-box p-10 bg-[var(--mainColor)]">
  <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl md:text-2xl">✕</button>
    </form>
    <figure className='flex justify-center'>
      <img src={currentImage} alt="image" className=' rounded-lg md:h-[631px] object-contain'/>
    </figure>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
  </>
}
