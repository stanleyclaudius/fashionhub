import { AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai'

const Image = () => {
  return (
    <div className='flex-1'>
      <div className='bg-gray-300 h-full rounded-lg shadow-md relative'>
        <div className='rounded-md p-2 bg-white w-fit absolute top-1/2 right-5 -translate-y-1/2 cursor-pointer'>
          <AiFillCaretRight />
        </div>
        <div className='rounded-md p-2 bg-white w-fit absolute top-1/2 left-5 -translate-y-1/2 cursor-pointer'>
          <AiFillCaretLeft />
        </div>
      </div>
    </div>
  )
}

export default Image