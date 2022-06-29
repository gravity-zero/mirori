import { ILocation } from './location.interface';

export interface IExhibitors {
  exhibitorId: string
  name: string;
  category: string;
  emplacement: ILocation;
}