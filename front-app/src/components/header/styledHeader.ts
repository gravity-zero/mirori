import styled from 'styled-components';
import { theme, device } from '../../Styles/theme';

export const HeaderContainer = styled.div`
  bottom: 0;
  position: fixed;
  width: 100%;
  background-color: ${theme.colors.white};

  @media ${device.md} {
    position: sticky;
    top: 0
   };
   
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;

  @media ${device.md} {
    margin: 20px 20px 80px 20px;
   }
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 34px;
  align-items: center; 

@media ${device.lg} {
  font-size: 42px;
  }
`;

export const ImageContainer = styled.img`
height: 60px;

  @media ${device.md} {
    height: 118px;
  }

@media ${device.lg} {
  height: auto;
  }
`;

export const HourContainer = styled.div`
  font-size: 34px;

  @media ${device.lg} {
    font-size: 48px;
  }
`; 