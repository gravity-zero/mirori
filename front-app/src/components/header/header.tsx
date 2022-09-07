import React, { useContext, useEffect, useState } from 'react';
import { HeaderWrapper, DateContainer, HourContainer, ImageContainer, HeaderContainer } from './styledHeader';
import { valueContext } from '../../Context/useIsMobile';
import Nav from '../nav/nav'

export interface IHeaderProps { }

const Header: React.FC<IHeaderProps> = () => {

  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    setInterval( () =>
      setDate(new Date())
    , 60000)
  }, [date]);

  const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

  let day = ('0' + date.getDate()).slice(-2);
  let month = months[date.getMonth()];
  let hours = ('0' + date.getHours()).slice(-2);
  let minutes = ('0' + date.getMinutes()).slice(-2);
  let hours_minutes = hours+" : "+minutes;

  const mobile = useContext(valueContext);

  return ( <HeaderContainer>
      {!mobile && (
        <HeaderWrapper>
          <DateContainer>
            <p>{ day }</p>
            <p>{ month }</p>
          </DateContainer>
          <a href="/">
          <ImageContainer src="/assets/image/logo.svg" alt="logo Mirori" />
          </a>
          <HourContainer>{ hours_minutes }</HourContainer>
        </HeaderWrapper>
      )}
      <Nav></Nav>
    </HeaderContainer>
  )
}

export default Header;