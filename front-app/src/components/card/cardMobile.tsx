import React from 'react';
import { ILocation } from '../../models/location.interface';
import { CardContainer, InfoContainer, Link, StyledText, StyledTextLabel } from './cardMobile-style';

export interface ICardMobileProps {
  name: string;
  category?: string;
  location?: ILocation;
}

const CardMobile: React.FC<ICardMobileProps> = ({
  name,
  category,
  location
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
        <StyledTextLabel>Emplacement</StyledTextLabel><StyledText>Allé {location?.alley} - Place {location?.place}</StyledText>
      </InfoContainer>
      <Link href="">Voir le plan</Link>

    </CardContainer>
  );
}

export default CardMobile;