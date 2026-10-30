import { useRef, useEffect, useState } from 'react'
import villa2 from '../assets/villa2kitchen.jpg'
import villa2vista from '../assets/villa2backvista.jpg'
import { Button } from "@/components/ui/button"
import { MoveRight, Phone } from 'lucide-react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const images = [
  { src: villa2, alt: 'Villa Kitchen' },
  { src: villa2vista, alt: 'Villa Back Vista' },
]

const PropertySpotlight = () => {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.reveal', {
      x: 80,
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

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(id)
  }, [])

  return (
    <div ref={container} className="relative h-svh w-full p-16 overflow-hidden">
      {images.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          className={`absolute -z-1 inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'
            }`}
        />
      ))}

      <div className='z-999 h-full flex justify-end items-center'>
        <div className='reveal bg-black/50 p-12 backdrop-blur-xs rounded-md flex flex-col gap-2'>
          <div>
            <h1 className='text-white font-normal'>Property <i>Spotlight</i></h1>
            <p className='font-[Playfair_Display] text-base text-white'><i>47 Pajero St., Beryl, UT</i></p>
            <p className='text-[#ACACAC]'>5 bd; 3 ba; 5,100 sqft</p>
          </div>
          <p className='text-white'>A homely, modern villa with an expansive yard and patio out back and<br />most notably a kitchen complete with fixtures for the chefs out there.</p>
          <div className='flex gap-2'>
            <Button
              variant='secondary'
              size='lg'
              className="cursor-pointer p-6 backdrop-blur-sm border-none"
            >
              <p className='flex-center gap-2'>
                SEE FULL DETAILS <MoveRight />
              </p>
            </Button>
            <Button
              variant='outline'
              size='lg'
              className="cursor-pointer p-6 bg-white/10 text-white border-white/40 backdrop-blur-sm hover:bg-white/20 hover:text-white"
            >
              <p className='flex-center gap-2'>
                <Phone /> BOOK A CALL 
              </p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertySpotlight