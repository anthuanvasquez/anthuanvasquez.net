import type { Project } from '~/types';

export default defineEventHandler(async (event): Promise<Project[]> => {
  return [
    {
      name: 'IM Diagnosis',
      description: 'Dianostico',
    },
    {
      name: 'Vasquez Morel & Asocs.',
      description: 'Abogados',
    },
    {
      name: 'Sweet Fruit RD',
      description: 'Heladería',
    },
    {
      name: 'Laura Vásquez',
      description: 'Mentora',
    },
  ];
});
