import { RxCaretDown } from "react-icons/rx"
import CommentBox from "../products/CommentBox"
import Pagination from "../general/Pagination"

const Discussion = () => {
  return (
    <>
      <h1 className='font-bold text-2xl'>Discussion</h1>
      <div className='text-gray-400 flex items-center gap-4 mt-5'>
        <p className='text-sm'>Sort By</p>
        <div className='border border-gray-300 rounded-md'>
          <div className='text-black flex items-center gap-3 px-3 py-2'>
            <p className='text-xs'>Newest</p>
            <RxCaretDown />
          </div>
        </div>
      </div>
      <div>
        <div className='p-7 border border-gray-300 rounded-md mt-9 flex flex-col gap-10'>
          <CommentBox />
          <CommentBox />
          <CommentBox />
          <CommentBox />
          <CommentBox />
        </div>
        <Pagination additionalClass='mt-9' />
      </div>
      <div className='mt-10 border border-gray-300 p-5 rounded-md'>
        <textarea name='discussion' id='discussion' placeholder='Question/topic' className='outline-none text-sm resize-none bg-gray-100 p-3 w-full h-32 rounded-lg border border-gray-300' />
        <button className='bg-black text-white rounded-md font-bold px-5 py-3 text-sm mt-4'>Start Discussion</button>
      </div>
    </>
  )
}

export default Discussion