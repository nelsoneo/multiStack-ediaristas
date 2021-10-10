import type { NextPage } from 'next'
import SafeEnvironment from 'ui/components/feedback/safeEnvironment/SafeEnvironment'
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';


const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle 
        title = {'Conheça os Professionais'}
        subtitle = {'Preencha seu endereço  e veja os professionais da sua localidade'}
      />

      <UserInformation
        name={'Nelson Hernandez'}
        picture={'https://github.com/nelsoneo.png'}
        rating={4}
        description={'Rio Grande do Sul'}
      />
    </div>
  )
}

export default Home
