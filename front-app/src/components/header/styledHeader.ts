import styled from 'styled-components';
import { theme, device } from '../../styles/theme';

export const Wrapper = styled.div`
  top: 0px;
  position: sticky;
  background-color: white;
  padding-bottom: 18px;

  & .mobileVisible {
    @media ${device.md} {
      display: none;
    }
  }
`;

export const HeaderContainer = styled.div`
  bottom: 0;
  position: fixed;
  width: 100%;
  background-color: ${theme.colors.white};

  @media ${device.md} {
    position: sticky;
    top: 0
   };

   & .desktopVisible {
    display: none;

    @media ${device.md} {
     display: block;
    }
  }
   
`;

export const HeaderWrapper = styled.div`
  display: none;

  @media ${device.md} {
    display: flex;
    justify-content: space-between;
    margin: 62px 62px 80px 62px;
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

export const AvatarContainer = styled.div`
  display: flex;
  padding: 12px 24px;
  align-items: center;

@media ${device.md} {
  display none;
}
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 18px;
`;

export const VisitorName = styled.p`
margin-bottom: -10px;
`;