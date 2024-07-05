import React from 'react'
import { Link } from 'react-router-dom'
import { IoArrowBackCircleOutline  } from "react-icons/io5";
export default function Animation() {
    const webList = [
        {
          title: "Twilight Reflection",
          image: "/animation/Twilight Reflection.mp4",
          description: "In this evocative digital illustration, a solitary figure stands against a vibrant twilight sky filled with purples, pinks, and deep blues. The person, partially obscured by shadows, is smoking and appears contemplative. They blend into the evening shadows, contrasting with the colorful sky. Utility poles and wires stretch across the scene, adding urban realism, silhouetted against the sunset. The overall mood is one of quiet reflection and melancholy, with the serene, twilight colors enhancing the sense of solitude and contemplation. The artwork captures the emotional transition between day and night through light and shadow."
        },
        {
          title: "GPT Genius",
          
          image: "/animation/Elements.mp4",
          description: "This is a chatbot website powered by the Eden AI API, designed to assist you with your trips."
        },
        {
            title: "Product Rolodex",
            image: "/animation/logoMockup.mp4",
            description: "Product Rolodex is a tool designed to help users manage and analyze product data. It offers various filters and metrics such as price, orders, revenue, ratings, and more to help users organize and assess their product portfolio. Users can interact with sliders and input fields to customize their data view, making it a valuable resource for product management and optimization."
          },
        
        
          
      ];
  return <>
  <div className='my-20 pt-5'>
          <div className='flex items-center'>
          <Link to={'/'}>
          <IoArrowBackCircleOutline  className='text-5xl text-[var(--secondryColor)]'/>
          </Link>
          <h3 className='text-5xl font-semibold text-white'>Animation</h3>
          </div>
          <div className='px-10 mt-5 grid grid-cols-12 justify-items-center gap-y-5'>
          {webList.map((elem,idx)=><div className='col-span-4' key={idx}>
            <div className="card bg-white w-96 shadow-xl">
  <figure>
    <img
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
