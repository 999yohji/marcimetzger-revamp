import { useEffect, useRef, useState } from 'react'
import { Menu } from 'lucide-react'
import logo from '../assets/Logo.png'

const Navbar = () => {
  const [visible, setVisible] = useState(true)
  const [solid, setSolid] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const threshold = window.innerHeight

      if (y < threshold) {
        setVisible(true)
        setSolid(false)
      } else {
        const scrollingUp = y < lastY.current
        setVisible(scrollingUp)
        if (scrollingUp) setSolid(true)
      }

      lastY.current = y
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      aria-label="Main"
      className={`fixed top-0 left-0 z-999 w-full min-h-[10svh] flex justify-between gap-16 items-center px-16 transition-[translate,background-color] duration-300 ease-in-out ${visible ? 'translate-y-0' : '-translate-y-full'
        } ${solid ? 'bg-[#1D1517]/95 backdrop-blur-sm' : 'bg-transparent'}`}
    >
      <img
        src={logo}
        alt="Logo"
        className={`w-[10%] transition-opacity duration-300 ${solid ? 'opacity-100' : 'opacity-0'}`}
      />
      <div className='flex items-center gap-16'>
        <p className='text-white'>PROPERTIES</p>
        <p className='text-white'>SERVICES</p>
        <p className='text-white'>ABOUT</p>
        <p className='text-white'>CONTACT</p>
        <Menu className='text-white' size={16} />
      </div>
    </nav>
  )
}

export default Navbar