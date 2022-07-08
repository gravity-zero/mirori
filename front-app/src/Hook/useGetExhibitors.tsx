import { IExhibitors } from '../models/exhibitors.interface';
import httpClient from '../service/api/httpClient';

export default function useGetExhibitors() {
  return (): Promise<IExhibitors[]> => {
    return httpClient.get(`user/search/exposant`)
      .then(res => res.data)
  }
}