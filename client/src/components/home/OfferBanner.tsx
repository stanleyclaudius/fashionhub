import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const OfferBanner = () => {
  return (
    <div className='mt-16 flex shadow-md rounded-xl'>
      <div className='flex-[2] bg-gray-300 rounded-l-xl'>

      </div>
      <div className='flex-[3] bg-black text-white py-5 px-10 rounded-r-xl'>
        <h1 className='mb-4 text-sm text-gray-300 font-bold'>Limited Offer</h1>
        <p className='mb-8 text-4xl leading-relaxed'>35% off only this friday and <br /> get special gift</p>
        <Link to='/' className='text-black flex items-center gap-8 text-sm rounded-md bg-white p-3 w-fit'>
          <p>Grabt it now</p>
          <BsArrowRight />
        </Link>
      </div>
    </div>
  )
}

export default OfferBanner