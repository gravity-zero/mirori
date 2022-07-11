import React from 'react';
import SearchBar from '../../../Components/searchBar/searchBar';
import Header from '../../../Components/header/header';
import { ExhibitorsContainer } from '../../Styled/styledExhibitors'
import ValueContextProvider from '../../../Context/useIsMobile';

const Exhibitors: React.FC = () => {

  return (
    <div>
      <ValueContextProvider>
        <Header></Header>
        <ExhibitorsContainer>
          <SearchBar
            placeholder="Rechercher un exposant"></SearchBar>
        </ExhibitorsContainer>
      </ValueContextProvider>
    </div>

  )
}

export default Exhibitors;