import React from 'react';
import { CardContainer, Image, TextContainer, StyledText, Img } from './styledCard';

export interface ICardProps {
  image?: string;
  name?: string;
  onClick?: any;
}

const Card: React.FC<ICardProps> = ({
  image,
  name,
  onClick
}) => {

  return (
    <CardContainer onClick={onClick}>
      <Img><Image src={image} /></Img>
      <TextContainer>
        <StyledText>{name}</StyledText>
        <img src="/assets/icons/chevron.svg" alt="" />
      </TextContainer>
    </CardContainer>
  );
}

export default Card;
