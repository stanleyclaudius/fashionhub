import Footer from "../components/general/Footer"
import Navbar from "../components/general/Navbar"
import HeadInfo from "../utils/HeadInfo"

const Checkout = () => {
  return (
    <>
      <HeadInfo title='Checkout' />
      <div className='mx-36 my-8'>
        <Navbar />
        <div className='mt-12 flex gap-12'>
          <div className='flex-[2]'>
            <div className='border border-gray-300 rounded-md p-4'>
              <p className='font-bold mb-6'>Shipping address</p>
              <div className='text-sm mb-6'>
                <label htmlFor='fullName'>Full Name</label>
                <input type='text' name='fullName' id='fullName' className='mt-4 border border-gray-300 w-full bg-gray-100 rounded-md outline-none px-3 py-2' placeholder='Enter you full name' />
              </div>
              <div className='text-sm mb-6'>
                <label htmlFor='email'>Email</label>
                <input type='text' name='email' id='email' className='mt-4 border border-gray-300 w-full bg-gray-100 rounded-md outline-none px-3 py-2' placeholder='Enter you full name' />
              </div>
              <div className='text-sm mb-6'>
                <label htmlFor='phone'>Phone Number</label>
                <input type='text' name='phone' id='phone' className='mt-4 border border-gray-300 w-full bg-gray-100 rounded-md outline-none px-3 py-2' placeholder='Enter you full name' />
              </div>
              <div className='flex gap-6 mb-6'>
                <div className='flex-1 text-sm'>
                  <label htmlFor='phone'>Province</label>
                  <input type='text' name='phone' id='phone' className='mt-4 border border-gray-300 w-full bg-gray-100 rounded-md outline-none px-3 py-2' placeholder='Enter you full name' />
                </div>
                <div className='flex-1 text-sm'>
                  <label htmlFor='phone'>City</label>
                  <input type='text' name='phone' id='phone' className='mt-4 border border-gray-300 w-full bg-gray-100 rounded-md outline-none px-3 py-2' placeholder='Enter you full name' />
                </div>
              </div>
              <div className='flex gap-6 mb-6'>
                <div className='flex-1 text-sm'>
                  <label htmlFor='phone'>District</label>
                  <input type='text' name='phone' id='phone' className='mt-4 border border-gray-300 w-full bg-gray-100 rounded-md outline-none px-3 py-2' placeholder='Enter you full name' />
                </div>
                <div className='flex-1 text-sm'>
                  <label htmlFor='phone'>Postal Code</label>
                  <input type='text' name='phone' id='phone' className='mt-4 border border-gray-300 w-full bg-gray-100 rounded-md outline-none px-3 py-2' placeholder='Enter you full name' />
                </div>
              </div>
              <div className='text-sm'>
                <label htmlFor='address '>Address</label>
                <input type='text' name='address  ' id='address ' className='mt-4 border border-gray-300 w-full bg-gray-100 rounded-md outline-none px-3 py-2' placeholder='Enter you full name' />
              </div>
            </div>
            <div className='border border-gray-300 rounded-md p-4 mt-7'>
              <p className='font-bold mb-6'>Shipping method</p>
            </div>
          </div>
          <div className='flex-1 border border-gray-300 p-4 rounded-md h-fit'>
            <div className='text-sm'>
              <p className='font-bold mb-4'>Your Order</p>
              <div className='flex gap-4'>
                <div className='w-16 h-16 bg-gray-200 rounded-md'></div>
                <div className='flex justify-between flex-1'>
                  <div>
                    <p>Cahier Leather</p>
                    <p className='text-xs text-gray-500 mt-1'>Grey</p>
                    <p className='text-xs mt-1'>x1</p>
                  </div>
                  <div>
                    <p className='font-bold'>$2,500.00</p>
                  </div>
                </div>
              </div>
            </div>
            <hr className='my-4' />
            <div className='text-sm'>
              <p className='font-bold mb-4'>Discount Code</p>
              <div className='flex gap-4'>
                <input type='text' className='border border-gray-300 bg-gray-100 rounded-md w-full outline-none px-3 py-2' placeholder='Add discount code' />
                <button className='border border-gray-300 px-3 py-2 rounded-md outline-none'>Apply</button>
              </div>
            </div>
            <hr className='my-4' />
            <div>
              <div className='flex items-center justify-between text-sm'>
                <p className='text-gray-400'>Subtotal</p>
                <p className='font-bold'>$2,500.00</p>
              </div>
              <div className='flex items-center justify-between text-sm mt-4'>
                <p className='text-gray-400'>Discount</p>
                <p className='font-bold text-gray-400'>-$0</p>
              </div>
              <div className='flex items-center justify-between text-sm mt-4'>
                <p className='text-gray-400'>Shipment cost</p>
                <p className='font-bold text-gray-400'>$22.50</p>
              </div>
            </div>
            <hr className='my-4' />
            <div className='flex items-center justify-between text-sm'>
              <p className=''>Grand Total</p>
              <p className='font-bold text-lg'>$2,500.00</p>
            </div>
            <button className='w-full bg-black text-white outline-none text-sm font-bold mt-5 rounded-md py-2'>Continue to payment</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Checkout