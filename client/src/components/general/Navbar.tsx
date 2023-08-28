import { useState, useEffect, useRef } from 'react'
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai'
import { PiCaretDownBold } from 'react-icons/pi'
import { LiaUserCircle } from 'react-icons/lia'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [search, setSearch] = useState('')
  const [openShop, setOpenShop] = useState(false)

  const shopRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (openShop && shopRef.current && !shopRef.current.contains(e.target as Node)) {
        setOpenShop(false)
      }
    }
    
    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => document.removeEventListener('mousedown', checkIfClickedOutside)
  }, [openShop])
  
  return (
    <>
      <div className='flex items-center justify-between relative'>
        <h1 className='font-bold tracking-wider'>FASHIONHUB</h1>
        <div className='text-sm flex items-center gap-9'>
          <div onClick={() => setOpenShop(!openShop)} className='flex items-center gap-2 cursor-pointer'>
            <p>Shop</p>
            <PiCaretDownBold />
          </div>
          <Link to='/products'>Best Seller</Link>
          <Link to='/products'>New Arrival</Link>
        </div>
        <div className='flex items-center gap-7'>
          <div className='relative border border-gray-400 rounded-md'>
            <input type='text' value={search} onChange={e => setSearch(e.target.value)} className='outline-none p-2 text-xs w-64 rounded-md bg-gray-50' />
            <div className={`${search ? 'hidden' : 'flex'} items-center gap-3 text-sm text-gray-400 absolute top-1/2 -translate-y-1/2 px-2 rounded-md pointer-events-none`}>
              <AiOutlineSearch />
              <p>Search</p>
            </div>
          </div>
          <AiOutlineShoppingCart className='text-xl cursor-pointer' />
          <LiaUserCircle className='text-2xl cursor-pointer' />
        </div>
        
        <div ref={shopRef} className={`${!openShop ? 'opacity-0 pointer-events-none' : 'opacity-1 pointer-events-auto'} z-10 absolute w-full -bottom-80 flex text-sm shadow-2xl rounded-lg border border-gray-200 p-3 bg-white transition-opacity`}>
          <div className='flex-1 flex gap-10'>
            <h2 className='font-bold'>Men</h2>
            <div className='flex flex-col gap-3'>
              <Link to='/'>Shirt</Link>
              <Link to='/'>Pant</Link>
              <Link to='/'>Blazer</Link>
              <Link to='/'>Sandals</Link>
              <Link to='/'>Shoes</Link>
              <Link to='/'>Watch</Link>
              <Link to='/'>Socks</Link>
            </div>
          </div>
          <div className='flex-1 flex gap-10'>
            <h2 className='font-bold'>Women</h2>
            <div className='flex flex-col gap-3'>
              <Link to='/'>Shirt</Link>
              <Link to='/'>Pant</Link>
              <Link to='/'>Blazer</Link>
              <Link to='/'>Crop Top</Link>
              <Link to='/'>Skirt</Link>
              <Link to='/'>Sandals</Link>
              <Link to='/'>Shoes</Link>
              <Link to='/'>Watch</Link>
              <Link to='/'>Socks</Link>
            </div>
          </div>
          <div className='flex-1 flex gap-10'>
            <h2 className='font-bold'>Baby Boy</h2>
            <div className='flex flex-col gap-3'>
              <Link to='/'>Shirt</Link>
              <Link to='/'>Pant</Link>
              <Link to='/'>Blazer</Link>
              <Link to='/'>Sandals</Link>
              <Link to='/'>Shoes</Link>
              <Link to='/'>Socks</Link>
            </div>
          </div>
          <div className='flex-1 flex gap-10'>
            <h2 className='font-bold'>Baby Girl</h2>
            <div className='flex flex-col gap-3'>
              <Link to='/'>Shirt</Link>
              <Link to='/'>Pant</Link>
              <Link to='/'>Skirt</Link>
              <Link to='/'>Blazer</Link>
              <Link to='/'>Sandals</Link>
              <Link to='/'>Shoes</Link>
              <Link to='/'>Socks</Link>
            </div>
          </div>
          <div className='flex-1 flex gap-10'>
            <h2 className='font-bold'>Accessories</h2>
            <div className='flex flex-col gap-3'>
              <Link to='/'>Perfume</Link>
              <Link to='/'>Necklace</Link>
              <Link to='/'>Bracelet</Link>
              <Link to='/'>Ring</Link>
              <Link to='/'>Earring</Link>
              <Link to='/'>Hair Pin</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar