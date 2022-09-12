import { device } from '../../styles/theme';
import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.md} {
    margin: 36px;
  }

  @media ${device.md} {
    margin: 92px;
  }
`;

export const Img = styled.div`
  height: 198px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.md} {
    height: 274px;
  }
`;

export const Image = styled.img`
  width: 280px;
  @media ${device.md} {
    width: 363px;
    object-fit: contain;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #EEEEEE;
  border-bottom: 2px solid #DDDDDD;
  border-top: 3px solid #8159A5;
  padding: 0 24px;

@media ${device.md} {
  height: 84px;
}
`;

export const StyledText = styled.p`
  font-size: 16px;

  @media ${device.md} {
      font-size: 24px;
  }
`;
