import type { NextPage } from 'next'
import SafeEnvironment from 'ui/components/feedback/safeEnvironment/SafeEnvironment'
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';


const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle 
        title = {'Conheça os Professionais'}
        subtitle = {'Preencha seu endereço  e veja os professionais da sua localidade'}
      />
    </div>
  )
}

export default Home
