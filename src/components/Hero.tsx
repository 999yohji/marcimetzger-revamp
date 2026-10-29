import React from 'react'
import marciVideo from '../assets/marciupdated.mp4'

const Hero = () => {
  return (
    <div className='relative h-svh w-full overflow-hidden'>
      <div className='absolute w-full h-[25%] bg-linear-to-b from-black to-transparent' />
      <video
        src={marciVideo}
        autoPlay
        loop
        muted
        playsInline
        className='h-full w-full object-cover'
      />
      <div className='absolute bottom-0 w-full h-[25%] bg-linear-to-t from-black to-transparent' />
    </div>
  )
}

export default Hero