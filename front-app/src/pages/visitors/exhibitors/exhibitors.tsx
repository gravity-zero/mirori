import React from 'react';
import SearchBar from '../../../components/searchBar/searchBar';
import { ExhibitorsContainer } from '../../../pages/styled/styledExhibitors'
import ValueContextProvider from '../../../Context/useIsMobile';
import WelcomeMsg from '../../../components/welcomeMsg/welcomeMsg';

const Exhibitors: React.FC = () => {

  return (


    <ExhibitorsContainer>
      <SearchBar
        placeholder="Rechercher un exposant"></SearchBar>
    </ExhibitorsContainer>



  )
}

export default Exhibitors;