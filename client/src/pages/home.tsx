import HeadInfo from './../utils/HeadInfo'
import Navbar from './../components/general/Navbar'
import Jumbotron from './../components/home/Jumbotron'
import CustomerExperience from './../components/home/CustomerExperience'
import CurratedPicks from './../components/home/CurratedPicks'
import FeaturedProducts from './../components/home/FeaturedProducts'
import OfferBanner from './../components/home/OfferBanner'
import Footer from './../components/general/Footer'

const Home = () => {
  return (
    <>
      <HeadInfo title='Home' />
      <div className='mx-36 my-8'>
        <Navbar />
        <div className='mt-8'>
          <Jumbotron />
          <CustomerExperience />
          <CurratedPicks />
          <FeaturedProducts />
          <OfferBanner />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home