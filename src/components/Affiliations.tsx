import ridge from '../assets/badges/ridge.jpg';
import realtor from '../assets/badges/realtor.jpg';
import eqo from '../assets/badges/eqo.jpg';
import pahrump from '../assets/badges/pahrump.jpg';

const Affiliations = () => {
  return (
    <div className="pb-16">
      <div className='min-h-[30svh] border-[#1D151760] border-y-2 px-64 py-8 flex flex-col gap-8'>
        <div className="flex-center pb-4"> {/* janky spacing, look into this later */}
          <p className="text-lg">AFFILIATIONS AND ORGANIZATIONS</p>
        </div>
        <div>
          <div className="flex w-full justify-evenly items-center">
            <img src={ridge} alt="The Ridge Realty Group" />
            <img src={realtor} alt="Realtor" />
            <img src={eqo} alt="Equal Housing Opportunity" />
            <img src={pahrump} alt="Pahrump Valley Chamber of Commerce" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Affiliations