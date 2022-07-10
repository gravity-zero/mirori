import React from 'react';
import SearchBar from '../../Components/searchBar/searchBar';
import Header from '../../Components/header/header';
import { ExhibitorsContainer } from '../Styled/styledExhibitors'
import useGetExhibitors from '../../Hook/useGetExhibitors';
import ValueContextProvider from '../../Context/useIsMobile';

const Exhibitors: React.FC = () => {

  //   fetch('https://mirori.gravity-zero.fr/auth/login', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     },
  //     body: new URLSearchParams(
  //       { email: "68hoho@waat.fr", api_key: "019feb4e-2596-4d12-b690-9ffa78b0347b" }
  //     )
  //   })
  //     .then(data => data.json())
  //     .then(response => console.log(response))

  return (
    <div>
      <Header></Header>
      <ExhibitorsContainer>
        <ValueContextProvider>
          <SearchBar
            placeholder="Rechercher un exposant"></SearchBar>
        </ValueContextProvider>
      </ExhibitorsContainer>
      {/* <Subscription></Subscription> */}
    </div>

  )
}

export default Exhibitors;