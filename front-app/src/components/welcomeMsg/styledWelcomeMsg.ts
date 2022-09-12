import styled from 'styled-components';
import { device } from '../../styles/theme';

export const Container = styled.div`
  text-align: center;
  @media ${device.lg} {
    margin: 133px 0px;
   };

`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 18px;

  @media ${device.md} {
    font-size: 38px;
   };

  @media ${device.lg} {
    font-size: 72px;
   };
`;

export const Subtitle = styled.p`
  font-size: 16px;

  @media ${device.md} {
    font-size: 34px;
   };

  @media ${device.lg} {
    font-size: 48px;
   };
`;