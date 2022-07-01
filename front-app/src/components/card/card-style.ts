import { theme } from '../../styles/theme';
import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 1694px;
  height: 304px;
  padding: 18px 16px;
  background-color: ${theme.colors.greyLight};
  border-radius: 44px;
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 126px;
  height: 116px;
  border-radius: 32px;
`;

export const InfoContainer = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(3,585px);
  align-items: center;
  margin-left: 48px;
`;

export const StyledText = styled.p`
  font-weight: 600;
  font-size: 36px;
`;