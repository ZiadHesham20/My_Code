import React from 'react'
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
            link: "/javascript-tips-tricks",
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
          
      ];
  return <>
  <div className='my-20 pt-5'>
          <div className='flex items-center'>
          <Link to={'/'}>
          <IoArrowBackCircleOutline  className='text-5xl text-[var(--secondryColor)]'/>
          </Link>
          <h3 className='text-5xl font-semibold text-white'>Web Development</h3>
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
