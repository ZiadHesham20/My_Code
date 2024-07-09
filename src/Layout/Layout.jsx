import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

export default function Layout({childern}) {
  return <>
  <header className=" w-full fixed top-0 z-[100] overflow-hidden">
        <Navbar />
        
      </header>

{childern}
      <section className="relative overflow-hidden">
        <Footer />
        <figure className="absolute bottom-36 -right-36 rotate-180 hidden lg:block">
          <img src="/Ellipse 35.svg" className="w-full" alt="" />
        </figure>
      </section>   
  </>
}
