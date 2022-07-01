import { ILocation } from './location.interface';

export interface IExhibitors {
  exhibitorId: string;
  picture: string | null;
  name: string;
  category: string;
  emplacement: ILocation;
}