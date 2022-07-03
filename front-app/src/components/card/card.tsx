import React from 'react';
import { Link } from 'react-router-dom';
import { ILocation } from '../../models/location.interface';
import { CardContainer, FlexContainer, Image, InfoContainer, LocationContainer, StyledText, Testi } from './card-style';

export interface ICardProps {
  image?: string;
  name?: string;
  category?: string;
  emplacement?: ILocation
}

const Card: React.FC<ICardProps> = ({
  image,
  name,
  category,
  emplacement
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
              <StyledText>Allée {emplacement?.alley} - Place {emplacement?.place}</StyledText>
              <Link to=''>Voir le plan</Link>
            </LocationContainer>
          </InfoContainer>
        </Testi>



      </CardContainer>

    </FlexContainer >
  );
}

export default Card;
