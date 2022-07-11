import React from 'react';
//import { ILocation } from '../../Interfaces/location.interface';
import { CardContainer, Image, StyledText } from './styledCard';

export interface ICardProps {
  image?: string;
  name?: string;
}

const Card: React.FC<ICardProps> = ({
  image,
  name,
}) => {

  return (

    <CardContainer>
      <div><Image src={image} /></div>
      <StyledText>{name}</StyledText>
    </CardContainer>
  );
}

export default Card;
