import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/Logo.png'

const Navbar = () => {
  const [visible, setVisible] = useState(true)
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
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

  // close the menu when the bar slides away
  useEffect(() => {
    if (!visible) setOpen(false)
  }, [visible])

  // close the menu if the window grows to desktop size
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const close = () => {
      if (mq.matches) setOpen(false)
    }
    mq.addEventListener('change', close)
    return () => mq.removeEventListener('change', close)
  }, [])

  const links = ['PROPERTIES', 'SERVICES', 'ABOUT', 'CONTACT']
  const filled = solid || open

  return (
    <nav
      aria-label="Main"
      className={`fixed top-0 left-0 z-999 flex min-h-[10svh] w-full items-center justify-between gap-4 px-4 transition-[translate,background-color] duration-300 ease-in-out sm:px-8 lg:gap-16 lg:px-16 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${filled ? 'bg-[#1D1517]/95 backdrop-blur-sm' : 'bg-transparent'}`}
    >
      <img
        src={logo}
        alt="Logo"
        className={`w-28 transition-opacity duration-300 lg:w-[10%] ${filled ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Desktop links */}
      <div className="hidden items-center gap-8 md:flex lg:gap-16">
        {links.map((link) => (
          <p key={link} className="text-white">{link}</p>
        ))}
        <Menu className="text-white" size={16} />
      </div>

      {/* Mobile menu button */}
      <button
        type="button"
        className="cursor-pointer p-2 text-white md:hidden"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile dropdown */}
      {open && (
        <div className="absolute top-full left-0 flex w-full flex-col gap-6 bg-[#1D1517] px-4 py-6 sm:px-8 md:hidden">
          {links.map((link) => (
            <p key={link} className="text-white">{link}</p>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar