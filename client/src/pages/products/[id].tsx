import { AiFillCaretLeft, AiFillCaretRight, AiFillStar } from 'react-icons/ai'
import { RxCaretDown } from 'react-icons/rx'
import HeadInfo from './../../utils/HeadInfo'
import Navbar from './../../components/general/Navbar'
import Footer from './../../components/general/Footer'
import CommentBox from './../../components/products/CommentBox'
import ProductCard from '../../components/general/ProductCard'

const ProductDetail = () => {
  return (
    <>
      <HeadInfo title='Product Detail' />
      <div className='mx-36 my-8'>
        <Navbar />
        <div className='flex gap-20 mt-12'>
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
          <div className='flex-1'>
            <h1 className='font-bold text-3xl'>Blazer Jacket</h1>
            <div className='flex items-center gap-2 mt-3'>
              <AiFillStar className='text-yellow-400 text-xl' />
              <p className='text-sm'>4.9/5</p>
            </div>
            <p className='font-bold mt-5 text-2xl'>$2500</p>
            <div className='my-6 w-full h-[1px] bg-gray-300' />
            <div className='flex gap-20'>
              <div>
                <p className='text-sm font-bold'>Available Size</p>
                <div className='mt-5 flex items-center gap-5'>
                  <div className={`bg-black text-white font-bold cursor-pointer border border-gray-300 rounded-md w-10 h-10 text-center leading-10`}>
                    <p>S</p>
                  </div>
                  <div className='border border-gray-300 rounded-md w-10 h-10 text-center leading-10 cursor-pointer'>
                    <p>M</p>
                  </div>
                  <div className='border border-gray-300 rounded-md w-10 h-10 text-center leading-10 cursor-pointer'>
                    <p>L</p>
                  </div>
                </div>
              </div>
              <div>
                <p className='text-sm font-bold'>Available Color</p>
                <div className='mt-3 flex items-center gap-5'>
                  <div className='w-4 h-4 rounded-full bg-gray-700 outline outline-gray-300 outline-3 outline-offset-2 cursor-pointer' />
                  <div className='w-4 h-4 rounded-full bg-gray-700' />
                </div>
              </div>
            </div>
            <div className='mt-8 mb-6 w-full h-[1px] bg-gray-300' />
            <div>
              <p className='text-sm'><span className='font-bold'>Last 1 left</span> - make it yours!</p>
              <div className='flex items-center gap-7 mt-5'>
                <div className='flex items-center gap-4 border border-gray-300 rounded-md px-3 py-2'>
                  <p className='text-xl cursor-pointer'>+</p>
                  <p className='px-4'>1</p>
                  <p className='text-xl cursor-pointer'>-</p>
                </div>
                <button className='bg-black text-white text-sm rounded-md px-5 py-3'>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-16'>
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
        </div>
        <div className='mt-9'>
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
            <div className='text-sm flex items-center justify-center mt-9'>
              <button className='bg-white rounded-md px-4 py-3 text-sm border border-gray-300 text-gray-400 outline-none mr-5'>Previous</button>
              <div className='flex items-center gap-2'>
                <button className='w-10 h-10 bg-gray-200 rounded-md'>1</button>
                <button className='w-10 h-10 rounded-md'>2</button>
                <button className='w-10 h-10 rounded-md'>3</button>
              </div>
              <button className='ml-5 bg-white text-black rounded-md px-4 py-2 text-sm border border-gray-300 font-bold outline-none'>Next</button>
            </div>
          </div>
          <div className='mt-10 border border-gray-300 p-5 rounded-md'>
            <textarea name='discussion' id='discussion' placeholder='Question/topic' className='outline-none text-sm resize-none bg-gray-100 p-3 w-full h-32 rounded-lg border border-gray-300' />
            <button className='bg-black text-white rounded-md font-bold px-5 py-3 text-sm mt-4'>Start Discussion</button>
          </div>
        </div>
        <div className='mt-12'>
          <h1 className='font-bold text-xl'>Related Products</h1>
          <div className='grid grid-cols-4 gap-12 mt-6'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProductDetail