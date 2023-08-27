import { IconType } from 'react-icons/lib'

interface IProps {
  Icon: IconType
  title: string
  description: string
}

const DescriptionCard: React.FC<IProps> = ({ Icon, title, description }) => {
  return (
    <div>
      <div className='bg-gray-200 w-fit p-2 rounded-md mb-4'>
        <Icon className='text-xl' />
      </div>
      <h1 className='font-bold mb-2'>{title}</h1>
      <p className='text-gray-400 text-xs leading-relaxed'>{description}</p>
    </div>
  )
}

export default DescriptionCard