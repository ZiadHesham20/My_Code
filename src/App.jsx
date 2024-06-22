import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import AboutMe from './Components/AboutMe';
import Footer from './Components/Footer';
import Projects from './Components/Projects';

function App() {
  return (
    <>
      <header className="pt-16 w-full relative">
        <Navbar />
        <div className="absolute top-10 left-[1292px]">
          <svg
            width="171"
            height="183"
            viewBox="0 0 280 301"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_16_166)">
              <path
                d="M231 147.511C231 191.454 173.19 241 129.391 241C85.5927 241 60 164.371 60 120.428C60 76.4854 105.419 58 149.217 58C193.016 58 231 103.568 231 147.511Z"
                fill="url(#paint0_linear_16_166)"
                fill-opacity="0.12"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_16_166"
                x="0"
                y="-2"
                width="291"
                height="303"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="30"
                  result="effect1_foregroundBlur_16_166"
                />
              </filter>
              <linearGradient
                id="paint0_linear_16_166"
                x1="60"
                y1="149.5"
                x2="231"
                y2="149.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#B224EF" />
                <stop offset="1" stop-color="#7579FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </header>

      <Hero />

      <Skills />

      <AboutMe />

      <div className="relative">
        <Projects />
        <figure className="w-[340px] h-[414.25px] absolute left-[310px] -top-24 ">
          <img src="/Ellipse 40.svg" alt="svg elipse" />
        </figure>
      </div>

      <section className="relative overflow-hidden">
        <Footer />
        <figure className="absolute bottom-36 -right-36 rotate-180">
          <img src="/Ellipse 35.svg" className="w-full" alt="" />
        </figure>
      </section>
    </>
  );
}

export default App;
