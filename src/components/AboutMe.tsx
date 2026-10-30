import selfPhoto from '../assets/1x1.jpg'

const AboutMe = () => {
  return (
    <div className="min-h-[70svh] flex flex-col gap-16 px-64 py-16">
      <h1 className="font-[Montserrat] font-normal">ABOUT ME</h1>

      <div className='flex px-4 gap-8'>
        <img src={selfPhoto} alt="" />
        <div className='flex flex-col gap-8'>
          <div className='flex justify-center gap-8'>
            <div className='flex-center flex-col'>
              <h1 className='font-[Montserrat] text-6xl font-medium'>$500M+</h1>
              <p>Volume Sold</p>
            </div>
            <div className='flex-center flex-col'>
              <h1 className='font-[Montserrat] text-6xl font-medium'>900+</h1>
              <p>Homes and Properties Sold</p>
            </div>
          </div>

          <div>
            <p>Hailing from Pahrump, Nevada, Marci Metzger has been in the real estate business for over 31 years. She's closed small and big deals alike; whether it may be first-time movers or full-scale businesses moving into a new workplace, she's done it all. One of her most notable achievements was in 2021, where she and her team closed a record $28.5M in sales helping more than 85 clients attain their ideal properties.
              As one of the members of The Ridge Realty Group and Pahrump Valley Chamber of Commerce, Marci consistently ranks among the top agents in the firm. She's regarded as one of the most experienced realtors in Nevada real estate with her ability and knowledge of all the ins and outs of the home buying and selling process.
              <br />In her words, "With my skillset, no matter what you're looking for, I'll get the job done."</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe