import React, {
  useState,
  useEffect,
} from 'react';
import { exhibitorsFixtures } from '../../fixtures/exhibitorsFixtures';
import { IExhibitors } from '../../models/exhibitors.interface';
import Card from '../card/card';
import { Container, StyledInput } from './searchBar-style';


export interface ISearchBarProps {
  className?: string;
  placeholder: string;
}

const SearchBar: React.FC<ISearchBarProps> = ({
  className,
  placeholder,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [exhibitors, setExhibitors] = useState<IExhibitors[]>(exhibitorsFixtures.exhibitors);
  const [displayExhibitors, setDisplayExhibitors] = useState<IExhibitors[]>(exhibitorsFixtures.exhibitors);

  useEffect(() => {
    setDisplayExhibitors(exhibitors.filter((exhibitor: IExhibitors) => exhibitor.name.toLowerCase().includes(searchTerm)));
  }, [searchTerm]);

  return (
    <div>
      <Container>
        <StyledInput type="text" placeholder={placeholder} className={className} onChange={(e: any) => setSearchTerm(e.target.value.toLowerCase())} />
      </Container>
      {
        displayExhibitors.map((exhibitor: IExhibitors) => (
          <Card
            key={`row-${exhibitor.exhibitorId}`}
            image={exhibitor.picture}
            name={exhibitor.name}
            category={exhibitor.category}
            emplacement={exhibitor.emplacement}
          />
        ))
      }
    </div>
  );
}

export default SearchBar;
