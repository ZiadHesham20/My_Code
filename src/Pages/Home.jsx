import React, { useEffect } from 'react';

import Hero from '../Components/Hero';
import AboutUs from './../Components/AboutUs';
import Services from '../Components/Services';
import Projects from '../Components/Projects';
import ClientsReviews from '../Components/Clientsreviews';
import ContactUs from '../Components/ContactUs';
import FAQ from '../Components/FAQ';
import { animate, inView } from 'framer-motion';
import vid from './vid.mp4';
import Oursuccesspartners from '../Components/Oursuccesspartners';

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    const handleInViewAnimation = (selector, animations, options = { duration: 1 }) => {
      inView(selector, ({ target }) => {
        if (target) animate(target, animations, options);
      });
    };

    // About Us Section Animations
    handleInViewAnimation('#about', { opacity: [0, 1] });
    handleInViewAnimation('#slogan', { opacity: [0, 1], x: [-500, 0] }, { duration: 2 });
    handleInViewAnimation('#aboutUsFirstsvg', { opacity: [0, 1], x: [-500, 0] }, { duration: 2 });
    handleInViewAnimation('#aboutContent', { opacity: [0, 1], x: [500, 0] }, { duration: 2 });
    handleInViewAnimation('#aboutUsSecondsvg', { opacity: [0, 1], x: [500, 0] }, { duration: 2 });

    // Services Section Animations
    handleInViewAnimation('#service', { opacity: [0, 1] });
    handleInViewAnimation('#serviceTitle', { opacity: [0, 1], x: [-500, 0] }, { duration: 2 });
    handleInViewAnimation('#down', { opacity: [0, 1], y: [500, 0] }, { duration: 2 });
    handleInViewAnimation('#right', { opacity: [0, 1], x: [500, 0] }, { duration: 2 });
    handleInViewAnimation('#left', { opacity: [0, 1], x: [-500, 0] }, { duration: 2 });

    // Portfolio Section Animations
    handleInViewAnimation('#portofolioSection', { opacity: [0, 1] });
    handleInViewAnimation('#portofilioTitle', { opacity: [0, 1], x: [-500, 0] }, { duration: 2 });
    handleInViewAnimation('#portofilioContent', { opacity: [0, 1], y: [500, 0] }, { duration: 2 });

    // Contact Section Animations
    handleInViewAnimation('#contactSection', { opacity: [0, 1] });
    handleInViewAnimation('#contactTitle', { opacity: [0, 1], x: [-500, 0] }, { duration: 2 });
    handleInViewAnimation('#contactContent', { opacity: [0, 1], x: [-500, 0] }, { duration: 2 });
    handleInViewAnimation('#contactSvg', { opacity: [0, 1], x: [500, 0] }, { duration: 2 });
  }, []);

  return (
    <>
      <div className="overflow-x-hidden">
        {/* Hero Section with Video Background */}
        <section>
          <video
            src={vid}
            autoPlay
            loop
            muted
            style={{
              height: '720px',
              width: '100%',
              objectFit: 'cover',
            }}
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 z-50 costumebg h-[100vh]">
            <Hero />
          </div>
        </section>

        {/* About Us Section */}
        <section id="about">
          <AboutUs />
        </section>

        {/* Services Section */}
        <section className="opacity-0" id="service">
          <Services />
        </section>

        {/* Portfolio Section */}
        <section className="relative" id="portofolioSection">
          <Projects />
          <figure className="hidden lg:block lg:w-[340px] lg:h-[414.25px] absolute left-[310px] -top-24">
            <img src="/Ellipse 40.svg" alt="svg ellipse" />
          </figure>
        </section>

        {/* FAQ Section */}
        <section>
          <FAQ />
        </section>

         {/* oursuccess Section */}
         <section id="Oursuccesspartners">
          <Oursuccesspartners />
        </section>

        {/* Clients Reviews Section */}
        <section>
          <ClientsReviews />
        </section>

        
         {/* Contact Section */}
         <section id="contactSection">
          <ContactUs />
        </section>
      </div>
    </>
  );
}
