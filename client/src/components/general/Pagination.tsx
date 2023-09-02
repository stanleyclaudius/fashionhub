interface IProps {
  additionalClass: string
}

const Pagination: React.FC<IProps> = ({ additionalClass }) => {
  return (
    <div className={`text-sm flex items-center justify-center ${additionalClass}`}>
      <button className='bg-white rounded-md px-4 py-3 text-sm border border-gray-300 text-gray-400 outline-none mr-5'>Previous</button>
      <div className='flex items-center gap-2'>
        <button className='w-10 h-10 bg-gray-200 rounded-md'>1</button>
        <button className='w-10 h-10 rounded-md'>2</button>
        <button className='w-10 h-10 rounded-md'>3</button>
      </div>
      <button className='ml-5 bg-white text-black rounded-md px-4 py-2 text-sm border border-gray-300 font-bold outline-none'>Next</button>
    </div>
  )
}

export default Pagination