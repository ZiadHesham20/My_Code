import React from 'react'
import { Link } from 'react-router-dom';
// className='scale-150'
export default function Services() {
    const servicesArray = [
      {
        name: 'Web Development',
        img: "/web.svg",
        link:'webDevelopment',
        animationfrom:'left'
      },
      {
        name: 'Mobile Applications',
        img: '/smartphone-svgrepo-com 1.svg',
        link:'',
        animationfrom:'down'
      },
      {
        name: 'Desktop Applications',
        img: '/devices-svgrepo-com 1.svg',
        link:'',
        animationfrom:'right'
      },
      {
        name: 'Graphic Design',
        img: '/logoDesign.svg',
        link:'graphicDesign',
        animationfrom:'left'
      },
      {
        name:'Animation',
        img:'/animation.svg',
        link:'animation',
        animationfrom:'down'
      },
        {
          name: 'Video Editing',
          img: '/video-editing-svgrepo-com 1.svg',
          link:'videoEditing',
          animationfrom:'right'
        },
       
        {
          name: 'Interior/Exterior Design',
          img: '/I-EDesign.svg',
          link:'architecturalDesign',
          animationfrom:'left'
        },
        
      ];
      
return<>
  <div className='relative  lg:mb-48  overflow-hidden lg:overflow-visible mt-36 mb-10 md:mb-10' id='services'>
    <div className='container grid grid-cols-12 justify-items-center w-11/12 m-auto px-12'>
        {/* title */}
    <div className='col-span-12 relative  justify-self-start' id='serviceTitle'>
    <h3 className='font-semibold md:text-6xl text-4xl gradiantText pb-0 lg:pb-1'>Services</h3>
    <div className='absolute bottom-0 md:bottom-1 lg:bottom-0 right-full'>
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
<div className='absolute bottom-[98%] left-[60%]'>
<svg className='w-[75.21px] h-[37.07px] md:w-[156px] md:h-[93px]' viewBox="0 0 156 93" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M112.478 88.4748C126.407 88.8114 140.64 88.1382 153.958 92.9113C154.751 93.1928 155.624 92.7828 155.911 91.9873C156.192 91.1918 155.783 90.3167 154.989 90.0291C141.36 85.1459 126.803 85.7578 112.552 85.4151C111.709 85.3907 111.007 86.0638 110.988 86.9083C110.964 87.7527 111.636 88.4503 112.478 88.4748Z" fill="url(#paint0_linear_16_85)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M111.227 68.2094C115.568 64.2061 120.307 61.2071 126.034 59.7207C126.852 59.5089 127.341 58.6736 127.133 57.8561C126.919 57.0385 126.083 56.5472 125.271 56.7589C119.043 58.3744 113.883 61.6066 109.163 65.9569C108.54 66.5284 108.497 67.4971 109.071 68.1188C109.639 68.7399 110.61 68.7809 111.227 68.2094Z" fill="url(#paint1_linear_16_85)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.1489 24.5034C101.14 17.665 105.06 12.3155 111.068 8.45238C111.776 7.99649 111.984 7.04923 111.526 6.33878C111.074 5.62833 110.128 5.42148 109.419 5.87737C102.77 10.1548 98.4222 16.0746 96.2179 23.646C95.9798 24.4562 96.45 25.3068 97.256 25.5431C98.0681 25.7799 98.9169 25.3136 99.1489 24.5034Z" fill="url(#paint2_linear_16_85)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.546 15.2228C29.3614 16.6198 28.2989 18.1252 27.3952 19.7278C26.9922 20.4413 26.2839 21.9577 26.174 23.2581C26.0518 24.6435 26.522 25.8123 27.731 26.4279C29.3369 27.2442 30.6193 27.1592 31.6085 26.6653C32.561 26.1911 33.3059 25.2591 33.7761 24.0095C34.6737 21.6212 34.5394 17.971 34.0692 15.888C35.3332 14.5809 36.7193 13.3955 38.2031 12.3418C49.2552 4.49376 65.4671 7.3876 77.942 19.122C82.3079 23.2305 84.4084 31.8588 85.5014 41.1681C87.205 55.6629 86.2342 71.8522 86.0998 76.5953C86.0693 77.7666 86.1792 78.4617 86.2402 78.6006C86.5272 79.2835 87.034 79.461 87.3882 79.5283C87.9011 79.6201 88.3102 79.5222 88.6399 79.3509C89.0857 79.1159 89.4521 78.7022 89.6231 78.0639C89.7147 77.7115 89.7391 77.2207 89.7268 76.6975C89.7146 76.3346 89.6413 75.9381 89.7146 75.678C90.1909 74.0124 90.7649 72.3858 91.3267 70.7477C93.2012 65.2409 95.6254 60.0805 98.3182 54.9262C106.873 38.5484 115.147 21.2436 129.173 8.76567C129.802 8.20575 129.863 7.23768 129.301 6.60616C128.745 5.97465 127.78 5.91711 127.145 6.47764C112.839 19.2022 104.339 36.805 95.6132 53.5071C93.3234 57.8916 91.2228 62.2822 89.4765 66.8748C89.6535 58.7508 89.5864 47.5053 88.1026 37.5552C86.7836 28.7061 84.274 20.8856 80.0303 16.8915C66.3647 4.03665 48.5408 1.24809 36.4384 9.84574C35.1439 10.7661 33.9105 11.7782 32.7625 12.876C26.4304 1.41761 12.8747 -3.17497 0.894452 2.30549C0.125076 2.65613 -0.210757 3.56424 0.137294 4.33222C0.491452 5.1002 1.39513 5.43922 2.16451 5.08858C12.9602 0.150288 25.2031 4.55741 30.546 15.2228ZM31.4314 19.059C30.9368 19.759 30.4788 20.4848 30.0514 21.235C29.8254 21.6377 29.4346 22.4118 29.2698 23.1693C29.2331 23.3468 29.227 23.6246 29.227 23.7531C29.6484 23.9612 29.9781 24.0615 30.2467 23.9263C30.5826 23.7599 30.7536 23.3682 30.9185 22.9307C31.3337 21.8329 31.468 20.3777 31.4314 19.059Z" fill="url(#paint3_linear_16_85)"/>
<defs>
<linearGradient id="paint0_linear_16_85" x1="110.988" y1="89.2073" x2="156" y2="89.2073" gradientUnits="userSpaceOnUse">
<stop stop-color="#B224EF"/>
<stop offset="1" stop-color="#7579FF"/>
</linearGradient>
<linearGradient id="paint1_linear_16_85" x1="108.667" y1="62.6612" x2="127.181" y2="62.6612" gradientUnits="userSpaceOnUse">
<stop stop-color="#B224EF"/>
<stop offset="1" stop-color="#7579FF"/>
</linearGradient>
<linearGradient id="paint2_linear_16_85" x1="96.156" y1="15.62" x2="111.77" y2="15.62" gradientUnits="userSpaceOnUse">
<stop stop-color="#B224EF"/>
<stop offset="1" stop-color="#7579FF"/>
</linearGradient>
<linearGradient id="paint3_linear_16_85" x1="0" y1="39.7817" x2="129.686" y2="39.7817" gradientUnits="userSpaceOnUse">
<stop stop-color="#B224EF"/>
<stop offset="1" stop-color="#7579FF"/>
</linearGradient>
</defs>
</svg>

</div>
    </div>
    <div className="col-span-12 w-full md:mb-20 md:mt-10 mb-16 mt-5" id='serviceTitle'>
             <hr className="border-t-2 border-[var(--secondryColor)] w-full " />
          </div>
    <div className='col-span-12 py-3 md:py-0' id='serviceContent'>
      <div className=' relative grid grid-cols-12 gap-6 lg:gap-10 '>
      {servicesArray.map((elem,idx)=><div className='col-span-6  md:col-span-4 m-auto md:m-0  ' key={idx} id={elem.animationfrom}>

{elem.name == 'Mobile Applications' || elem.name == 'Desktop Applications'?<div className="card w-[8rem] h-48 lg:h-auto lg:w-[21rem] border-[0.1px] border-[var(--borderStrokeColor)] serviceCard hover:scale-105 transition-all ease-in-out">
<figure className="px-10 pt-10">
<img
src={elem.img}
alt="Shoes"
className="rounded-xl w-full" />
</figure>
<div className="card-body items-center text-center">
<h2 className="card-title text-white text-sm lg:text-xl">{elem.name}</h2>    
</div>
</div>:<Link to={`/categoryDetails/${elem.link}`} onClick={()=>{document.documentElement.style.scrollBehavior = 'auto'}}>
<div className="card w-[8rem] h-48 lg:h-auto lg:w-[21rem] border-[0.1px] border-[var(--borderStrokeColor)] serviceCard hover:scale-105 transition-all ease-in-out">
<figure className="px-10 pt-10">
<img
src={elem.img}
alt="Shoes"
className="rounded-xl w-full" />
</figure>
<div className="card-body items-center text-center">
<h2 className="card-title text-white text-sm lg:text-xl">{elem.name}</h2>    
</div>
</div>
</Link>}







</div>)}
      </div>
    
</div>

  
    </div>
    <div className='absolute top-[90%] hidden lg:block right-[94%]'>
        <svg width="183" height="428" viewBox="0 0 183 428" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_16_388)">
<path d="M123 210.652C123 284.61 25.6356 368 -48.1304 368C-121.896 368 -165 239.028 -165 165.07C-165 91.112 -88.5052 60 -14.7391 60C59.0269 60 123 136.694 123 210.652Z" fill="url(#paint0_linear_16_388)" fill-opacity="0.14"/>
</g>
<defs>
<filter id="filter0_f_16_388" x="-225" y="0" width="408" height="428" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_16_388"/>
</filter>
<linearGradient id="paint0_linear_16_388" x1="-165" y1="214" x2="123" y2="214" gradientUnits="userSpaceOnUse">
<stop stop-color="#B224EF"/>
<stop offset="1" stop-color="#7579FF"/>
</linearGradient>
</defs>
</svg>

        </div>
        
        <div className='absolute top-[68%] right-0 hidden md:block'>
        <svg width="100" height="137" viewBox="0 0 139 137" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="17.5" cy="17.5" r="17.5" fill="#EDEEFF"/>
<circle cx="78.5" cy="17.5" r="17.5" fill="#EDEEFF"/>
<circle cx="138.5" cy="17.5" r="17.5" fill="#EDEEFF"/>
<circle cx="17.5" cy="68.5" r="17.5" fill="#EDEEFF"/>
<circle cx="78.5" cy="68.5" r="17.5" fill="#EDEEFF"/>
<circle cx="138.5" cy="68.5" r="17.5" fill="#EDEEFF"/>
<circle cx="17.5" cy="119.5" r="17.5" fill="#EDEEFF"/>
<circle cx="78.5" cy="119.5" r="17.5" fill="#EDEEFF"/>
<circle cx="138.5" cy="119.5" r="17.5" fill="#EDEEFF"/>
</svg>


        </div>
  </div>
  </>
}
