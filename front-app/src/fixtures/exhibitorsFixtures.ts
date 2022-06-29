import { IExhibitors } from '../models/exhibitors.interface';

export const exhibitorsFixtures = {

  exhibitors: [
    {
      exhibitorId: '2a4c83c5-5650-5fe0-b35e-6533ded68e78',
      name: 'José le boucher du coin',
      category: 'Charcuterie',
      emplacement: {
        alley: 12,
        place: 6,
      },
    },
    {
      exhibitorId: '2a4c83c5-5650-5fe0-b35e-6533ded68e79',
      name: 'Ta mère',
      category: 'category',
      emplacement: {
        alley: 12,
        place: 6,
      },
    },
    {
      exhibitorId: '2a4c83c5-5650-5fe0-b35e-6533ded68e80',
      name: 'Ton père',
      category: 'category',
      emplacement: {
        alley: 12,
        place: 6,
      },
    },
    {
      exhibitorId: '2a4c83c5-5650-5fe0-b35e-6533ded68e81',
      name: 'Ta soeur',
      category: 'La plus bonne de mes copines',
      emplacement: {
        alley: 12,
        place: 6,
      },
    },
    {
      exhibitorId: '2a4c83c5-5650-5fe0-b35e-6533ded68e82',
      name: 'José le boucher du coin',
      category: 'Charcuterie',
      emplacement: {
        alley: 12,
        place: 6,
      },
    },

  ] as IExhibitors[],
};