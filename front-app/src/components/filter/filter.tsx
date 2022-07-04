import React from 'react';
import { IExhibitors } from '../../models/exhibitors.interface';
import { SelectContainer } from './filter-style';

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
        <option value={value.name}>{value.name}</option>
      ))}
    </SelectContainer>

  );
}

export default Select;
