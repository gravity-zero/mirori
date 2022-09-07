import { device, theme } from '../../styles/theme';
import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.md} {
    margin: 36px;
  }

  @media ${device.md} {
    margin: 127px;
  }
`;

export const Image = styled.img`
  width: 301px;
  object-fit: cover;
`;

export const StyledText = styled.p`
  font-size: 24px;
  text-align: center;
`;
