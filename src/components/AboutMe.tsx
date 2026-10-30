import selfPhoto from '../assets/1x1.jpg'
import { useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const AboutMe = () => {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.reveal', {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: container.current,
        start: 'top 70%',
      },
    })
  }, { scope: container })

  return (
    <div ref={container} className="min-h-[70svh] flex flex-col gap-12 sm:gap-16 px-6 sm:px-12 lg:px-24 xl:px-36 py-12 sm:py-16 overflow-hidden">

      <hr className='border-[#1D151760]' />

      <div className="reveal text-center md:text-left">
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-normal'><i>About Me</i></h1>
        <p className='text-sm sm:text-base text-black/70 mt-1'>Up close and personal.</p>
      </div>

      <div className='flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12'>
        
        <img 
          src={selfPhoto} 
          alt="Marci's Portrait" 
          className='reveal w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[380px] rounded-sm object-cover shrink-0' 
        />

        <div className='flex flex-col gap-6 sm:gap-8 flex-1'>
          
          <div className='flex flex-col sm:flex-row justify-center gap-8 sm:gap-16 border-y border-[#1D151720] py-6'>
            <div className='reveal flex-center flex-col text-center'>
              <h2 className='font-[Montserrat] text-[#1D1517] text-4xl sm:text-5xl lg:text-6xl font-medium'>$500M+</h2>
              <p className='text-center text-xs sm:text-sm text-black/70 mt-1'>Volume Sold</p>
            </div>
            <div className='reveal flex-center flex-col text-center'>
              <h2 className='font-[Montserrat] text-[#1D1517] text-4xl sm:text-5xl lg:text-6xl font-medium'>900+</h2>
              <p className='text-center text-xs sm:text-sm text-black/70 mt-1'>Homes and Properties Sold</p>
            </div>
          </div>

          <h2 className='reveal font-[Montserrat] text-xl sm:text-2xl lg:text-3xl font-medium leading-snug text-center lg:text-left'>
            Once a greenhorn broker, now a veteran realtor.
          </h2>

          <div className='reveal space-y-4 text-sm sm:text-base text-black/80 leading-relaxed text-left'>
            <p>
              Hailing from Pahrump, Nevada, Marci Metzger has been in the real estate business for over 31 years. She's closed small and big deals alike; whether it may be first-time movers or full-scale businesses moving into a new workplace, she's done it all. One of her most notable achievements was in 2021, where she and her team closed a record $28.5M in sales helping more than 85 clients attain their ideal properties.
            </p>
            <p>
              As one of the members of The Ridge Realty Group and Pahrump Valley Chamber of Commerce, Marci consistently ranks among the top agents in the firm. She's regarded as one of the most experienced realtors in Nevada real estate with her ability and knowledge of all the ins and outs of the home buying and selling process.
            </p>
            <p className='italic font-medium text-black'>
              "With my skillset, no matter what you're looking for, I'll get the job done."
            </p>
          </div>

        </div>
      </div>

      <hr className='border-[#1D151760]' />
    </div>
  )
}

export default AboutMe