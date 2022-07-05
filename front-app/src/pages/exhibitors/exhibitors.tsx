import React from 'react';
import SearchBar from '../../components/searchBar/searchBar';
import Header from '../../components/header/header'
import { ExhibitorsContainer } from './exhibitors-style'

const Exhibitors: React.FC = () => {

  // const date = new Date();
  // var tab_mois=new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");

  return (
    <div>
      {/* <Header></Header> */}
      <Header></Header>
      <ExhibitorsContainer>
        <SearchBar
          placeholder="Rechercher un exposant"></SearchBar>
      </ExhibitorsContainer>
    </div>

  )
}

export default Exhibitors;
