import { Mail, MapPin, Phone } from 'lucide-react';
import houseKeys from '../assets/housekeys.jpg'
import { FaLinkedin, FaFacebook, FaInstagram, FaYelp } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="relative isolate w-full px-6 sm:px-12 md:px-16 py-16 flex justify-center items-center overflow-hidden bg-black">
      <img src={houseKeys} alt="Footer background" className='absolute -z-10 inset-0 h-full w-full object-cover opacity-40' />
      <div className='absolute -z-10 inset-0 h-full w-full bg-black/80 backdrop-blur-xs' />

      <div className='w-full max-w-7xl flex flex-col md:flex-row justify-between items-start md:items-center gap-12'>
        
        <div className='flex flex-col gap-4'>
          <div>
            <h1 className='text-white font-[Playfair_Display] text-3xl sm:text-4xl'>Marci Metzger</h1>
            <p className='text-[#ACACAC] tracking-widest text-xs sm:text-sm mt-1'>THE RIDGE REALTY GROUP</p>
          </div>
          <div className='flex gap-4 mt-2'>
            <a href="https://www.facebook.com/MarciHomes/" aria-label="Facebook" className='p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white'><FaFacebook size={20} /></a>
            <a href="https://www.instagram.com/marcimetzger_theridge/" aria-label="Instagram" className='p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white'><FaInstagram size={20} /></a>
            <a href="https://www.linkedin.com/in/marci-metzger-30642496/" aria-label="LinkedIn" className='p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white'><FaLinkedin size={20} /></a>
            <a href="https://www.yelp.com/biz/xr3yQN_m2SgO0R_7S6p62w" aria-label="Yelp" className='p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white'><FaYelp size={20} /></a>
          </div>
        </div>

        <div className='flex flex-col gap-4 text-white/90'>
          <div className='flex items-center gap-3'>
            <Phone className='text-white shrink-0' size={20} />
            <span className='text-sm sm:text-base'>(206) 919-6886</span>
          </div>

          <div className='flex items-center gap-3'>
            <Mail className='text-white shrink-0' size={20} />
            <span className='text-sm sm:text-base'>mmetzger@ridgerealty.com</span>
          </div>

          <div className='flex items-start gap-3 max-w-md'>
            <MapPin className='text-white shrink-0 mt-1' size={20} />
            <span className='text-sm sm:text-base leading-relaxed'>3190 HW-160, Suite F, Pahrump, Nevada 89048, United States</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer