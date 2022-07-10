import React, {
  useState,
  useEffect,
  useContext,
} from 'react';
import { IExhibitors } from '../../Interfaces/exhibitors.interface';
import Card from '../card/card';
import { Container, StyledInput } from './styledSearchBar';
import useGetExhibitors from '../../Hook/useGetExhibitors';
import { valueContext } from '../../Context/useIsMobile';
import CardMobile from '../card/cardMobile';

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
  const value = useContext(valueContext);

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

      {value ?

        displayExhibitors.map((exhibitor: IExhibitors) => (
          <Card
            key={`row-${exhibitor.id}`}
            image={exhibitor.picture}
            name={exhibitor.firstname}
            category={exhibitor.category}
            alley={exhibitor.alley}
            place={exhibitor.place}
          />
        ))
        :
        displayExhibitors.map((exhibitor: IExhibitors) => (
          <CardMobile
            key={`row-${exhibitor.id}`}
            name={exhibitor.firstname}
            category={exhibitor.category}
            alley={exhibitor.alley}
            place={exhibitor.place}
          />
        ))
      }
    </div>
  );
}

export default SearchBar;
