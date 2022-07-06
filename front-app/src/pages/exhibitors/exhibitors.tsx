import React from 'react';
import SearchBar from '../../components/searchBar/searchBar';
import Subscription from '../admin/subscription';
import { ExhibitorsContainer } from './exhibitors-style'

const Exhibitors: React.FC = ({

}) => {

  return (
    <div>
      <ExhibitorsContainer>
        <SearchBar
          placeholder="Rechercher un exposant"></SearchBar>
      </ExhibitorsContainer>
      <Subscription></Subscription>
    </div>

  )
}

export default Exhibitors;