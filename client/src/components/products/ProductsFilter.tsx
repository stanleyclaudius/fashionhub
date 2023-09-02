import { PiCaretDownBold, PiCaretRightBold } from 'react-icons/pi'

const ProductsFilter = () => {
  return (
    <div className='flex-1 border border-gray-300 rounded-md p-3 text-sm bg-white h-fit'>
      <div>
        <div className='bg-gray-100 p-3 rounded-md flex items-center justify-between'>
          <p>Category</p>
          <PiCaretDownBold />
        </div>
        <div className='ml-5'>
          <div className='m-4 flex items-center justify-between'>
            <p>Men</p>
            <PiCaretDownBold />
          </div>
          <div className='ml-8'>
            <div className='flex items-center gap-3 mt-3'>
              <input type='checkbox' />
              <label htmlFor=''>Shirt</label>
            </div>
            <div className='flex items-center gap-3 mt-3'>
              <input type='checkbox' />
              <label htmlFor=''>Pant</label>
            </div>
            <div className='flex items-center gap-3 mt-3'>
              <input type='checkbox' />
              <label htmlFor=''>Blazer</label>
            </div>
          </div>
        </div>
        <div className='ml-5'>
          <div className='m-4 flex items-center justify-between'>
            <p>Women</p>
            <PiCaretDownBold />
          </div>
        </div>
        <div className='ml-5'>
          <div className='m-4 flex items-center justify-between'>
            <p>Baby Boy</p>
            <PiCaretDownBold />
          </div>
        </div>
        <div className='ml-5'>
          <div className='m-4 flex items-center justify-between'>
            <p>Baby Girl</p>
            <PiCaretDownBold />
          </div>
        </div>
        <div className='ml-5'>
          <div className='m-4 flex items-center justify-between'>
            <p>Accessories</p>
            <PiCaretDownBold />
          </div>
        </div>
      </div>
      <hr className='my-4' />
      <div className='px-3 flex items-center justify-between'>
        <p>Price</p>
        <PiCaretRightBold />
      </div>
      <hr className='my-4' />
      <div className='px-3 flex items-center justify-between'>
        <p>Size</p>
        <PiCaretRightBold />
      </div>
    </div>
  )
}

export default ProductsFilter