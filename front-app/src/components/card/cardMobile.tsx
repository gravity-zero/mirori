import React from 'react';
import { ILocation } from '../../Interfaces/location.interface';
import { CardContainer, InfoContainer, Link, StyledText, StyledTextLabel } from './cardMobile-style';

export interface ICardMobileProps {
  name: string;
  category?: string;
  // location?: ILocation;
  alley: number;
  place: number;
}

const CardMobile: React.FC<ICardMobileProps> = ({
  name,
  category,
  alley,
  place,
}) => {

  return (
    <CardContainer>
      <InfoContainer>
        <StyledTextLabel>Nom</StyledTextLabel><StyledText>{name}</StyledText>
      </InfoContainer>
      <InfoContainer>
        <StyledTextLabel>Catégorie</StyledTextLabel><StyledText>{category}</StyledText>
      </InfoContainer>
      <InfoContainer>
        <StyledTextLabel>Emplacement</StyledTextLabel><StyledText>Allé {alley} - Place {place}</StyledText>
      </InfoContainer>
      <Link href="">Voir le plan</Link>

    </CardContainer>
  );
}

export default CardMobile;