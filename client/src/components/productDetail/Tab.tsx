const Tab = () => {
  return (
    <div className='text-sm flex items-center justify-between'>
      <p className='cursor-pointer flex-1 text-center after:contents-[] after:bg-gray-300 after:mt-4 after:block after:w-full after:h-[1px] text-gray-400'>The Details</p>
      <div className='cursor-pointer flex-1 text-center after:contents-[] after:bg-gray-300 after:mt-4 after:block after:w-full after:h-[1px] text-gray-400'>
        <p>Ratings & Reviews</p>
      </div>
      <div className={`cursor-pointer flex-1 text-center after:contents-[] after:bg-gray-300 after:mt-3 after:block after:w-full after:h-[1px] text-black`}>
        <div className='flex items-center justify-center gap-4'>
          <p className='font-bold'>Discussion</p>
          <div className='bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-center flex-shrink-0'>
            <p className='text-xs font-bold'>5</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tab