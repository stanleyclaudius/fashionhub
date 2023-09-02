import HeadInfo from './../../utils/HeadInfo'
import Navbar from './../../components/general/Navbar'
import Footer from './../../components/general/Footer'
import ProductCard from '../../components/general/ProductCard'
import Image from '../../components/productDetail/Image'
import Overview from '../../components/productDetail/Overview'
import Tab from '../../components/productDetail/Tab'
import Discussion from '../../components/productDetail/Discussion'

const ProductDetail = () => {
  return (
    <>
      <HeadInfo title='Product Detail' />
      <div className='mx-36 my-8'>
        <Navbar />
        <div className='flex gap-20 mt-12'>
          <Image />
          <Overview />
        </div>
        <div className='mt-16'>
          <Tab />
        </div>
        <div className='mt-9'>
          <Discussion />
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