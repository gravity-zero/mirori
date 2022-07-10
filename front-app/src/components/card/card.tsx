import React from 'react';
import { Link } from 'react-router-dom';
import { ILocation } from '../../Interfaces/location.interface';
import { CardContainer, FlexContainer, Image, InfoContainer, LocationContainer, StyledText, Testi } from './card-style';

export interface ICardProps {
  image?: string;
  name?: string;
  category?: string;
  alley: number;
  place: number;
  // emplacement?: ILocation
}

const Card: React.FC<ICardProps> = ({
  image,
  name,
  category,
  alley,
  place
}) => {

  return (
    <FlexContainer>

      <CardContainer>

        <Testi>
          <Image src={image} />
          <InfoContainer>
            <StyledText>{name}</StyledText>
            <StyledText>{category}</StyledText>
            <LocationContainer>
              <StyledText>Allée {alley} - Place {place}</StyledText>
              <Link to=''>Voir le plan</Link>
            </LocationContainer>
          </InfoContainer>
        </Testi>



      </CardContainer>

    </FlexContainer >
  );
}

export default Card;
