import { ILocation } from './location.interface';

export interface IExhibitors {
  exhibitorId: string;
  picture: string;
  name: string;
  category: string;
  emplacement: ILocation;
}