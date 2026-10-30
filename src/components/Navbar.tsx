import { Menu } from 'lucide-react'
import logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <div className='absolute z-999 min-w-full min-h-[10svh] flex justify-between gap-16 items-center px-16 bg-red-500/50'>
      <img src={logo} alt="Logo" className='w-[10%]'/>
      <div className='flex items-center gap-16'>
        <p className='text-white'>PROPERTIES</p>
        <p className='text-white'>SERVICES</p>
        <p className='text-white'>ABOUT</p>
        <p className='text-white'>CONTACT</p>
        <Menu className='text-white' size={16} />
      </div>
    </div>
  )
}

export default Navbar