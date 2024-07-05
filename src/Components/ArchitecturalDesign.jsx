import React from 'react'
import { Link } from 'react-router-dom'
import { IoArrowBackCircleOutline  } from "react-icons/io5";
export default function ArchitecturalDesign() {
    const webList = [
        {
          title: "KNM Travels",
          link: "https://knm-travels.com/",
          image: "/ard/Ard_Interior1.jfif",
        },
        {
          title: "GPT Genius",
          link: "https://genuis-gpt.vercel.app/chat",
          image: "/ard/Ard_Exterior1.jfif",
        },
        {
            title: "Product Rolodex",
            link: "/javascript-tips-tricks",
            image: "/ard/Ard_Interior2.jpeg",
          },
        
        {
            title: "H2 Group",
            link: "https://h2-group.netlify.app/",
            image: "/ard/Ard_Interior3.jpeg",
          },
          {
            title: "Entertainment Theatre",
            link: "https://entertainment-theatre.netlify.app/",
            image: "/ard/Ard_Interior4.jpeg",
          },
          {
            title: "Entertainment Theatre",
            link: "https://entertainment-theatre.netlify.app/",
            image: "/ard/Ard_Interior5.jpeg",
          },
          {
            title: "Entertainment Theatre",
            link: "https://entertainment-theatre.netlify.app/",
            image: "/ard/Ard_Interior6.jpeg",
          },
          {
            title: "Entertainment Theatre",
            link: "https://entertainment-theatre.netlify.app/",
            image: "/ard/Ard_Interior7.jpeg",
          },
          
      ];
  return <>
  <div className='my-20 pt-5'>
          <div className='flex items-center'>
          <Link to={'/'}>
          <IoArrowBackCircleOutline  className='text-5xl text-[var(--secondryColor)]'/>
          </Link>
          <h3 className='text-5xl font-semibold text-white'>Architectural Design</h3>
          </div>
          <div className='px-10 mt-5 grid grid-cols-12 justify-items-center gap-y-5'>
          {webList.map((elem,idx)=><div className='col-span-4' key={idx}>
            <div className="card bg-white w-96 shadow-xl">
  <figure className='w-full'>
    <img
    className='w-full h-[216px]'
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
