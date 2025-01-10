import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBackCircleOutline } from 'react-icons/io5';

export default function MobileApplication() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState([]);

  const appList = [
    {
      id: 1,
      title: 'MagentaZuhause App',
      images: [
        '/mobile/Deutsche Telekom/MagentaZuhauseApp1.webp',
        '/mobile/Deutsche Telekom/MagentaZuhauseApp2.webp',
        '/mobile/Deutsche Telekom/MagentaZuhauseApp3.webp',
        '/mobile/Deutsche Telekom/MagentaZuhauseApp4.webp',
        '/mobile/Deutsche Telekom/MagentaZuhauseApp5.webp',
        '/mobile/Deutsche Telekom/MagentaZuhauseApp6.webp',
        '/mobile/Deutsche Telekom/MagentaZuhauseApp7.webp',
        '/mobile/Deutsche Telekom/MagentaZuhauseApp8.webp',
        '/mobile/Deutsche Telekom/MagentaZuhauseApp9.webp'
      ],
      description: "SmartHome MagentaZuhause IOT app is the helpful center for your household. Get comprehensive support for everyday routines such as controlling your smart home and managing shopping and to-do lists together. This allows you to organize your home in no time at all, since all household members have access to the smart home and can control it. If something doesn't go as planned, you can be informed automatically by notifications, e.g. on security and energy saving. So you always know what's going on at home.",
    },
    {
      id: 2,
      title: 'Upshifter App',
      images: [
        '/mobile/upshift/upshift1.webp',
        '/mobile/upshift/upshift2.webp',
        '/mobile/upshift/upshift3.webp',
        '/mobile/upshift/upshift4.webp'
      ],
      description: "Find flexible, hourly work that fits your schedule! Do you want to earn extra cash and choose when and where you work? With Upshift, you can make your own schedule working at local businesses and get paid daily. No hour minimums, no resumes, no interviews!",
    },
    {
      id: 3,
      title: 'MC Ledger',
      images: [
        '/mobile/MC Ledger/mcledger1.png',
        '/mobile/MC Ledger/mcledger2.png',
        '/mobile/MC Ledger/mcledger3.png',
        '/mobile/MC Ledger/mcledger4.png',
        '/mobile/MC Ledger/mcledger5.png',
        '/mobile/MC Ledger/mcledger6.png',
        '/mobile/MC Ledger/mcledger7.png',
        '/mobile/MC Ledger/mcledger8.png',
        '/mobile/MC Ledger/mcledger9.png',
        '/mobile/MC Ledger/mcledger10.png',
        '/mobile/MC Ledger/mcledger11.png',
        '/mobile/MC Ledger/mcledger12.png',
        '/mobile/MC Ledger/mcledger13.png',
        '/mobile/MC Ledger/mcledger14.png',
        '/mobile/MC Ledger/mcledger15.png',
        '/mobile/MC Ledger/mcledger16.png',
      ],
      description: "project available on United Arab Emirates, All you need to do is easily ‘snap’ photos of your monthly invoices and documents where an engine of professional accountants, on standby will manage the accounting mechanism and instantly generate full financial reports.",
    },
    
  ];

  function handleModalOpen(e) {
    const selectedApp = appList.find((elem) => elem.id == e.target.id);
    document.getElementById('my_modal_2').showModal();
    setCurrentImages(selectedApp.images);
    setCurrentImageIndex(0); // Reset index to 0 when opening the modal
  }

  function handleNext() {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === currentImages.length - 1 ? 0 : prevIndex + 1
    );
  }

  function handlePrev() {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? currentImages.length - 1 : prevIndex - 1
    );
  }

  return (
    <>
      <div className="my-20 pt-5">
        {/* svg */}
        <div className="absolute top-[100px] left-[-99px] ">
          {/* SVG content here */}
        </div>

        {/* content */}
        <div className="flex items-center">
          <Link to="javascript:history.back()" className="z-50">
            <IoArrowBackCircleOutline className="text-5xl text-[var(--secondryColor)]" />
          </Link>
          <h3 className="text-3xl md:text-5xl font-semibold text-white">
            Mobile Application
          </h3>
        </div>
        <div className="px-5 md:px-10 mt-5 grid grid-cols-12 justify-items-center gap-y-5 md:gap-5 lg:gap-y-5">
          {appList.map((elem, idx) => (
            <div className="col-span-12 md:col-span-6 lg:col-span-4" key={idx}>
              <div className="card bg-white w-[22rem] lg:w-96 shadow-xl">
                <figure>
                  <img
                    className="w-full h-[268px] object-contain"
                    src={elem.images[0]}
                    alt={elem.title}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-2xl gradiantText">
                    {elem.title}
                  </h2>
                  <div className='h-[100px] overflow-y-scroll costumScroll'>
                    <p className="text-sm text-gray-600">
                      {elem.description}
                    </p>
                  </div>
                  <div className="card-actions justify-end">
                    <button
                      className="btn btn-primary bg-[var(--secondryColor)] text-white w-full"
                      id={elem.id}
                      onClick={handleModalOpen}
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <dialog id="my_modal_2" className="modal p-2 md:p-28">
        <div className="modal-box p-10 bg-[var(--mainColor)]">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl md:text-2xl">
              ✕
            </button>
          </form>
          
          <div className="carousel w-full">
            <div className="carousel-item relative w-full">
              <figure className="flex justify-center m-auto">
                <img
                  src={currentImages[currentImageIndex]}
                  alt="image"
                  className="rounded-lg md:h-[631px] object-contain"
                />
              </figure>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                {/* prev button */}
                <button onClick={handlePrev} className="btn btn-circle">❮</button>
                {/* next button */}
                <button onClick={handleNext} className="btn btn-circle">❯</button>
              </div>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
