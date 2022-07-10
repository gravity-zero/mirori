import { theme } from '../../Styles/theme';
import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 348px;
  height: 276px;
  padding: 8px;
  background-color: ${theme.colors.greyLight};
  border-radius: 12px;
  margin-bottom: 26px;
`;

export const StyledTextLabel = styled.p`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 6px;
`;

export const StyledText = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: ${theme.colors.grey}
`;

export const InfoContainer = styled.div`
  margin-bottom: 28px;
`;

export const Link = styled.a`
  display: flex;
  justify-content: flex-end;
  font-weight: 600;
  font-size: 18px;
  color: ${theme.colors.grey};
  text-decoration: none;
  margin-right: 18px;

  &:hover {
    text-decoration: underline;
  }
`;



