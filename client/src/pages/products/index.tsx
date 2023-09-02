import Footer from './../../components/general/Footer'
import Navbar from './../../components/general/Navbar'
import HeadInfo from './../../utils/HeadInfo'
import ProductCard from './../../components/general/ProductCard'
import ProductsFilter from './../../components/products/ProductsFilter'
import FilterInformation from './../../components/products/FilterInformation'
import Pagination from './../../components/general/Pagination'

const Products = () => {
  return (
    <>
      <HeadInfo title='Products' />
      <div className='mx-36 my-8'>
        <Navbar />
        <div className='mt-12 flex gap-10'>
          <ProductsFilter />
          <div className='flex-[4]'>
            <FilterInformation />
            <div className='mt-10'>
              <div className='grid grid-cols-3 gap-12'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
              <Pagination
                additionalClass='mt-16'
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Products