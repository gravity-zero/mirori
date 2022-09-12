import React, { useEffect } from 'react';
import { Container } from '../styled/styledStandByMode';

const StandbyMode: React.FC = () => {

  useEffect(() => {
    localStorage.clear();
  }, [])

  return (
    <Container>
      <img src="/assets/gif/giphy.gif" alt="" />
    </Container>
  )
}

export default StandbyMode;