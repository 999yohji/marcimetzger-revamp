
import marciVideo from '../assets/marciupdated3.mp4'
import logo from '../assets/Logo.png'
import { useState } from 'react'

const Hero = () => {
  const [userPersona, setUserPersona] = useState('Buying');

  return (
    <div className='relative h-svh w-full overflow-hidden'>
      <div className='absolute z-1 w-full h-[30%] bg-linear-to-b from-black to-transparent opacity-75' />

      <video
        src={marciVideo}
        autoPlay
        loop
        muted
        playsInline
        className='absolute inset-0 z-[-1] h-full w-full object-cover' /* abso -1 z-index positioning here since it has to be "behind" */
        unselectable='on'
      />

      <div className='relative min-h-full min-w-full flex items-center z-5 p-12'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-white text-5xl font-normal'>Find your <i>Dream Home</i> in your <br /><i>Dream Location</i></h1>
          <p className='text-white font-normal'>Where a home is, life begins. Start anew with Marci. User is {userPersona}</p>
          <div className='relative flex bg-white max-w-[240px] rounded-md'>

            <div className={`absolute top-0 left-0 w-1/2 h-full rounded-sm bg-[#1D1517] transition-transform duration-300 ease-in-out ${userPersona === 'Buying' ? 'translate-x-0' : 'translate-x-full' }`} />

            <div
              className={`relative z-10 w-1/2 h-[2rem] flex-center rounded-sm cursor-pointer transition-colors duration-300 ${userPersona === 'Buying' ? 'text-white' : 'text-black'}`}
              onClick={() => { setUserPersona('Buying') }}
            >
              <p>Buying</p>
            </div>

            <div
              className={`relative z-10 w-1/2 h-[2rem] flex-center rounded-sm cursor-pointer transition-colors duration-300 ${userPersona === 'Selling' ? 'text-white' : 'text-black'}`}
              onClick={() => { setUserPersona('Selling') }}
            >
              <p>Selling</p>
            </div>
          </div>
        </div>
      </div>


      <img src={logo} alt="Logo" className='absolute bottom-16 right-24 w-[20%] z-5' />

      <div className='absolute z-1 bottom-0 w-full h-[30%] bg-linear-to-t from-black to-transparent opacity-75' />
    </div>
  )
}

export default Hero