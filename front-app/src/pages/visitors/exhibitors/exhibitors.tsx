import React from 'react';
import SearchBar from '../../../components/searchBar/searchBar';
import { ExhibitorsContainer } from '../../../pages/styled/styledExhibitors'
import ValueContextProvider from '../../../Context/useIsMobile';

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