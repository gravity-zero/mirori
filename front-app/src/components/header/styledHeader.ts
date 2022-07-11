import styled from 'styled-components';
import { device } from '../../Styles/theme';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;

  @media ${device.lg} {
  margin: 80px 20px;
   }
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 48px;
  align-items: center;
  // margin: 78px 34px;
`;

export const ImageContainer = styled.img`
  height: 60px;

  @media ${device.md} {
    height: 130;
  }

  @media ${device.lg} {
    height: auto;
  }
`;

export const HourContainer = styled.div`
  font-size: 48px;
  // margin: 78px 34px;
`;
