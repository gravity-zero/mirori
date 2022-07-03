import { theme } from '../../styles/theme';
import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 1622px;
  height: 129px;
  border-radius: 47px;
  border: none;
  background-color: ${theme.colors.greyLight};
  outline: none;
  font-size: 48px;
  padding-left: 64px;

  &::placeholder {
    color: ${theme.colors.grey};
    font-weight: 300;
    font-size: 48px;
  }
`;

export const Container = styled.div`
 display: flex;
 justify-content: center;
 margin-bottom: 194px;

  }
`;

