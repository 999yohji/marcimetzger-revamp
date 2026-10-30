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
  { src: neighborhood1, alt: 'Neighborhood Aerial Shot 1' },
  { src: neighborhood2, alt: 'Neighborhood Aerial Shot 2' },
  { src: neighborhood3, alt: 'Neighborhood Aerial Shot 3' },
  { src: neighborhood4, alt: 'Neighborhood Aerial Shot 4' },
  { src: neighborhood5, alt: 'Neighborhood Aerial Shot 5' },
  { src: neighborhood6, alt: 'Neighborhood Aerial Shot 6' },
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
    <div
      ref={container}
      className="relative isolate flex min-h-svh w-full items-end justify-center overflow-hidden p-4 sm:p-8 md:items-center md:justify-end lg:p-12"
    >
      {images.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          className={`absolute inset-0 z-0 h-full w-full object-cover transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'
            }`}
        />
      ))}

      <div className="reveal relative z-10 flex w-full max-w-sm flex-col gap-2 rounded-md bg-black/45 p-4 backdrop-blur-xs sm:p-6 md:max-w-md">
        <div>
          <h1 className="text-2xl font-normal text-white md:text-3xl">
            Property <i>Spotlight</i>
          </h1>
          <p className="font-[Playfair_Display] text-sm text-white md:text-base">
            <i>47 Pajero St., Sanctuary Homes, Pahrump, NV</i>
          </p>
          <p className="text-sm text-[#ACACAC]">5 bd; 3 ba; 5,100 sqft</p>
        </div>

        <p className="hidden text-sm text-white sm:block">
          A homely, modern villa with a patio and an expansive yard out back, in the middle of Sanctuary Homes, a newly-built Nevada community.
        </p>

        <div className="mt-1 flex flex-col gap-2 sm:flex-row">
          <Button
            variant="secondary"
            size="lg"
            className="w-full cursor-pointer border-none p-6 backdrop-blur-sm sm:w-auto"
          >
            <p className="flex-center gap-2">
              SEE FULL DETAILS <MoveRight />
            </p>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full cursor-pointer border-white/40 bg-white/10 p-6 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white sm:w-auto"
          >
            <p className="flex-center gap-2">
              <Phone /> BOOK A CALL
            </p>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PropertySpotlight