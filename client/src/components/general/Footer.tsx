import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='mt-16 px-36 py-8 bg-gray-100'>
      <div className='flex gap-16'>
      <div className='flex-1'>
        <h1 className='text-2xl font-bold tracking-wider mb-4'>FASHIONHUB</h1>
        <p className='leading-relaxed text-sm text-gray-400'>Specializes in providing high-quality, stylish products for your wardrobe</p>
      </div>
      <div className='flex-[2] flex text-sm justify-between'>
        <div>
          <h1 className='font-bold'>SHOP</h1>
          <div className='flex flex-col text-gray-400 gap-3 mt-4'>
            <Link to='/'>Men</Link>
            <Link to='/'>Women</Link>
            <Link to='/'>Baby Boy</Link>
            <Link to='/'>Baby Girl</Link>
            <Link to='/'>Accessories</Link>
          </div>
        </div>
        <div>
          <h1 className='font-bold'>COMPANY</h1>
          <div className='flex flex-col text-gray-400 gap-3 mt-4'>
            <Link to='/'>About</Link>
            <Link to='/'>Contact</Link>
            <Link to='/'>Affiliates</Link>
          </div>
        </div>
        <div>
          <h1 className='font-bold'>SUPPORT</h1>
          <div className='flex flex-col text-gray-400 gap-3 mt-4'>
            <Link to='/'>FAQs</Link>
            <Link to='/'>Cookie Policy</Link>
            <Link to='/'>Terms of Use</Link>
          </div>
        </div>
        <div>
          <h1 className='font-bold'>PAYMENT METHOD</h1>
          <div>

          </div>
        </div>
      </div>
    </div>
    <div className='my-6 w-full h-[1px] bg-gray-300' />
    <p className='text-xs text-center text-gray-500'>Copyright &copy;2023 FASHIONHUB. All rights reserved</p>
  </div>
  )
}

export default Footer