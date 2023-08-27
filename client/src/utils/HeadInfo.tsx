import { Helmet, HelmetProvider } from 'react-helmet-async'

interface IProps {
  title: string
}

const HeadInfo: React.FC<IProps> = ({ title }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Fashionhub - {title}</title>
      </Helmet>
    </HelmetProvider>
  )
}

export default HeadInfo