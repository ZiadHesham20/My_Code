import React from 'react'
import Navbar from './../Components/Navbar';
import Hero from '../Components/Hero';
import AboutUs from './../Components/AboutUs';
import Services from '../Components/Services';
import Projects from '../Components/Projects';
import Footer from './../Components/Footer';
import ContactUs from '../Components/ContactUs';


export default function Home() {
  return (
    <>
      

      <Hero />

      <AboutUs />

      <Services />

      

      <div className="relative">
        <Projects />
        <figure className="w-[340px] h-[414.25px] absolute left-[310px] -top-24 ">
          <img src="/Ellipse 40.svg" alt="svg elipse" />
        </figure>
      </div>

      <ContactUs/>
      
    </>
  )
}
