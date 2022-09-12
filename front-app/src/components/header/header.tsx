import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { Wrapper, HeaderWrapper, DateContainer, HourContainer, ImageContainer, HeaderContainer, AvatarContainer, VisitorName, NameContainer } from './styledHeader';
import Nav from '../nav/nav';
import { Avatar } from '../avatar/avatar';
// import { valueToken } from '../../Context/useIsLogin';

export interface IHeaderProps {
  name?: string;
  children?: ReactNode;
}

export const Header: React.FC<IHeaderProps> = ({ name }) => {
  const [date, setDate] = useState<Date>(new Date());
  // const { isAuthenticated } = useContext(valueToken)

  useEffect(() => {
    setInterval(() =>
      setDate(new Date())
      , 30000)
  }, [date]);

  const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

  let day = ('0' + date.getDate()).slice(-2);
  let month = months[date.getMonth()];
  let hours = ('0' + date.getHours()).slice(-2);
  let minutes = ('0' + date.getMinutes()).slice(-2);
  let hour_minutes = hours + " : " + minutes;

  // console.log(isAuthenticated)

  // if (!isAuthenticated) {
  //   return (
  //     <HeaderContainer>
  //       <HeaderWrapper>
  //         <DateContainer>
  //           <p>{day}</p>
  //           <p>{month}</p>
  //         </DateContainer>
  //         <a href="/">
  //           <ImageContainer src="/assets/image/logo.svg" alt="logo Mirori" />
  //         </a>
  //         <HourContainer>{hour_minutes}</HourContainer>
  //       </HeaderWrapper>
  //     </HeaderContainer>
  //   );
  // }

  return (
    <>
      <Wrapper>
        <AvatarContainer>
          <Avatar />
          <NameContainer>
            {/* <VisitorName>{visitorName ? visitorName : undefined}</VisitorName> */}
            <div><img src="/assets/icons/vectorName.svg" alt="" /></div>
          </NameContainer>
        </AvatarContainer>
      </Wrapper>
      <HeaderContainer>
        <HeaderWrapper>
          <DateContainer>
            <p>{day}</p>
            <p>{month}</p>
          </DateContainer>
          <a href="/">
            <ImageContainer src="/assets/image/logo.svg" alt="logo Mirori" />
          </a>
          <HourContainer>{hour_minutes}</HourContainer>
        </HeaderWrapper>
        <Nav></Nav>
      </HeaderContainer>

    </>
  )
}

// export default Header; 