import { MdAttachMoney } from 'react-icons/md'
import { LiaShippingFastSolid, LiaSmileBeamSolid, LiaWarehouseSolid } from 'react-icons/lia'
import DescriptionCard from './DescriptionCard'

const CustomerExperience = () => {
  return (
    <div className='mt-10'>
      <div className='flex items-center justify-between'>
        <h1 className='flex-1 text-3xl font-bold leading-relaxed'>We provide best <br /> customer experiences</h1>
        <div className='flex-1 flex items-center gap-3 justify-end'>
          <div className='w-[2px] h-16 bg-black' />
          <p className='text-sm text-gray-500'>We ensure our customers have the best shopping experience</p>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-10 mt-10'>
        <DescriptionCard
          Icon={MdAttachMoney}
          title='Original Products'
          description='We provide money back guarantee of the product are not original'
        />
        <DescriptionCard
          Icon={LiaSmileBeamSolid}
          title='Satisfaction Guarantee'
          description='Exchange the product you&apos;ve purchased if it doesn&apos;t fit on you'
        />
        <DescriptionCard
          Icon={LiaWarehouseSolid}
          title='New Arrival Everyday'
          description='We updates our collections almost everyday so you have many choices'
        />
        <DescriptionCard
          Icon={LiaShippingFastSolid}
          title='Fast & Free Shipping'
          description='We offer fast and free shipping for our loyal customers'
        />
      </div>
    </div>
  )
}

export default CustomerExperience