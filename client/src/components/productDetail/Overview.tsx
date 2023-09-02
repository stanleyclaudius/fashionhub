import { AiFillStar } from 'react-icons/ai'

const Overview = () => {
  return (
    <div className='flex-1'>
      <h1 className='font-bold text-3xl'>Blazer Jacket</h1>
      <div className='flex items-center gap-2 mt-3'>
        <AiFillStar className='text-yellow-400 text-xl' />
        <p className='text-sm'>4.9/5</p>
      </div>
      <p className='font-bold mt-5 text-2xl'>$2500</p>
      <div className='my-6 w-full h-[1px] bg-gray-300' />
      <div className='flex gap-20'>
        <div>
          <p className='text-sm font-bold'>Available Size</p>
          <div className='mt-5 flex items-center gap-5'>
            <div className={`bg-black text-white font-bold cursor-pointer border border-gray-300 rounded-md w-10 h-10 text-center leading-10`}>
              <p>S</p>
            </div>
            <div className='border border-gray-300 rounded-md w-10 h-10 text-center leading-10 cursor-pointer'>
              <p>M</p>
            </div>
            <div className='border border-gray-300 rounded-md w-10 h-10 text-center leading-10 cursor-pointer'>
              <p>L</p>
            </div>
          </div>
        </div>
        <div>
          <p className='text-sm font-bold'>Available Color</p>
          <div className='mt-3 flex items-center gap-5'>
            <div className='w-4 h-4 rounded-full bg-gray-700 outline outline-gray-300 outline-3 outline-offset-2 cursor-pointer' />
            <div className='w-4 h-4 rounded-full bg-gray-700' />
          </div>
        </div>
      </div>
      <div className='mt-8 mb-6 w-full h-[1px] bg-gray-300' />
      <div>
        <p className='text-sm'><span className='font-bold'>Last 1 left</span> - make it yours!</p>
        <div className='flex items-center gap-7 mt-5'>
          <div className='flex items-center gap-4 border border-gray-300 rounded-md px-3 py-2'>
            <p className='text-xl cursor-pointer'>+</p>
            <p className='px-4'>1</p>
            <p className='text-xl cursor-pointer'>-</p>
          </div>
          <button className='bg-black text-white text-sm rounded-md px-5 py-3'>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Overview