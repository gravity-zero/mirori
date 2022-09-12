import React, { useEffect } from 'react';
import { Container } from '../styled/styledStandByMode';

const StandbyMode: React.FC = () => {

  useEffect(() => {
    localStorage.clear();

  })

  return (
    <Container>
      <script>window.location.reload()</script>
      <img src="/assets/gif/giphy.gif" alt="" />
    </Container>
  )
}

export default StandbyMode;