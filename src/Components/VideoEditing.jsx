import React from 'react'
import { IoArrowBackCircleOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'


export default function VideoEditing() {
    const videoList = [
        {
          title: "Cooking Channel Intro",
          video: "https://www.youtube.com/embed/jyFwB-nj9qg?si=-d0CdW5Hxx4spvKp",
        },
        {
          title: "Breaking Bad Intro Remake",
          video: "https://www.youtube.com/embed/vpk5px3DXbs?si=jqY_68gOLE22Jn91",
        },
        {
            title: "Football Intro",
            video: "https://www.youtube.com/embed/60jML8NV7sU?si=thuZozvnPwfk9AAj",
          },
        
        {
            title: "FC BARCELONA - VIVA LA VIDA",
            video: "https://www.youtube.com/embed/aE43YxOZv2E?si=LL_QT4j2Z0wh_Zvz",
          },
          {
            title: "Vlog Montage",
            video: "https://www.youtube.com/embed/20KIbtDzyvU?si=lNr34hDZPkb3-AYe",
          },
          
      ];
  return <>
  <div className='my-20 pt-5'>
          <div className='flex items-center'>
          <Link to={'/'}>
          <IoArrowBackCircleOutline  className='text-5xl text-[var(--secondryColor)]'/>
          </Link>
          <h3 className='text-5xl font-semibold text-white'>Video Editing</h3>
          </div>
          <div className='px-10 mt-5 grid grid-cols-12 justify-items-center gap-y-5'>
          {videoList.map((elem,idx)=><div className='col-span-4' key={idx}>
            <div className="card bg-white w-96 h-full shadow-xl">
  <figure>
  <iframe className='w-full h-[250px]' src={elem.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl gradiantText">{elem.title}</h2>
    <div >
    <p className='text-[var(--mainColor)] text-sm'>{elem.description}</p>
    </div>
  </div>
</div>
          </div>)}
          </div>
        </div>
  </>
}
