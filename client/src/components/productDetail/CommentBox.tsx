import { AiOutlineHeart } from 'react-icons/ai'
import { BsReply } from 'react-icons/bs'

const CommentBox = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex gap-7'>
        <div className='rounded-full w-12 h-12 bg-gray-200' />
        <div>
          <div className='flex items-center gap-5'>
            <p className='font-bold'>Gianna Louis</p>
            <p className='text-sm text-gray-600'>The shirt was amazing!</p>
          </div>
          <div className='flex items-center gap-6 mt-4'>
            <div className='flex items-center gap-2'>
              <AiOutlineHeart className='text-sm text-gray-500' />
              <p className='text-sm text-gray-500'>Like</p>
            </div>
            <div className='flex items-center gap-2'>
              <BsReply className='text-gray-500' />
              <p className='text-sm text-gray-500'>Like</p>
            </div>
            <p className='text-sm text-gray-500'>7 likes</p>
            <p className='text-sm text-gray-500'>3 replies</p>
          </div>
        </div>
      </div>
      <div>
        <p className='text-sm text-gray-500'>1 Weeks Ago</p>
      </div>
    </div>
  )
}

export default CommentBox