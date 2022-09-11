import React from 'react';
import SearchBar from '../../../components/searchBar/searchBar';
import { ExhibitorsContainer } from '../../../pages/styled/styledExhibitors'
import ValueContextProvider from '../../../Context/useIsMobile';
// import ValueTokenProvider from '../../../Context/useIsLogin';

const Exhibitors: React.FC = () => {


  return (
    <div>
      <ValueContextProvider>
        <ExhibitorsContainer>
          <SearchBar
            placeholder="Rechercher un exposant"></SearchBar>
        </ExhibitorsContainer>
      </ValueContextProvider >
    </div >

  )
}

export default Exhibitors;