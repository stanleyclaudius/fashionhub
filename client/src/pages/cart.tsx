import Footer from '../components/general/Footer'
import Navbar from '../components/general/Navbar'
import HeadInfo from './../utils/HeadInfo'
import GrandTotal from '../components/cart/GrandTotal'
import ItemDetail from '../components/cart/ItemDetail'

const Cart = () => {
  return (
    <>
      <HeadInfo title='Cart' />
      <div className='mx-36 my-8'>
        <Navbar />
        <div className='mt-12 flex gap-16'>
          <ItemDetail />
          <GrandTotal />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Cart