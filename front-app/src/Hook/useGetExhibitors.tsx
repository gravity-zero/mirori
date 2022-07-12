import { IExhibitors } from '../Interfaces/exhibitors.interface';
import httpClient from './httpClient';

export default function useGetExhibitors() {
  return (): Promise<IExhibitors[]> => {
    return httpClient.get(`api/user/search/exposant`)
      .then(res => res.data)
  }
}