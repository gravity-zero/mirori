import styled from 'styled-components';


export const StyledAvatar = styled.img<{ margin: boolean }>`
  objectfit: cover;
  border-radius: 50%;
  height: 46px;
  width: 46px;
  margin-left: ${({ margin }) => (margin ? '8px' : '0px')};
`;
