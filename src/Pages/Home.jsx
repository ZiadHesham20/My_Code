import React, { useEffect } from 'react'

import Hero from '../Components/Hero';
import AboutUs from './../Components/AboutUs';
import Services from '../Components/Services';
import Projects from '../Components/Projects';

import ContactUs from '../Components/ContactUs';
import { motion,animate, inView } from 'framer-motion';
import FAQ from '../Components/FAQ';


export default function Home() {
  
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    inView("#about",({target})=>{
      animate(target,{ opacity:[0,1],
        // x:[1000,0],
       
      
      },{duration:1})
      animate(
        "#slogan",
        {
          opacity: [0, 1],
          x:[-500,0], // Example animation
        },
        { duration: 2 }
      );
      animate(
        "#aboutUsFirstsvg",
        {
          opacity: [0, 1],
          x:[-500,0], // Example animation
        },
        { duration: 2 }
      );
      animate(
        "#aboutContent",
        {
          opacity: [0, 1],
          x:[500,0], // Example animation
        },
        { duration: 2 }
      );
      animate(
        "#aboutUsSecondsvg",
        {
          opacity: [0, 1],
          x:[500,0], // Example animation
        },
        { duration: 2 }
      );
    })
    inView("#service",({target})=>{
      animate(target,{ opacity:[0,1],
      },{duration:1})
      animate("#serviceTitle",{opacity:[0,1],
        x:[-500,0]
      },{duration:2})
      // animate("#serviceContent",{opacity:[0,1],
      //   y:[500,0]
      // },{duration:2})
      animate("#down",{opacity:[0,1],
        y:[500,0]
      },{duration:2})
      animate("#right",{opacity:[0,1],
        x:[500,0]
      },{duration:2})
      animate("#left",{opacity:[0,1],
        x:[-500,0]
      },{duration:2})
    })
    inView("#portofolioSection",({target})=>{
      animate(target,{ opacity:[0,1],
      },{duration:1})
      animate("#portofilioTitle",{opacity:[0,1],
        x:[-500,0]
      },{duration:2})
      animate("#portofilioContent",{opacity:[0,1],
        y:[500,0]
      },{duration:2})
    })
    inView("#contactSection",({target})=>{
      animate(target,{ opacity:[0,1],
      },{duration:1})
      animate("#contactTitle",{opacity:[0,1],
        x:[-500,0]
      },{duration:2})
      animate("#contactContent",{opacity:[0,1],
        x:[-500,0]
      },{duration:2})
      animate("#contactSvg",{opacity:[0,1],
        x:[500,0]
      },{duration:2})
    })
    
  }, [])
  
  return (
    <>
      

      <div className='overflow-x-hidden'>
        
      <section >
      <video src="/heroBg4.mp4" className='relative w-dvw h-svh md:h-dvh object-cover' autoPlay  loop muted ></video>
      <div className='absolute top-0 bottom-0 left-0 right-0  z-50 costumebg'>
      <Hero />
      </div>
      </section>
      <section id='about'>
      <AboutUs />
      </section>

      <section className='opacity-0' id='service'>
      <Services />
      </section>

      

      <section className="relative " id='portofolioSection'>
        <Projects />
        <figure className="hidden lg:block lg:w-[340px] lg:h-[414.25px] absolute left-[310px] -top-24 ">
          <img src="/Ellipse 40.svg" alt="svg elipse" />
        </figure>
      </section>

<section>
  <FAQ/>
</section>

      <section id='contactSection'>
      <ContactUs/>
      </section>
      </div>
      
    </>
  )
}
