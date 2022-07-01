import { theme } from '../../styles/theme';
import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 338px;
  height: 47px;
  border-radius: 47px;
  border: none;
  background-color: ${theme.colors.greyLight};
  outline: none;

  &::placeholder {
    color: ${theme.colors.grey};
    font-size: 16px;
  }
`;