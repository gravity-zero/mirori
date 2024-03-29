import { device, theme } from '../../styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
 display: flex;
 justify-content: center;
 margin-bottom: 80px;
 width: 100vw;
 `;

export const StyledInput = styled.input`
  width: 100%;
  margin: 20px
  height: 47px;
  border-radius: 47px;
  border: none;
  background-color: ${theme.colors.greyLight};
  outline: none;
  font-size: 16px;

  @media ${device.md} {
    height: 90px;
    font-size: 24px;
    margin: 20px 62px;
  }

  @media ${device.lg} {
    height: 129px;
    font-size: 48px;
  }

  &::placeholder {
    color: ${theme.colors.grey};
    font-weight: 300;
    font-size: 16px;
    padding-left: 20px;

    @media ${device.md} {
      font-size: 24px;
    }

    @media ${device.lg} {
      font-size: 48px;
    }
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;