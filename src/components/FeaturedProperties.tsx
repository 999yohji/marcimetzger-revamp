import { MoveRight } from 'lucide-react'
import villa from '../assets/villa.jpg'
import mansion from '../assets/modernmansion.jpg'
import { Button } from "@/components/ui/button"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger)

const FeaturedProperties = () => {
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
    <div ref={container} className="flex min-h-svh flex-col gap-4 p-4 sm:p-8 lg:p-16">
      <div className="flex flex-col gap-10 md:flex-row md:gap-12 lg:gap-20 my-auto">

        {/* Left column: heading + mansion */}
        <div className="flex flex-1 flex-col gap-4">
          <div className="reveal">
            <h1 className="text-3xl md:text-4xl"><i>Featured Properties</i></h1>
            <p>Cream of the crop.</p>
          </div>
          <div className="reveal flex flex-col gap-4">
            <img src={mansion} alt="103 Southend Homes Property Image" className="aspect-[5/4] w-full object-cover" />
            <hr className="border-[#1D151760]" />
            <div className="flex flex-col gap-2">
              <p className="font-[Playfair_Display] text-base"><i>103 Southend Homes, Santa Cruz, CA</i></p>
              <p className="text-[#858585]">6 bd; 4 ba; 7,107 sqft</p>
              <p>A seaside mansion with an edgeless pool, complete with sunloungers and furniture at the patio. An architectural show of elegance.</p>
            </div>
          </div>
        </div>

        {/* Right column: villa + button */}
        <div className="flex flex-1 flex-col gap-8 md:gap-16">
          <div className="reveal flex flex-col gap-4">
            <img src={villa} alt="679 King's Bridge Property Image" className="aspect-[5/4] w-full object-cover" />
            <hr className="border-[#1D151760]" />
            <div className="flex flex-col gap-2">
              <p className="font-[Playfair_Display] text-base"><i>679 King's Bridge Rd., Tallahassee, FL</i></p>
              <p className="text-[#858585]">5 bd; 3 ba; 4,250 sqft</p>
              <p>A suburban mediterranean-style villa with a lanai and a pool right outside, surrounded with multitudes of miniature trees and sprawling greenery.</p>
            </div>
          </div>
          <div className="x-swipe flex justify-end md:mt-auto">
            <Button variant="outline" size="lg" className="w-full cursor-pointer p-6 sm:w-auto">
              VIEW ALL <MoveRight />
            </Button>
          </div>
        </div>

      </div>
      <hr className="border-[#1D151760]" />
    </div>
  )
}

export default FeaturedProperties