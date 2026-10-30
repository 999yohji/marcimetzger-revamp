import { useRef, useEffect, useState } from 'react'
import villa2 from '../assets/villa2kitchen.jpg'
import villa2vista from '../assets/villa2backvista.jpg'
import neighborhood1 from '../assets/neighborhood/neighborhood1.jpg'
import neighborhood2 from '../assets/neighborhood/neighborhood2.jpg'
import neighborhood3 from '../assets/neighborhood/neighborhood3.jpg'
import neighborhood4 from '../assets/neighborhood/neighborhood4.jpg'
import neighborhood5 from '../assets/neighborhood/neighborhood5.jpg'
import neighborhood6 from '../assets/neighborhood/neighborhood6.jpg'
import { Button } from "@/components/ui/button"
import { MoveRight, Phone } from 'lucide-react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const images = [
  { src: villa2, alt: 'Villa Kitchen' },
  { src: villa2vista, alt: 'Villa Back Vista' },
  { src: neighborhood1, alt: 'Neighborhood Aerial Shot 1'},
  { src: neighborhood2, alt: 'Neighborhood Aerial Shot 2'},
  { src: neighborhood3, alt: 'Neighborhood Aerial Shot 3'},
  { src: neighborhood4, alt: 'Neighborhood Aerial Shot 4'},
  { src: neighborhood5, alt: 'Neighborhood Aerial Shot 5'},
  { src: neighborhood6, alt: 'Neighborhood Aerial Shot 6'},
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
    <div ref={container} className="relative isolate h-svh w-full p-16 overflow-hidden">
      {images.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          className={`absolute z-0 inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'
            }`}
        />
      ))}

      <div className='z-50 h-full flex justify-end items-center'>
        <div className='reveal bg-black/50 p-12 backdrop-blur-xs rounded-md flex flex-col gap-2'>
          <div>
            <h1 className='text-white font-normal'>Property <i>Spotlight</i></h1>
            <p className='font-[Playfair_Display] text-base text-white'><i>47 Pajero St., Sanctuary Homes, Pahrump, NV</i></p>
            <p className='text-[#ACACAC]'>5 bd; 3 ba; 5,100 sqft</p>
          </div>
          <p className='text-white'>A homely, modern villa with a patio and an expansive yard out back smack-dab <br />in the middle of Sanctuary Homes, a newly-built Nevada community.</p>
          <p className='text-white'>Images of the community are also visible in the slideshow.</p>
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