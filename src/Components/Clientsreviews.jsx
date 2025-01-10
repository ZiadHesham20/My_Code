import React, { useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import ismail from './Ismail nasr.jpeg';
import ameer from './Ameer elgelany.jpeg';

export default function ClientsReviews() {
  const reviews = [
    {
      id: 1,
      name: "Ismail Nasr",
      company: "Startup Packing",
      qualityCode: "\u2b50\u2b50\u2b50\u2b50\u2b50",
      ownerReview:
        "Everything I asked for was done to the highest standard, supervised by Engineer Mohand himself.",
      image: ismail,
    },
    {
      id: 2,
      name: "Ameer Elgelany",
      company: "Packing Pro",
      qualityCode: "\u2b50\u2b50\u2b50\u2b50\u2b50",
      ownerReview:
        "Our marketing campaign achieved great results, showcasing the team's excellent work.",
      image: ameer,
    },
    {
      id: 3,
      name: "Chief Bushra Alsayed",
      company: "Mazaq",
      qualityCode: "\u2b50\u2b50\u2b50\u2b50\u2b50",
      ownerReview:
        "Their designs were stunning and perfectly captured our brand identity. Highly recommended.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Hind Al-Hussaini",
      company: "H2 Services",
      qualityCode: "\u2b50\u2b50\u2b50\u2b50\u2b50",
      ownerReview:
        "A professional team that delivers top-quality services across all fields. Outstanding experience.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Anonymous",
      company: "Fast Pack",
      qualityCode: "\u2b50\u2b50\u2b50\u2b50\u2b50",
      ownerReview:
        "Amazing work, the team delivered exactly what I needed with excellent communication.",
      image: "https://via.placeholder.com/150",
    },
  ];

  const reviewsContainerRef = useRef(null);

  // Scroll functions
  const scrollLeft = () => {
    if (reviewsContainerRef.current) {
      reviewsContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (reviewsContainerRef.current) {
      reviewsContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // Auto scroll function with loop
  useEffect(() => {
    const scrollContainer = reviewsContainerRef.current;
    if (!scrollContainer) return;

    const totalWidth = scrollContainer.scrollWidth;
    const containerWidth = scrollContainer.clientWidth;

    const interval = setInterval(() => {
      if (scrollContainer.scrollLeft + containerWidth >= totalWidth) {
        // If we reach the end, scroll back to the start
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
      }
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(interval); // Clear interval when component unmounts
  }, []);

  return (
    <div className="relative " id="clientsReviews">
      {/* Title and Underline */}
      <div className="mb-10 ml-6">
      <h3 className="font-semibold md:text-6xl text-4xl gradiantText relative ml-4">
                Clients Reviews
              </h3>
              <hr class="border-t-2 border-[var(--secondryColor)] w-full "></hr>

      </div>

      {/* Updated Arrow Buttons */}
      <button
        onClick={scrollLeft}
        className="absolute left-4 top-[50%] transform -translate-y-1/2 z-10 w-12 h-12 rounded-[10px] flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{
          background: "transparent",
          border: "3px solid #7579ff",
          borderRadius: "50px",
        }}
      >
        <FaChevronLeft className="w-6 h-6" style={{ color: "#7579ff" }} />
      </button>

      <button
        onClick={scrollRight}
        className="absolute right-4 top-[50%] transform -translate-y-1/2 z-10 w-12 h-12 rounded-[10px] flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{
          background: "transparent",
          border: "3px solid #7579ff",
          borderRadius: "50px",
        }}
      >
        <FaChevronRight className="w-6 h-6" style={{ color: "#7579ff" }} />
      </button>

      {/* Reviews Cards Container */}
      <div
        ref={reviewsContainerRef}
        className="flex justify-start gap-8 px-16"
        style={{ overflowX: "hidden", paddingBottom: "20px" }}
      >
        {reviews.map((review) => (
          <div
            key={review.id}
            className="relative w-[300px] h-[400px] bg-gradient-to-r from-blue-700 via-indigo-800 to-blue-900 shadow-lg rounded-[20px] p-6 flex-shrink-0"
            style={{ overflow: "hidden" }}
          >
            <div className="relative w-[150px] h-[150px] overflow-hidden rounded-full border-2 border-white mx-auto">
              <img
                src={review.image}
                alt={review.name || "Anonymous"}
                className="w-full h-full object-cover"
                style={{ objectPosition: "center" }}
              />
            </div>
            {/* Main Card Content */}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-white" style={{ wordWrap: "break-word" }}>
                {review.name || "Anonymous"}
              </h3>
              <p className="text-sm text-gray-300 mt-1">
                {review.id === 2 ? "OWNER OF SOUQ SAMAK PORTSAID RESTAURANT" : `CEO: ${review.company}`}
              </p>
              <p
                className="mt-2"
                style={{
                  background: "linear-gradient(to right, red, purple, white)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                {review.qualityCode}
              </p>

              <p
                className={`mt-4 text-gray-200 ${review.id === 2 ? "relative -top-4" : ""}`} // Adjust position for card 2
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxHeight: "100px",
                }}
              >
                {review.ownerReview}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
