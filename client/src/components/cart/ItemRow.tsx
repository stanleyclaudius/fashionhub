import { LiaTrashAltSolid } from 'react-icons/lia'

const ItemRow = () => {
  return (
    <div className="flex flex-row border-b border-gray-300 p-3 items-center">
      <div className="flex-1 text-center">
        <input type='checkbox' />
      </div>
      <div className="flex gap-4 flex-[4] text-center">
        <div className='w-20 h-20 rounded-md bg-gray-200'></div>
        <div>
          <p className='font-bold'>Cardigan</p>
          <p className='text-sm text-gray-400 mt-3'>Green : M</p>
        </div>
      </div>
      <div className="flex-[2] text-center flex flex-col justify-center items-center">
        <div className='flex items-center gap-4 border border-gray-300 rounded-md px-3 py-2 w-fit'>
          <p className='text-xl cursor-pointer'>+</p>
          <p className='px-4'>1</p>
          <p className='text-xl cursor-pointer'>-</p>
        </div>
        <div className='text-sm text-gray-700 flex items-center gap-2 mt-3'>
          <LiaTrashAltSolid />
          <p>Remove</p>
        </div>
      </div>
      <div className='flex-[2] text-right'>
        $12.00
      </div>
    </div>
  )
}

export default ItemRow