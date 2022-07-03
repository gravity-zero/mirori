import React from 'react';
import SearchBar from '../../components/searchBar/searchBar';
import { ExhibitorsContainer } from './exhibitors-style'


const Exhibitors: React.FC = () => {

  return (
    <ExhibitorsContainer>
      <SearchBar
        placeholder="Rechercher un exposant"></SearchBar>
    </ExhibitorsContainer>
  )
}

export default Exhibitors;
