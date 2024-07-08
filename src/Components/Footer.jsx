import React from 'react';
import { FaInstagram,FaFacebook ,FaGoogle  } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <>
      <footer className="w-full h-[88px] md:h-[171px] bg-[var(--footerColor)] rounded-t-[60px] relative overflow-hidden z-50 flex justify-center items-center">
        {/* svg around */}
        <figure className="absolute bottom-[10%] -left-1 rotate-180">
          <img
            src="/Patron de Puntos8.svg"
            className="w-[65.62px] md:w-[95px]"
            alt=""
          />
        </figure>
        <figure className="absolute top-[30%] md:top-[10%] right-0 rotate-180">
          <img
            src="/Patron de Puntos9.svg"
            className="w-[48.7px] h-[24px] md:w-[128px] md:h-[63.08px]"
            alt=""
          />
        </figure>

        {/* social contnet */}
        <div>
          <div className="flex items-center justify-center gap-5 md:gap-11">
            <div>
              <Link target='_blank' to="https://www.instagram.com/my_code39?igsh=bDBjeTN5Z3psdmhy">
              <FaInstagram className='text-4xl text-[var(--mainColor)] hover:text-[var(--secondryColor)] transition-all ease-in-out'/>
              </Link>
            </div>
            <div>
              <Link target='_blank' to="https://www.facebook.com/profile.php?id=100093022880956&mibextid=ZbWKwL">
              <FaFacebook className='text-4xl text-[var(--mainColor)] hover:text-[var(--secondryColor)] transition-all ease-in-out'/>
              </Link>
            </div>
            
            <div>
              <Link target='_blank' to="mailto:mycidee39@gmail.com">
              <FaGoogle className='text-4xl text-[var(--mainColor)] hover:text-[var(--secondryColor)] transition-all ease-in-out'/>
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-[14px] md:text-[18px] text-[var(--thirdColor)] md:text-center mt-2 md:mt-5">
              My Code © 2024
            </h4>
          </div>
        </div>
      </footer>
    </>
  );
}
