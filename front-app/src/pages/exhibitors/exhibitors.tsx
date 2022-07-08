import React from 'react';
import SearchBar from '../../components/searchBar/searchBar';
import Subscription from '../admin/subscription';
import Header from '../../components/header/header';
import { ExhibitorsContainer } from '../styled/exhibitors-style'
import useGetExhibitors from '../../Hook/useGetExhibitors';

const Exhibitors: React.FC = () => {


  useGetExhibitors();

  return (
    <div>
      <Header></Header>
      <ExhibitorsContainer>
        <SearchBar
          placeholder="Rechercher un exposant"></SearchBar>
      </ExhibitorsContainer>
      <Subscription></Subscription>
    </div>

  )
}

export default Exhibitors;