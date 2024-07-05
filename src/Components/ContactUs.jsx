import React from 'react'
import { IoCallSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function ContactUs() {
    const listItems = [
        {
          title: 'Address',
          link: 'Egypt Cairo', // Add the address link here
          linkAnchor:'',
          icon: <FaLocationDot className='text-5xl text-[var(--secondryColor)]'  />// Replace with actual icon class or component
        },
        {
          title: 'Phone',
          link: '01123437255', // Add the phone link here
          linkAnchor:'',
          icon:  <IoCallSharp className='text-5xl text-[var(--secondryColor)]' /> // Replace with actual icon class or component
        },
        {
          title: 'Email',
          link: 'mycidee39@gmail.com', // Add the email link here
          linkAnchor:'https://www.facebook.com/profile.php?id=100093022880956&mibextid=ZbWKwL',
          icon: <IoMail   className='text-5xl text-[var(--secondryColor)]' /> // Replace with actual icon class or component
        },
        {
          title: 'Facebook',
          link: 'My Code', // Add the Facebook link here
          linkAnchor:'',
          icon: <FaFacebook    className='text-5xl text-[var(--secondryColor)]' /> // Replace with actual icon class or component
        },
        {
          title: 'Instagram',
          link: 'my_code39', // Add the Instagram link here
          linkAnchor:'https://www.instagram.com/my_code39?igsh=bDBjeTN5Z3psdmhy',
          icon: <FaInstagram className='text-5xl text-[var(--secondryColor)]' /> // Replace with actual icon class or component
        }
      ];
      
  return <>
  <section className=" relative overflow-hidden mb-20">
        <div className="container grid grid-cols-12   justify-items-center w-11/12 m-auto px-12  ">
          {/* title */}
          <div className="col-span-12 relative  justify-self-start w-full md:w-auto">
            <h3 className="font-semibold md:text-6xl text-2xl gradiantText portfolio relative">
              Contact Us
            </h3>
          </div>
          <div className="col-span-12 w-full md:mb-10 md:mt-10 mb-5 mt-5">
            <hr className="border-t-2 border-[var(--secondryColor)] w-full " />
          </div>
          {/* slider */}
         
        </div>
        <div className='flex justify-items-center flex-wrap flex-col-reverse md:flex-row'>
            <div className='w-full md:w-1/2 flex items-center justify-center md:justify-end'>
                <div className='w-[80%]' >
                <ul >
                    {listItems.map((elem,idx)=><li key={idx} className='mb-5 last:mb-0 last:border-b-0 border-b-[1px] p-3'>
                        <div className='flex items-center'>
                        {elem.icon}
                        <div className='ms-5'>
                        <p className='text-lg text-white font-semibold'>{elem.title}</p>
                        {elem.link != 'Egypt Cairo'?<a href={elem.link}>{elem.link}</a>:<p className='text-base'>{elem.link}</p>}
                        </div>
                        </div>
                    </li>)}
                </ul>
                </div>
            </div>
            <div className='w-full md:w-1/2 flex items-start justify-center'>
                <figure >
                    <img src="/ContactUs.svg" className='w-full' alt="contactUs" />
                </figure>
            </div>
        </div>
        
      </section>
  </>
}
