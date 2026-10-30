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
    }),
      gsap.from('.x-swipe', {
        x: -80,
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
    <div ref={container} className="pb-16">
      <div className='min-h-[30svh] border-[#1D151760] border-y-2 px-64 py-8 flex flex-col gap-8'>
        <div className="flex-center pb-4"> {/* janky spacing, look into this later */}
          <p className="reveal text-lg">AFFILIATIONS AND ORGANIZATIONS</p>
        </div>
        <div>
          <div className="flex w-full justify-evenly items-center">
            <img src={ridge} className='x-swipe' alt="The Ridge Realty Group" />
            <img src={realtor} className='x-swipe' alt="Realtor" />
            <img src={eqo} className='x-swipe' alt="Equal Housing Opportunity" />
            <img src={pahrump} className='x-swipe' alt="Pahrump Valley Chamber of Commerce" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Affiliations