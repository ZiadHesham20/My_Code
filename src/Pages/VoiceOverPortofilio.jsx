import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IoArrowBackCircleOutline  } from "react-icons/io5";
import { useParams } from 'react-router-dom'

export default function VoiceOverPortofilio() {
    let {id} = useParams()
    const {search} = useLocation()

    const allPortfilios = [{VoiceId:1,samples:[
      {title:'Mothers Day',hasVideo:true,src:'/voiceOver/mira/mira4.mp4'},
      {title:'Print Tech',hasVideo:true,src:'/voiceOver/mira/mira3.mp4'},
      {title:'Resalat Amal',hasVideo:true,src:'/voiceOver/mira/mira5.mp4'},
      {title:'Evo Studio',hasVideo:true,src:'/voiceOver/mira/mira8.mp4'},
      {title:'Nemo',hasVideo:true,src:'/voiceOver/mira/mira6.mp4'},
      {title:"A Bug's Life",hasVideo:true,src:'/voiceOver/mira/mira1.mp4'},
    ]},{VoiceId:2,samples:[
      {title:'The Othman Family Company Ad',hasVideo:true,src:'/voiceOver/Nourhan/Nourhan2.mp4'},
      {title:'Fathet ELkher Stores Ad',hasVideo:true,src:'/voiceOver/Nourhan/Nourhan3.mp4'},
      {title:'Eid Congratulations To Newcastle College',hasVideo:true,src:'/voiceOver/Nourhan/Nourhan4.mp4'},
      {title:'Elkian Ad',hasVideo:true,src:'/voiceOver/Nourhan/Nourhan5.mp4'},
      {title:'Dr Khaled El-Dakhakhny Center Ad',hasVideo:true,src:'/voiceOver/Nourhan/Nourhan6.mp4'},
   
    ]},
    {VoiceId:3,samples:[
      {title:'Social Housing Apartments Ad',hasVideo:true,src:'/voiceOver/reem/reem5.mp4'},
      {title:'Elkhoria Project',hasVideo:true,src:'/voiceOver/reem/reem4.mp4'},
      {title:'Safktna Official Ad',hasVideo:true,src:'/voiceOver/reem/reem3.mp4'},
      {title:'Porsaid Project',hasVideo:true,src:'/voiceOver/reem/reem2.mp4'},
      {title:'Elmaleka Custom Ad.mp4',hasVideo:true,src:'/voiceOver/reem/reem1.mp4'},
    ]},]
    const selectedPortofilio = allPortfilios.filter(elem => elem.VoiceId == id)
 
  return (
    <div className='my-20 pt-5 cosBehavior '>
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
          <Link to="javascript:history.back()" className='z-50'>
          <IoArrowBackCircleOutline  className='text-5xl text-[var(--secondryColor)] '/>
          </Link>
          <h3 className='text-3xl md:text-5xl font-semibold text-white'>{search.replace('?',"").replace("%20"," ")}</h3>
          </div>
          <div className='px-5 lg:px-10 mt-5 grid grid-cols-12 justify-items-center gap-y-5 md:gap-5 lg:gap-y-5 '>
          {selectedPortofilio[0].samples.map((elem,idx)=><div className='col-span-12 md:col-span-6 lg:col-span-4' key={idx}>
            <div className="card bg-white w-[22rem] lg:w-96 shadow-xl">
  
    {elem.hasVideo == true?
    <figure>
    <video className={`${elem.title == 'Advertising Mockup'?'object-contain':'object-cover'} h-[207px] w-full`} src={elem.src} controls></video>
    </figure>:<figure className='h-[207px] recordOnly'>
    <audio className='w-full mt-auto' src={elem.src} controls/>
      </figure>}
  
  <div className="card-body h-[128px]">
    <h2 className="card-title text-2xl gradiantText">{elem.title}</h2>
    
  </div>
</div>
          </div>)}
          </div>
        </div>
  )
}
