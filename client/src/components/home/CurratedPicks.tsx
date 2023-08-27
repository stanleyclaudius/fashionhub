import CurratedPickCard from './CurratedPickCard'

const CurratedPicks = () => {
  return (
    <div className='mt-16'>
      <h1 className='font-bold text-2xl'>Currated Picks</h1>
      <div className='mt-8 grid grid-cols-4 gap-10'>
        <CurratedPickCard
          title='Best Seller'
        />
        <CurratedPickCard
          title='Shop Men'
        />
        <CurratedPickCard
          title='Shop Women'
        />
        <CurratedPickCard
          title='Shop New Arrival'
        />
      </div>
    </div>
  )
}

export default CurratedPicks