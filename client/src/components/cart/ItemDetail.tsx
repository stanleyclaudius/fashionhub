import { LiaTrashAltSolid } from 'react-icons/lia'
import ItemRow from './ItemRow'

const ItemDetail = () => {
  return (
    <div className='flex-[2]'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-bold'>Cart</h1>
        <div className='text-sm text-gray-700 flex items-center gap-2'>
          <LiaTrashAltSolid />
          <p>Remove</p>
        </div>
      </div>
      <div className='mt-6'>
      <div className="flex flex-col">
        <div className="flex flex-row border-b border-gray-300 p-3">
          <div className="flex-1 text-center">
            <input type='checkbox' />
          </div>
          <div className="flex-[4] text-gray-400 font-bold text-sm">Product</div>
          <div className="flex-[2] text-center text-gray-400 font-bold text-sm">Quantity</div>
          <div className="flex-[2] text-right text-gray-400 font-bold text-sm">Price</div>
        </div>
        <ItemRow />
        <ItemRow />
        <ItemRow />
      </div>
      </div>
    </div>
  )
}

export default ItemDetail