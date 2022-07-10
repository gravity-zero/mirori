import React from 'react';
import { HeaderContainer, DateContainer, HourContainer } from './header-style';

export interface IHeaderProps { }

const Header: React.FC<IHeaderProps> = () => {

  const date = new Date();
  const month = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

  return (

    <HeaderContainer>
      <DateContainer>
        <p>{date.getDate()}</p>
        <p>{month[date.getMonth()]}</p>
      </DateContainer>
      <img src="assets/image/logo.png" alt="" />
      <HourContainer>{date.getHours()} : {date.getHours()}</HourContainer>
    </HeaderContainer>

  );
}

export default Header;