import React from 'react';
import { IExhibitors } from '../../Interfaces/exhibitors.interface';
import { SelectContainer } from './styledFilter';

export interface ISelectProps {
  handleChange: any;
  values: IExhibitors[];
}

const Select: React.FC<ISelectProps> = ({
  handleChange,
  values
}) => {

  return (

    <SelectContainer name="" id="" onChange={handleChange}>
      <option value="Name">Nom</option>
      {values.map((value: IExhibitors) => (
        <option value={value.firstname}>{value.firstname}</option>
      ))}
    </SelectContainer>

  );
}

export default Select;
