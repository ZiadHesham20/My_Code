import Flicking from '@egjs/react-flicking';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Slider({ projectList }) {
  return (
    <Flicking
      moveType="freeScroll"
      horizontal={true}
      align={{ camera: '0%', panel: '40px' }}
      cameraClass="gap-x-5 md:gap-x-10 "
    >
      {projectList.map((elem, idx) => (
        <Link to={`/categoryDetails/${elem.link}`}>
        <span
          key={idx}
          className="relative w-[100%] h-[120px] md:w-[518px] md:h-[276px] bg-white rounded-[16.29px] md:rounded-[40px] customShadow flex items-end justify-center"
        >
          <div className="absolute -top-[40%] md:left-[10%] ">
            <img
              src={elem.image}
              className="w-[190px] h-[105.9px] md:w-[417.08px] md:h-[260px] rounded-[16px] projectImageShadow object-cover"
              alt="projectName"
            />
          </div>
          <div className="py-5 md:py-10 w-4/5">
            <h4 className="text-[10px] md:text-[24px] gradiantText font-semibold">
              {elem.name}
            </h4>
            <p className={`text-[7px] md:text-[14px] text-[var(--thirdColor)]`}>
              {elem.tags}
            </p>
          </div>
        </span>
        </Link>
      ))}
    </Flicking>
  );
}
