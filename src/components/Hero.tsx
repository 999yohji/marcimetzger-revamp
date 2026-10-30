
import marciVideo from '../assets/marciupdated3.mp4'
import logo from '../assets/Logo.png'
import { Button } from "@/components/ui/button"

const Hero = () => {

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
          <p className='text-white font-normal'>Where a home is, life begins. Start anew with Marci.</p>
          <div className='flex gap-2'>
            <Button
              variant='secondary'
              size='lg'
              className='cursor-pointer p-6'
            >
              <p>BROWSE PROPERTIES</p>
            </Button>
            <Button
              variant="outline"
              size='lg'
              className="cursor-pointer p-6 bg-white/10 text-white border-white/40 backdrop-blur-sm hover:bg-white/20 hover:text-white"
            >
              <p>
                BOOK A CALL
              </p>
            </Button>
          </div>
        </div>
      </div>


      <img src={logo} alt="Logo" className='absolute bottom-16 right-24 w-[20%] z-5' />

      <div className='absolute z-1 bottom-0 w-full h-[30%] bg-linear-to-t from-black to-transparent opacity-75' />
    </div>
  )
}

export default Hero