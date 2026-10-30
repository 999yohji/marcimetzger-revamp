import { MoveRight } from 'lucide-react'
import villa from '../assets/villa.jpg'
import mansion from '../assets/modernmansion.jpg'
import { Button } from "@/components/ui/button"

const FeaturedProperties = () => {
  return (
    <div className='min-h-svh flex flex-col p-16 gap-4 bg-[#]'>
      <div className="flex flex-col md:flex-row gap-20 flex-1">

        <div className="flex-1 flex flex-col gap-16">

          <div className='flex flex-col gap-4'>
            <div>
              <h1>Featured Properties</h1>
              <p>Cream of the crop.</p>
            </div>
            <div className='flex flex-col gap-4'>
              <img src={mansion} alt="103 Southend Homes Property Image" />
              <hr className='border-[#1D151760]' />
              <div className='flex flex-col gap-2'>
                <p className='font-[Playfair_Display] text-base'><i>103 Southend Homes, Sacramento, CA</i></p>
                <p className='text-[#858585]'>6 bd; 4 ba; 7,107 sqft</p>
                <p>An ultramodern mansion with its own walkway to the house proper and an<br />infinity pool. An architectural show of elegance.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-16">
          <div className='flex flex-col gap-4'>
            <img src={villa} alt="679 King's Bridge Property Image" />
            <hr className='border-[#1D151760]' />
            <div className='flex flex-col gap-2'>
              <p className='font-[Playfair_Display] text-base'><i>679 King's Bridge Rd., Tallahassee, FL</i></p>
              <p className='text-[#858585]'>5 bd; 3 ba; 4,250 sqft</p>
              <p>A suburban villa with a dynamic layout surrounded with multitudes of<br />miniature pine trees and a sprawling open field out back.</p>
            </div>
          </div>
          <div className='flex justify-end'>
            <Button
              variant="outline"
              size='lg'
              className='cursor-pointer p-6'
            >
              VIEW ALL <MoveRight />
            </Button>
          </div>
        </div>
      </div>
      <hr className='border-[#1D151760]' />
    </div>
  )
}

export default FeaturedProperties