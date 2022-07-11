import React, {
  useState,
  useEffect,
  useContext,
} from 'react';
import { IExhibitors } from '../../Interfaces/exhibitors.interface';
import Card from '../card/card';
import { CardsContainer, Container, StyledInput } from './styledSearchBar';
import useGetExhibitors from '../../Hook/useGetExhibitors';

export interface ISearchBarProps {
  className?: string;
  placeholder: string;
}

const SearchBar: React.FC<ISearchBarProps> = ({
  className,
  placeholder,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [exhibitors, setExhibitors] = useState<IExhibitors[]>([]);
  const [displayExhibitors, setDisplayExhibitors] = useState<IExhibitors[]>(exhibitors);
  const [select, setSelect] = useState('')

  const getExhibitors = useGetExhibitors();

  // const handleChange = (event: any) => {
  //   setSelect(event.currentTarget.value);
  // };

  useEffect(() => {
    getExhibitors()
      .then(data => {
        setExhibitors(data);
        setDisplayExhibitors(data);
      })
  }, [])

  useEffect(() => {
    setDisplayExhibitors(exhibitors.filter((exhibitor: IExhibitors) => exhibitor.firstname.toLowerCase().includes(searchTerm)));
  }, [searchTerm]);

  useEffect(() => {
    if (!select) {
      setDisplayExhibitors(exhibitors)
    } else {
      setDisplayExhibitors(exhibitors.filter((exhibitor: IExhibitors) => exhibitor.firstname === select))
    }
  }, [select]);

  return (
    <div>
      <Container>
        <StyledInput type="text" placeholder={placeholder} className={className} onChange={(e: any) => setSearchTerm(e.target.value.toLowerCase())} />
      </Container>
      <CardsContainer>
        {
          displayExhibitors.map((exhibitor: IExhibitors) => (
            <Card
              key={`row-${exhibitor.id}`}
              image={exhibitor.picture}
              name={exhibitor.firstname}
            />
          ))
        }
      </CardsContainer>
    </div>
  );
}

export default SearchBar;
