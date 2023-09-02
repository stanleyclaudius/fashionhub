import { RxCaretDown } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'

const FilterInformation = () => {
  return (
    <>
      <div className='flex items-center justify-between'>
        <p className='text-sm'>Showing <strong>9</strong> results from total <strong>37</strong> for <strong>"tops"</strong></p>
        <div className='flex items-center gap-4 mt-5'>
          <p className='text-sm'>Sort By</p>
          <div className='border border-gray-300 rounded-md'>
            <div className='flex items-center gap-3 px-3 py-2'>
              <p className='text-xs'>Popularity</p>
              <RxCaretDown />
            </div>
          </div>
        </div>
      </div>
      <div className='mt-3 text-sm flex items-center gap-6'>
        <p>Applied Filters: </p>
        <div className='flex items-center gap-5'>
          <div className='text-sm flex items-center gap-3 rounded-full px-4 py-2 border border-gray-300 w-fit'>
            <p>Tops</p>
            <AiOutlineClose />
          </div>
          <div className='text-sm flex items-center gap-3 rounded-full px-4 py-2 border border-gray-300 w-fit'>
            <p>Tops</p>
            <AiOutlineClose />
          </div>
          <div className='text-sm flex items-center gap-3 rounded-full px-4 py-2 border border-gray-300 w-fit'>
            <p>Tops</p>
            <AiOutlineClose />
          </div>
        </div>
      </div>
    </>
  )
}

export default FilterInformation