import React, { useContext } from 'react';
import { HeaderWrapper, DateContainer, HourContainer, ImageContainer, HeaderContainer } from './styledHeader';
import { valueContext } from '../../Context/useIsMobile';
import Nav from '../nav/nav'

export interface IHeaderProps { }

const Header: React.FC<IHeaderProps> = () => {

  const date = new Date();
  const month = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
  const value = useContext(valueContext);
  console.log(value);


  return (
    <HeaderContainer>
      {!value && (
        <HeaderWrapper>
          <DateContainer>
            <p>{date.getDate()}</p>
            <p>{month[date.getMonth()]}</p>
          </DateContainer>
          <a href="/">
          <ImageContainer src="/assets/image/logo.svg" alt="logo Mirori" />
          </a>
          <HourContainer>{date.getHours()} : {date.getMinutes()}</HourContainer>
        </HeaderWrapper>
      )}
      <Nav></Nav>
    </HeaderContainer>
  )
}

export default Header;