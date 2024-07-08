import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoArrowBackCircleOutline  } from "react-icons/io5";
export default function ArchitecturalDesign() {
  const [currentImage, setCurrentImage] = useState("/ard/Ard_Interior1.jfif")
  const webList = [
    {
      id: 1,
      title: "Living Room",
      tags: "Modern - Luxury - Interior",
      image: "/ard/Ard_Interior1.jfif",
    },
    {
      id: 2,
      title: "Caffee Design",
      tags: "Modern - Exterior",
      image: "/ard/Ard_Exterior1.jfif",
    },
    {
      id: 3,
      title: "Bed Room",
      tags: "Modern - Interior",
      image: "/ard/Ard_Interior2.jpeg",
    },
    {
      id: 4,
      title: "Living Room",
      tags: "Modern - Interior",
      image: "/ard/Ard_Interior3.jpeg",
    },
    {
      id: 5,
      title: "Living Room",
      tags: "Modern - Interior",
      image: "/ard/Ard_Interior4.jpeg",
    },
    {
      id: 6,
      title: "Living Room",
      tags: "Modern - Interior",
      image: "/ard/Ard_Interior5.jpeg",
    },
    {
      id: 7,
      title: "Living Room",
      tags: "Modern Luxury - Interior",
      image: "/ard/Ard_Interior6.jpeg",
    },
    {
      id: 8,
      title: "Living Room",
      tags: "Modern - Interior",
      image: "/ard/Ard_Interior7.jpeg",
    },
    {
      id: 9,
      title: "Bed Room",
      tags: "Modern - Minimalistic - Interior",
      image: "/ard/Ard_Interior8.jpeg",
    },
    {
      id: 10,
      title: "Garden",
      tags: "Modern - Exterior",
      image: "/ard/Ard_Exterior2.jpeg",
    },
    {
      id: 11,
      title: "Garden",
      tags: "Modern - Exterior",
      image: "/ard/Ard_Exterior3.jpeg",
    },
    {
      id: 12,
      title: "Salon Entrance",
      tags: "Bohemian - Exterior",
      image: "/ard/Ard_Exterior4.jpeg",
    },
    {
      id: 13,
      title: "House Design",
      tags: "Classic - Exterior",
      image: "/ard/Ard_Exterior5.jpeg",
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
          <Link to={'/'} className='z-50'>
          <IoArrowBackCircleOutline  className='text-5xl text-[var(--secondryColor)]'/>
          </Link>
          <h3 className=' text-3xl md:text-5xl font-semibold text-white'>Architectural Design</h3>
          </div>
          <div className='px-5 md:px-10 mt-5 grid grid-cols-12 justify-items-center gap-y-5 md:gap-5 lg:gap-y-5'>
          {webList.map((elem,idx)=><div className='col-span-12 md:col-span-6 lg:col-span-4' key={idx}>
            <div className="card bg-white  w-[22rem] lg:w-96 shadow-xl">
  <figure className='w-full'>
    <img
    className='w-full h-[216px] object-cover'
      src={elem.image}
      alt={elem.title} />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl gradiantText">{elem.title}</h2>
    <div>
    <p className='text-[var(--mainColor)] text-sm'>{elem.tags}</p>
    </div>
    <div className="card-actions justify-end">
      <button  className="btn btn-primary bg-[var(--secondryColor)] text-white w-full" id={elem.id} onClick={handleModalOpen}>View</button>
    </div>
  </div>
</div>
          </div>)}
          </div>
        </div>

<dialog id="my_modal_2" className="modal p-2 lg:p-28">
  <div className="modal-box p-10 bg-[var(--mainColor)]">
  <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl md:text-2xl">✕</button>
    </form>
    <figure>
      <img src={currentImage} alt="image" className='w-full rounded-lg md:h-[631px]'/>
    </figure>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
  </>
}
