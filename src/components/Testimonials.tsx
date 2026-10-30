import treeBackground from '../assets/treebackground.jpg'
import { useRef } from 'react'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const testimonials = [
  {
    quote: "Marci found us a home we didn't even know we wanted. The whole process felt effortless, and every question was answered before we had to ask it.",
    name: 'Daniel R.',
  },
  {
    quote: 'Sold in under three weeks, above asking. Communication was excellent from start to finish, and the staging advice made a real difference.',
    name: 'Priya S.',
  },
  {
    quote: 'Professional, patient, and genuinely invested in finding the right fit for our family. We would recommend Marci without hesitation.',
    name: 'The Hendersons',
  },
  {
    quote: 'Honest advice, fast responses, and a smooth closing. Marci made a stressful move feel manageable.',
    name: 'Marcus T.',
  },
  {
    quote: 'We were first-time buyers and had a thousand questions. Every one got a patient, clear answer.',
    name: 'Elena & Jorge V.',
  },
]

const Testimonials = () => {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.reveal', {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.2,
      scrollTrigger: { trigger: container.current, start: 'top 70%' },
    })

    gsap.from('.x-swipe', {
      x: -80,
      opacity: 0,
      duration: 2.5,
      ease: 'power3.out',
      stagger: 0.2,
      scrollTrigger: { trigger: container.current, start: 'bottom bottom' },
    })
  }, { scope: container })

  return (
    <div ref={container} className="relative isolate min-h-svh w-full p-16 overflow-hidden">
      <img src={treeBackground} alt="" className='absolute -z-10 inset-0 h-full w-full object-cover' />
      <div className='absolute -z-10 inset-0 h-full w-full bg-black/70 backdrop-blur-sm' />

      <div className='flex flex-col gap-16 min-h-[calc(100svh-8rem)]'>
        <div className='flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 lg:auto-rows-fr gap-4'>
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className='reveal lg:col-span-2 lg:[&:nth-child(4)]:col-start-2 flex flex-col items-center text-center gap-2 border border-white/30 p-5 text-white'
            >
              <span aria-hidden className='font-[Playfair_Display] text-6xl leading-none text-white/20'>
                &ldquo;
              </span>
              <blockquote>
                <p className='text-sm leading-relaxed text-white/80 line-clamp-6'>{t.quote}</p>
              </blockquote>
              <figcaption className='mt-auto text-sm font-semibold'>{t.name}</figcaption>
            </figure>
          ))}
        </div>

        <div className='flex justify-end'>
          <div className='flex flex-col'>
            <h1 className='x-swipe text-white font-normal text-right'>
              Don't just listen to us. Here's what <i>other people</i> say.
            </h1>
            <p className='x-swipe text-white text-right'>Real quotes from past clients; we mean business.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials