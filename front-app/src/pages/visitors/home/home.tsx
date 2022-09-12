import React, { useEffect } from 'react';
import WelcomeMsg from '../../../components/welcomeMsg/welcomeMsg';
import { Img } from '../../styled/styledHome'

const Home: React.FC = () => {

  return (
    <>
      <WelcomeMsg className='desktopVisible' />
      <Img src="/assets/image/plan.png" alt="" />
    </>
  )
}

export default Home;

