import ridge from '../assets/badges/ridge.jpg';
import realtor from '../assets/badges/realtor.jpg';
import eqo from '../assets/badges/eqo.jpg';
import pahrump from '../assets/badges/pahrump.jpg';
import { useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Affiliations = () => {
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
    
    gsap.from('.x-swipe', {
      x: -50, // Reduced slightly so it stays cleaner on mobile
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.15,
      scrollTrigger: {
        trigger: container.current,
        start: 'top 70%',
      },
    })
  }, { scope: container })

  return (
    // Added overflow-hidden here to trap the GSAP x-swipe animation and stop horizontal whitespace!
    <div ref={container} className="pb-16 overflow-hidden">
      {/* Replaced px-64 with responsive padding: px-6 sm:px-12 lg:px-24 xl:px-48 */}
      <div className='min-h-[30svh] border-[#1D151760] border-y-2 px-6 sm:px-12 lg:px-24 xl:px-48 py-8 flex flex-col gap-8'>
        
        <div className="flex-center pb-2">
          <p className="reveal text-sm sm:text-base lg:text-lg tracking-wider text-center">AFFILIATIONS AND ORGANIZATIONS</p>
        </div>

        <div>
          {/* Changed to flex-wrap and gap so logos stack/wrap cleanly on smaller screens instead of overflowing */}
          <div className="flex flex-wrap lg:flex-nowrap w-full justify-center lg:justify-between items-center gap-8 lg:gap-4">
            <img src={ridge} className='x-queries x-swipe max-h-16 sm:max-h-20 object-contain' alt="The Ridge Realty Group" />
            <img src={realtor} className='x-swipe max-h-16 sm:max-h-20 object-contain' alt="Realtor" />
            <img src={eqo} className='x-swipe max-h-16 sm:max-h-20 object-contain' alt="Equal Housing Opportunity" />
            <img src={pahrump} className='x-swipe max-h-16 sm:max-h-20 object-contain' alt="Pahrump Valley Chamber of Commerce" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Affiliations