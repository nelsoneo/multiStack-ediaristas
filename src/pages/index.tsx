import type { NextPage } from 'next'
import SafeEnvironment from 'ui/components/feedback/safeEnvironment/SafeEnvironment'


const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
    </div>
  )
}

export default Home
