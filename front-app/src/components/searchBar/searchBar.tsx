import React, {
  useState,
  useEffect,
} from 'react';
import { exhibitorsFixtures } from '../../fixtures/exhibitorsFixtures';
import { IExhibitors } from '../../models/exhibitors.interface';
import Card from '../card/card';
import Select from '../filter/filter';
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
  const [select, setSelect] = useState('')

  const handleChange = (event: any) => {
    setSelect(event.currentTarget.value);
  };

  useEffect(() => {
    setDisplayExhibitors(exhibitors.filter((exhibitor: IExhibitors) => exhibitor.name.toLowerCase().includes(searchTerm)));
  }, [searchTerm]);

  useEffect(() => {
    if (!select) {
      setDisplayExhibitors(exhibitors)
    } else {
      setDisplayExhibitors(exhibitors.filter((exhibitor: IExhibitors) => exhibitor.name === select))
    }
  }, [select]);

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
