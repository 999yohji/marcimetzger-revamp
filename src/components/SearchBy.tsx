import React from 'react'
import neighborhood from '../assets/neighborhood.jpg'
import lifestyle from '../assets/lifestyle.jpg'
import { ArrowRight } from 'lucide-react'
import { useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const SearchBy = () => {
  const container = useRef<HTMLDivElement>(null)

  const { contextSafe } = useGSAP(() => {
    gsap.set('.learn-more', { y: 20 })

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

  const showLearnMore = contextSafe((e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget.querySelector('.learn-more'), {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: 'power3.out',
      overwrite: true,
    })
  })

  const hideLearnMore = contextSafe((e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget.querySelector('.learn-more'), {
      y: 20,
      opacity: 0,
      duration: 0.3,
      ease: 'power3.in',
      overwrite: true,
    })
  })

  return (
    <div ref={container} className='min-h-svh bg-[#ECECEC] flex flex-col p-16 gap-4'>
      <div className='reveal'>
        <h1><i>Search By</i></h1>
        <p>Help us help you. What are you looking for?</p>
      </div>

      <div className='flex flex-1 px-48 py-8 gap-16'>
        <div
          onMouseEnter={showLearnMore}
          onMouseLeave={hideLearnMore}
          className='reveal relative isolate flex-center flex-1 border-4 cursor-pointer'
        >
          <img src={neighborhood} alt="Search by Neighborhood" className='absolute inset-0 z-0 h-full w-full object-cover' />
          <div className='absolute inset-0 z-10 bg-black/40 backdrop-blur-xs' />
          <div className='relative z-20 flex flex-col items-center gap-8'>
            <h1 className='text-white font-normal'>Search by <i>Neighborhood</i></h1>
            <p className='learn-more opacity-0 flex-center text-white gap-2'>LEARN MORE <ArrowRight /></p>
          </div>
        </div>

        <div
          onMouseEnter={showLearnMore}
          onMouseLeave={hideLearnMore}
          className='reveal relative isolate flex-center flex-1 border-4 cursor-pointer'
        >
          <img src={lifestyle} alt="Search by Lifestyle" className='absolute inset-0 z-0 h-full w-full object-cover' />
          <div className='absolute inset-0 z-10 bg-black/40 backdrop-blur-xs' />
          <div className='relative z-20 flex flex-col items-center gap-8'>
            <h1 className='text-white font-normal'>Search by <i>Lifestyle</i></h1>
            <p className='learn-more opacity-0 flex-center text-white gap-2'>LEARN MORE <ArrowRight /></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBy