import { theme } from '../../Styles/theme';
import styled from 'styled-components';

export const ButtonStyled = styled.button`
  width: 522px;
  height: 160px;
  background-color: ${theme.colors.black};
  color: ${theme.colors.white};
  border-radius: 12px;
  font-size: 64px;
  cursor: pointer;
`;

export const ButtonContent = styled.div`
  height: 14px;
  font-size: 14px;
  display: flex;
`;