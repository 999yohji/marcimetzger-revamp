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
        start: 'top 40%',
      },
    })
  }, { scope: container })

  return (
    <div ref={container} className="min-h-[70svh] flex flex-col gap-16 px-64 py-16">

      <hr className='border-[#1D151760]' />

      <h1 className="reveal font-[Montserrat] font-normal">ABOUT ME</h1>

      <div className='flex px-4 gap-8'>
        <img src={selfPhoto} alt="Marci's Portrait" className='reveal' />
        <div className='flex flex-col gap-8'>
          <div className='flex justify-center gap-16'>
            <div className='reveal flex-center flex-col'>
              <h1 className='font-[Montserrat] text-[#1D1517] text-6xl font-medium'>$500M+</h1>
              <p className='text-center'>Volume Sold</p>
            </div>
            <div className='reveal flex-center flex-col'>
              <h1 className='font-[Montserrat] text-[#1D1517] text-6xl font-medium'>900+</h1>
              <p className='text-center'>Homes and Properties Sold</p>
            </div>
          </div>

          <h1 className='reveal font-[Montserrat] text-3xl font-medium'>Once a greenhorn broker, now a veteran realtor.</h1>

          <div className='reveal'>
            <p>Hailing from Pahrump, Nevada, Marci Metzger has been in the real estate business for over 31 years. She's closed small and big deals alike; whether it may be first-time movers or full-scale businesses moving into a new workplace, she's done it all. One of her most notable achievements was in 2021, where she and her team closed a record $28.5M in sales helping more than 85 clients attain their ideal properties.
              As one of the members of The Ridge Realty Group and Pahrump Valley Chamber of Commerce, Marci consistently ranks among the top agents in the firm. She's regarded as one of the most experienced realtors in Nevada real estate with her ability and knowledge of all the ins and outs of the home buying and selling process.
              <br />In her words, "With my skillset, no matter what you're looking for, I'll get the job done."</p>
          </div>
        </div>
      </div>

      <hr className='border-[#1D151760]' />
    </div>
  )
}

export default AboutMe