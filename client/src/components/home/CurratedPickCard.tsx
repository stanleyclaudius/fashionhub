import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

interface IProps {
  title: string
}

const CurratedPickCard: React.FC<IProps> = ({ title }) => {
  return (
    <div className='bg-gray-200 rounded-md shadow-md h-56 p-5 flex justify-end flex-col'>
      <Link to='/' className='flex items-center justify-between text-sm rounded-md bg-white p-3'>
        <p>{title}</p>
        <BsArrowRight />
      </Link>
    </div>
  )
}

export default CurratedPickCard