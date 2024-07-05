import React from 'react'
import { Link } from 'react-router-dom'
import { IoArrowBackCircleOutline  } from "react-icons/io5";
export default function GraphicDesign() {
    const webList = [
        {
          title: "KNM Travels",
          
          image: "/graphic/Graphic1.png",
        },
        {
          title: "GPT Genius",
         
          image: "/graphic/v.png",
        },
        {
            title: "Product Rolodex",
            
            image: "/graphic/cr77framedelyhtnzl.png",
          },
        
        {
            title: "H2 Group",
            
            image: "/graphic/Human_eye_with_blood_vessels.png",
          },
          {
            title: "Entertainment Theatre",
            image: "/graphic/sol.jpg",
          },
          {
            title: "Entertainment Theatre",
            image: "/graphic/IMG-20240427-WA0020.jpg",
          },
          {
            title: "Entertainment Theatre",
            image: "/graphic/IMG-20240427-WA0024.jpg",
          },
          {
            title: "Entertainment Theatre",
            image: "/graphic/IMG-20240427-WA0032.jpg",
          },
          {
            title: "Entertainment Theatre",
            image: "/graphic/IMG-20240501-WA0006.jpg",
          },
          {
            title: "Entertainment Theatre",
            image: "/graphic/wedding.jpeg",
          },
          
          
      ];
  return <>
  <div className='my-20 pt-5'>
          <div className='flex items-center'>
          <Link to={'/'}>
          <IoArrowBackCircleOutline  className='text-5xl text-[var(--secondryColor)]'/>
          </Link>
          <h3 className='text-5xl font-semibold text-white'>Graphic Design</h3>
          </div>
          <div className='px-10 mt-5 grid grid-cols-12 justify-items-center gap-y-5'>
          {webList.map((elem,idx)=><div className='col-span-4' key={idx}>
            <div className="card bg-white w-96 shadow-xl">
  <figure>
    <img
    className='w-full h-[268px] object-cover'
      src={elem.image}
      alt={elem.title} />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl gradiantText">{elem.title}</h2>
    <div className="card-actions justify-end">
      <button  className="btn btn-primary bg-[var(--secondryColor)] text-white w-full">View</button>
    </div>
  </div>
</div>
          </div>)}
          </div>
        </div>
  </>
}
