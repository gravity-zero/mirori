import { ILocation } from './location.interface';

export interface IExhibitors {
  id?: string;
  picture?: string;
  firstname: string;
  category?: string;
  emplacement?: ILocation;
}