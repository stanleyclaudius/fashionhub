import { AiOutlineSearch } from 'react-icons/ai'
import { IoMailOutline } from 'react-icons/io5'
import { FiPhoneCall } from 'react-icons/fi'
import { VscFilter } from 'react-icons/vsc'
import Footer from './../components/general/Footer'
import Navbar from './../components/general/Navbar'
import HeadInfo from './../utils/HeadInfo'

const Profile = () => {
  return (
    <>
      <HeadInfo title='Profile' />
      <div className='mx-36 my-8'>
        <Navbar />
        <div className='mt-8'>
          <div className='border border-gray-200 rounded-md p-3'>
            <div className='w-full h-32 bg-gray-700 rounded-md mb-6 relative'>
              <div className='rounded-full w-28 h-28 bg-gray-100 absolute -bottom-4 outline outline-white outline-offset-1 left-6'>

              </div>
            </div>
            <div className='ml-6'>
              <p className='text-lg font-bold mb-4'>Gianna Louis</p>
              <div className='flex items-center gap-8'>
                <div className='flex items-center gap-3 text-sm text-gray-400'>
                  <IoMailOutline />
                  <p>giannalouis@gmail.com</p>
                </div>
                <div className='flex items-center gap-3 text-sm text-gray-400'>
                  <FiPhoneCall />
                  <p>(212) 445-7622</p>
                </div>
              </div>
            </div>
          </div>
          <div className='border border-gray-200 rounded-md py-3 px-9 text-sm mt-8 flex items-center gap-12'>
            <p className='cursor-pointer'>Account Settings</p>
            <p className='cursor-pointer'>Manage Password</p>
            <p className='bg-gray-100 rounded-md py-2 px-4 font-bold cursor-pointer'>Order History</p>
            <p className='cursor-pointer'>Payment Methods</p>
            <p className='cursor-pointer'>Address</p>
            <p className='cursor-pointer'>Notification</p>
            <p className='cursor-pointer'>Sign Out</p>
          </div>
          <div className='border border-gray-200 rounded-md py-3 px-9 mt-8'>
            <div>
              <h1 className='font-bold text-xl'>Order History</h1>
              <p className='text-sm text-gray-400 mt-3'>Here you can manage your order</p>
            </div>
            <div className='flex mt-7 gap-5'>
              <div className='flex-1 border border-gray-200 bg-gray-100 rounded-md relative'>
                <input type='text' className='bg-gray-100 rounded-md w-full p-3 h-full text-xs outline-none' />
                <div className='absolute top-1/2 -translate-y-1/2 left-3 flex items-center gap-3 text-gray-400'>
                  <AiOutlineSearch />
                  <p className='text-xs'>Search for Order ID</p>
                </div>
              </div>
              <div className='flex items-center gap-3 border border-gray-200 bg-white p-3 rounded-md cursor-pointer'>
                <VscFilter />
                <p>Filter</p>
              </div>
            </div>
            <div className='mt-7'>
              <div className='rounded-lg border border-gray-200'>
                <table className='w-full'>
                  <tr className='text-sm text-gray-400 bg-gray-100 rounded-t-md'>
                    <th className='py-4'>Order ID</th>
                    <th>Date</th>
                    <th>Items</th>
                    <th>Total Amount</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                  <tr className='text-sm text-center border-b border-gray-200'>
                    <td className='py-4'>#123456</td>
                    <td>08/11/2022</td>
                    <td>1</td>
                    <td>$1,200.00</td>
                    <td>Confirmed</td>
                    <td>
                      <button className='border border-gray-200 px-3 py-2 rounded-md'>Cancel</button>
                    </td>
                  </tr>
                  <tr className='text-sm text-center border-b border-gray-200'>
                    <td className='py-4'>#123456</td>
                    <td>08/11/2022</td>
                    <td>1</td>
                    <td>$1,200.00</td>
                    <td>Confirmed</td>
                    <td>
                      <button className='border border-gray-200 px-3 py-2 rounded-md'>Cancel</button>
                    </td>
                  </tr>
                  <tr className='text-sm text-center border-b border-gray-200'>
                    <td className='py-4'>#123456</td>
                    <td>08/11/2022</td>
                    <td>1</td>
                    <td>$1,200.00</td>
                    <td>Confirmed</td>
                    <td>
                      <button className='border border-gray-200 px-3 py-2 rounded-md'>Cancel</button>
                    </td>
                  </tr>
                  <tr className='text-sm text-center'>
                    <td className='py-4'>#123456</td>
                    <td>08/11/2022</td>
                    <td>1</td>
                    <td>$1,200.00</td>
                    <td>Confirmed</td>
                    <td>
                      <button className='border border-gray-200 px-3 py-2 rounded-md'>Cancel</button>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Profile