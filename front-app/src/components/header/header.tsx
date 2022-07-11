import React, {useContext} from 'react';
import { HeaderContainer, DateContainer, HourContainer, ImageContainer} from './styledHeader';
import { valueContext } from '../../Context/useIsMobile';


export interface IHeaderProps { }

const Header: React.FC<IHeaderProps> = () => {

  const date = new Date();
  const month = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
  const value = useContext(valueContext);  
  console.log(value);
  

  return (
    <HeaderContainer>
      {!value ? 
      <DateContainer>
        <p>{date.getDate()}</p>
        <p>{month[date.getMonth()]}</p>
      </DateContainer>
      : <div></div>}
      <ImageContainer src="assets/image/logo.svg" alt="" />

      {!value ? 
      <HourContainer>{date.getHours()} : {date.getMinutes()}</HourContainer> 
      : <div></div>
      }
  
    </HeaderContainer>

  );
}

export default Header;