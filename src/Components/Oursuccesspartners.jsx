import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo1 from './samak.jpeg';
import logo2 from './packing.jpeg';
import logo3 from './h2group.jpeg';
import logo4 from './mazaq.jpg';
import logo5 from './Masr el kher RE.jpg';

const logos = [
  { src: logo1, path: '/pagelogo1' },
  { src: logo2, path: '/pagelogo2' },
  { src: logo3, path: '/pagelogo3' },
  { src: logo4, path: '/pagelogo3' },
  { src: logo5, path: '/pagelogo3' },
];

const OurSuccessPartners = () => {
  const navigate = useNavigate();

  const handleLogoClick = (path) => {
    navigate(path);
  };

  return (
    <>
      <h3
        className="font-semibold md:text-6xl text-4xl gradiantText relative"
        id="portofilioTitle"
      >
        Our Success Partners
      </h3>
      <hr className="border-t-2 border-[var(--secondryColor)] w-full " />
      <div className="partners-section my-10 md:my-20">
        <div className="logo-container">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="logo-wrapper"
              onClick={() => handleLogoClick(logo.path)}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={logo.src}
                alt={`Logo ${index + 1}`}
                className="logo"
              />
            </div>
          ))}
        </div>

        <style>{`
          .partners-section {
            text-align: center;
            padding: 20px;
            background-color: rgb(10, 8, 28);
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            
          }

          .logo-container {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
          }

          .logo-wrapper {
            display: inline-block;
            transition: transform 0.3s ease-in-out;
          }

          .logo-wrapper:hover {
            transform: scale(1.1);
          }

          .logo {
            border-radius: 50%;
            width: 15vw;
            height: 15vw;
            border: 3px solid #003366;
            transition: transform 0.3s ease-in-out;
          }

          @media (max-width: 768px) {
            .logo {
              width: 25vw;
              height: 25vw;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default OurSuccessPartners;
