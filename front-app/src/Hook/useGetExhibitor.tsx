import { IExhibitors } from '../Interfaces/exhibitors.interface';
import httpClient from './httpClient';

export default function useGetExhibitor(exhibitors: any) {
  return (): Promise<IExhibitors[]> => {
    return httpClient.get(`/api/user/${exhibitors.id}`)
      .then(res => res.data)
  }
}