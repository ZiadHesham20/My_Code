import React from 'react'

export default function FAQ() {
  return (
    


<div className=" relative overflow-hidden" id='faq'>
<div className="container grid grid-cols-12   justify-items-center w-11/12 m-auto px-7 md:px-12 pb-20 ">
  {/* title */}
  <div className="col-span-12 relative  justify-self-start w-full md:w-auto">
    <h3 className="font-semibold md:text-6xl text-4xl gradiantText relative" id='portofilioTitle'>
      FAQ
    </h3>
    <div className='absolute top-[10%] lg:top-[0%] md:top-[8%] md:-left-[100px] -left-[77px] lg:-left-36'>
<svg className='w-[75.21px] h-[37.07px] md:w-[100px] md:h-[50px] lg:w-[138px] lg:h-[68.01px]'  viewBox="0 0 83 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="13.7518" cy="8.68705" r="8.68705" fill="#EDEEFF"/>
<circle cx="44.5288" cy="8.68705" r="8.68705" fill="#EDEEFF"/>
<circle cx="74.313" cy="8.68705" r="8.68705" fill="#EDEEFF"/>
<circle cx="13.7518" cy="34.0036" r="8.68705" fill="#EDEEFF"/>
<circle cx="44.5288" cy="34.0036" r="8.68705" fill="#EDEEFF"/>
<circle cx="74.313" cy="34.0036" r="8.68705" fill="#EDEEFF"/>
<circle cx="13.7518" cy="59.3202" r="8.68705" fill="#EDEEFF"/>
<circle cx="44.5288" cy="59.3202" r="8.68705" fill="#EDEEFF"/>
<circle cx="74.313" cy="59.3202" r="8.68705" fill="#EDEEFF"/>
</svg>

</div>
  </div>
  <div className="col-span-12 w-full md:mb-10 md:mt-10 mb-5 mt-5">
            <hr className="border-t-2 border-[var(--secondryColor)] w-full " />
          </div>
  {/* slider */}
  <div className="col-span-12 w-full z-50  " id='portofilioContent'>
  <div>
      <div className="collapse collapse-plus bg-[#17172e]">
        
  <input type="checkbox" name="my-accordion-3"  aria-labelledby='firstQ'/>
  <div className="collapse-title text-xl font-medium text-white">What sets My Code apart from other agencies?</div>
  <div className="collapse-content">
    <p className='text-white'>Our unique combination of creativity, technical expertise, and commitment to client satisfaction sets us 
    apart. We pride ourselves on delivering high-quality projects efficiently and competitively</p>
  </div>
</div>
<div className="collapse collapse-plus my-2 bg-[#17172e]">

  <input type="checkbox" name="my-accordion-3" aria-labelledby='secondQ'/>
  <div className="collapse-title text-xl font-medium text-white">Who are your typical clients?</div>
  <div className="collapse-content">
    <p className='text-white'>We work with a diverse range of clients, from startups to major brands and established companies.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-[#17172e]">

  <input type="checkbox" name="my-accordion-3" aria-labelledby='thirdQ'/>
  <div className="collapse-title text-xl font-medium text-white"> How can I get a quote for my project?</div>
  <div className="collapse-content">
    <p className='text-white'>You can get a quote by contacting us through our website’s contact form or by emailing us directly at 
    [Mycodee39@gmail.com]</p>
  </div>
</div>
<div className="collapse collapse-plus my-2 bg-[#17172e]">

  <input type="checkbox" name="my-accordion-3" aria-labelledby='fourthQ'/>
  <div className="collapse-title text-xl font-medium text-white">What is the process for starting a project with My Code?</div>
  <div className="collapse-content">
    <p className='text-white'>The process typically starts with an initial consultation to understand your needs, followed by a proposal 
outlining the project scope, timeline, and cost. Once the proposal is approved, we require a deposit 
before beginning the design and development phases. This ensures that we can allocate the necessary 
resources to your project and commit to delivering high-quality work on time.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-[#17172e]">

  <input type="checkbox" name="my-accordion-3" aria-labelledby='fifthQ'/>
  <div className="collapse-title text-xl font-medium text-white">How long does it take to complete a project?</div>
  <div className="collapse-content">
    <p className='text-white'>Project timelines vary depending on the complexity and scope of work. During the proposal stage, 
we provide an estimated timeline tailored to your project. Our team is committed to delivering your 
project as quickly as possible while maintaining the highest standards of quality.</p>
  </div>
</div>
<div className="collapse collapse-plus my-2 bg-[#17172e]">

  <input type="checkbox" name="my-accordion-3" aria-labelledby='sixthQ'/>
  <div className="collapse-title text-xl font-medium text-white">Can you work with clients outside of Egypt?</div>
  <div className="collapse-content">
    <p className='text-white'>Yes, we work with clients from around the world. Our team is experienced in handling remote projects 
    effectively.</p>
  </div>
</div>
<div className="collapse collapse-plus  bg-[#17172e]">

  <input type="checkbox" name="my-accordion-3" aria-labelledby='seventhQ'/>
  <div className="collapse-title text-xl font-medium text-white">Can I see examples of your previous work?</div>
  <div className="collapse-content">
    <p className='text-white'>Absolutely! Please visit our portfolio page to see examples of the projects we have completed for our 
    clients.</p>
  </div>
</div>
<div className="collapse collapse-plus my-2 bg-[#17172e]">

  <input type="checkbox" name="my-accordion-3" aria-labelledby='eightQ'/>
  <div className="collapse-title text-xl font-medium text-white">What is your pricing structure?</div>
  <div className="collapse-content">
    <p className='text-white'>Our pricing is based on the specific requirements of each project. We provide detailed quotes after 
    understanding the scope and complexity of the work involved</p>
  </div>
</div>
    </div>
  </div>
</div>

{/* svg aroud */}
<figure className="w-[340px] h-[414.25px] absolute -right-40 ">
  <img src="/Ellipse 39.svg" alt="svg elipse" />
</figure>

</div>
  )
}
