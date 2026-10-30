
import marciVideo from '../assets/marciupdated3.mp4'
import logo from '../assets/Logo.png'
import { useState } from 'react'
import { Button } from "@/components/ui/button"

const Hero = () => {
  const [videoReady, setVideoReady] = useState(false)

  return (
    <div className="relative isolate flex min-h-svh w-full items-center overflow-hidden bg-black">
      <div className="absolute top-0 z-1 h-[30%] w-full bg-linear-to-b from-black to-transparent opacity-75" />

      <video
        src={marciVideo}
        autoPlay
        loop
        muted
        playsInline
        onPlaying={() => setVideoReady(true)}
        className={`pointer-events-none absolute inset-0 z-[-1] h-full w-full select-none object-cover transition-opacity duration-2000 ${videoReady ? 'opacity-100' : 'opacity-0'
          }`}
      />

      <div className="relative z-5 w-full p-6 sm:p-8 lg:p-12">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl">
            Find your <i>Dream Home</i> in your <br className="hidden md:block" />
            <i>Dream Location</i>
          </h1>
          <p className="font-normal text-white">Where a home is, life begins. Start anew with Marci.</p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button
              variant="secondary"
              size="lg"
              className="w-full cursor-pointer p-6 sm:w-auto"
            >
              <p>BROWSE PROPERTIES</p>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full cursor-pointer border-white/40 bg-white/10 p-6 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white sm:w-auto"
            >
              <p>BOOK A CALL</p>
            </Button>
          </div>
        </div>
      </div>

      <img
        src={logo}
        alt="Logo"
        className="absolute bottom-8 right-8 z-5 hidden w-[25%] sm:block md:w-[20%] lg:bottom-16 lg:right-24"
      />

      <div className="absolute bottom-0 z-1 h-[30%] w-full bg-linear-to-t from-black to-transparent opacity-75" />
    </div>
  )
}

export default Hero