const GrandTotal = () => {
  return (
    <div className='flex-1 border border-gray-300 p-3 rounded-md h-fit'>
      <div className='flex items-center justify-between text-sm'>
        <p className='text-gray-400'>Subtotal</p>
        <p className='font-bold'>$2,500.00</p>
      </div>
      <div className='flex items-center justify-between text-sm mt-4'>
        <p className='text-gray-400'>Discount</p>
        <p className='font-bold text-gray-400'>$0</p>
      </div>
      <hr className='my-4' />
      <div className='flex items-center justify-between text-sm'>
        <p className=''>Grand Total</p>
        <p className='font-bold text-lg'>$2,500.00</p>
      </div>
      <button className='w-full bg-black text-white outline-none text-sm font-bold mt-5 rounded-md py-2'>Checkout now</button>
    </div>
  )
}

export default GrandTotal