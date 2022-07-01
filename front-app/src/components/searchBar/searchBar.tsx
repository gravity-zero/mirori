import React, {
  useState,
  useEffect,
} from 'react';
import { exhibitorsFixtures } from '../../fixtures/exhibitorsFixtures';
import { IExhibitors } from '../../models/exhibitors.interface';
import { StyledInput } from './searchBar-style';


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
      <StyledInput type="text" placeholder={placeholder} className={className} onChange={(e: any) => setSearchTerm(e.target.value.toLowerCase())} />
      {/* TODO: replace by the component card */}
      <ul>
        {displayExhibitors.map((exhibitor: IExhibitors) => (
          <p key={exhibitor.exhibitorId}>{exhibitor.name}</p>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
