import React from 'react';
import { CardContainer, Image, InfoContainer, StyledText } from './card-style';

export interface ICardColumn {
  content: React.ReactNode | string;
  name: string;
}

export interface ICardProps {
  columns: ICardColumn[];
  image: string | null;
}

const Card: React.FC<ICardProps> = ({
  columns = [],
  image,
}) => {

  return (
    <CardContainer>
      <Image src={image || ''} />
      <InfoContainer>
        {columns.map((column) => (
          <div key={`column-${column.name}`}><StyledText>{column.content}</StyledText></div>
        ))}
      </InfoContainer>
    </CardContainer>
  );
}

export default Card;
