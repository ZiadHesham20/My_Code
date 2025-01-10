import React, { useState } from 'react';
import { IoMail, IoCallSharp } from 'react-icons/io5';
import { FaWhatsapp, FaFacebook, FaInstagram, FaTiktok, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Inline styles for section layout
  const sectionStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    padding: '50px 0',
    display: 'flex',
    justifyContent: 'flex-start', // Align content to the left
  };

  // List of contact items
  const listItems = [
    {
      title: 'Email',
      link: 'mycodee39@gmail.com',
      linkAnchor: 'mailto:mycodee39@gmail.com',
      icon: <IoMail className="text-5xl text-[var(--secondryColor)]" />,
    },
    {
      title: 'Whatsapp',
      link: '01123437255',
      linkAnchor: 'https://api.whatsapp.com/send/?phone=201123437255',
      icon: <FaWhatsapp className="text-5xl text-[var(--secondryColor)]" />,
    },
    {
      title: 'Phone',
      link1: '01123437255',
      link2: '01094608991',
      linkAnchor1: 'tel:01123437255',
      linkAnchor2: 'tel:01094608991',
      icon: <IoCallSharp className="text-5xl text-[var(--secondryColor)]" />,
    },
  ];

  // Social media links and icons
  const socialIcons = [
    {
      title: 'Facebook',
      link: 'https://www.facebook.com/profile.php?id=100093022880956',
      icon: <FaFacebook className="text-5xl text-[var(--secondryColor)] iconPulse" />,
    },
    {
      title: 'Instagram',
      link: 'https://www.instagram.com/my_code39',
      icon: <FaInstagram className="text-5xl text-[var(--secondryColor)] iconPulse" />,
    },
    {
      title: 'TikTok',
      link: 'https://www.tiktok.com/@my_code39',
      icon: <FaTiktok className="text-5xl text-[var(--secondryColor)] iconPulse" />,
    },
  ];

  return (
    <div>
      {/* Contact Us Section */}
      <section style={sectionStyle} className="relative md:mb-20" id="contactUs">
        <div className="container mx-auto px-5 sm:px-0 flex flex-col sm:flex-row justify-start">
          <div className="w-full mt-10 sm:mt-0">
            <div className="text-left mb-8">
              <h3 className="font-semibold md:text-6xl text-4xl gradiantText relative">
                Contact Us
              </h3>
              <hr className="border-t-2 border-[var(--secondryColor)] w-full mx-0 mt-4 mb-4"></hr>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 mb-8">
              {listItems.map((item, idx) => (
                <div key={idx} className="flex flex-col items-start sm:items-center mb-6 sm:mb-0">
                  <div className="flex flex-col items-center">
                    {item.icon}
                    {item.title !== 'Phone' ? (
                      <p className="text-gray-500">
                        <a href={item.linkAnchor} className="hover:text-[var(--secondryColor)]">
                          {item.link}
                        </a>
                      </p>
                    ) : (
                      <>
                        <p className="text-gray-500">
                          <a href={item.linkAnchor1} className="hover:text-[var(--secondryColor)]">
                            {item.link1}
                          </a>
                        </p>
                        <p className="text-gray-500">
                          <a href={item.linkAnchor2} className="hover:text-[var(--secondryColor)]">
                            {item.link2}
                          </a>
                        </p>
                      </>
                    )}
                  </div>
                </div>
              ))}

              <div className="flex flex-col items-center sm:items-start">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-[var(--secondryColor)] m-auto py-2 rounded-full hover:bg-opacity-90 transition duration-300 scheduleButton"
                >
                  <FaCalendarAlt size={40} />
                </button>
                <div className="text-sl text-gray-500 mt-2 sm:mt-0">Schedule a Call</div>
              </div>
            </div>

            {isModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2">
                  <div className="p-4 flex justify-between items-center border-b">
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="bg-[var(--secondryColor)] text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition duration-300 ml-4"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="p-4">
                    <iframe
                      src="https://calendly.com/mrere0013/30min"
                      style={{ width: '100%', height: '500px' }}
                      frameBorder="0"
                      title="Schedule a Call"
                    ></iframe>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Follow Us Section */}
      <section className="relative mb-20">
        <div className="container mx-auto px-5 sm:px-0 flex flex-col sm:flex-row justify-start">
          <div className="w-full md:mt-10 mt-0">
            <div className="text-left mb-8">
              <h3 className="font-semibold md:text-6xl text-4xl gradiantText relative">Follow Us</h3>
              <hr className="border-t-2 border-[var(--secondryColor)] w-full mx-0 mt-4 mb-4"></hr>
            </div>

            <div className="flex flex-wrap sm:space-x-6 space-x-4">
              {socialIcons.map((social, idx) => (
                <Link
                  key={idx}
                  to={social.link}
                  target="_blank"
                  className="flex items-center space-x-2"
                  aria-label={social.title}
                >
                  {social.icon}
                  <div className="h-full w-1  mx-4"></div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>
        {`
          .iconPulse:hover {
            animation: pulseAnimation 1s infinite;
          }

          @keyframes pulseAnimation {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
          }

          .scheduleButton {
            align-self: flex-start;
          }

          .text-sl {
            margin-top: 10px;
          }

          @media (max-width: 640px) {
            .flex-col { align-items: center; }
          }
        `}
      </style>
    </div>
  );
};

export default ContactUs;

