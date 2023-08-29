import { FaCartPlus } from 'react-icons/fa'

const ProductCard = () => {
  return (
    <div>
      <div className='bg-gray-200 w-full h-72 rounded-md relative'>
        <p className='absolute top-4 left-4 bg-red-600 p-2 text-white w-fit rounded-md text-xs tracking-[.18rem] font-bold'>SALE</p>
      </div>
      <div className='flex items-center justify-between mt-4'>
        <div>
          <p>Autumn Dress</p>
          <div className='flex gap-3 mt-3'>
            <p className='font-bold text-2xl'>$85</p>
            <p className='text-gray-400 line-through'>$124</p>
          </div>
        </div>
        <div className='bg-black text-white w-fit p-3 rounded-md'>
          <FaCartPlus className='text-xl' />
        </div>
      </div>
    </div>
  )
}

export default ProductCard