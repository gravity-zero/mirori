import React, { useEffect } from 'react';
import WelcomeMsg from '../../../components/welcomeMsg/welcomeMsg';
import { Img } from '../../styled/styledHome'

const Home: React.FC = () => {

  useEffect(() => {
  })

  return (
    <>
      {/* <script>window.location.reload() console.log('toto');
      </script> */}
      <WelcomeMsg className='desktopVisible' />
      <Img src="/assets/image/plan.png" alt="" />
    </>
  )
}

export default Home;

