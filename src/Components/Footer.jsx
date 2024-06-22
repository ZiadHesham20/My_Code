import React from 'react';
import { FaInstagram } from 'react-icons/fa';

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
            <figure className="w-[19.48px] h-[19.48px] md:w-auto md:h-auto">
              <a href="#">
                <img src="/instagram.svg" className="w-full" alt="" />
              </a>
            </figure>
            <figure className="w-[19.48px] h-[19.48px] md:w-auto md:h-auto">
              <a href="#">
                <img src="/facebook.svg" className="w-full" alt="" />
              </a>
            </figure>
            <figure className="w-[19.48px] h-[19.48px] md:w-auto md:h-auto">
              <a href="#">
                <img src="/linkedin.svg" className="w-full" alt="" />
              </a>
            </figure>
            <figure className="w-[19.48px] h-[19.48px] md:w-auto md:h-auto">
              <a href="#">
                <img src="/twitter.svg" className="w-full" alt="" />
              </a>
            </figure>
          </div>
          <div>
            <h4 className="text-[14px] md:text-[18px] text-[var(--thirdColor)] md:text-center mt-2 md:mt-5">
              Hassan Abu Ali © 2022
            </h4>
          </div>
        </div>
      </footer>
    </>
  );
}
