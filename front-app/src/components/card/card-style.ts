import { theme } from '../../styles/theme';
import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

export const Testi = styled.div`
  display: flex;
`;

export const Testo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;


export const CardContainer = styled.div`
  width: 1694px;
  height: 304px;
  padding: 18px 16px;
  background-color: ${theme.colors.greyLight};
  border-radius: 44px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 44px;
`;

export const Image = styled.img`
  width: 126px;
  height: 116px;
  border-radius: 32px;
  margin-top: 38px;
`;

export const InfoContainer = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(3,494px);
  align-items: baseline;
  margin-left: 48px;
  margin-top: 72px;
  `;

export const LocationContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 172px;
    justify-content: space-between;
  `;

export const StyledText = styled.p`
  font-weight: 600;
  font-size: 36px;
`;
