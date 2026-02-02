import type { Project } from '../../app/types';

export default defineEventHandler(async (event): Promise<Project[]> => {
  return [
    {
      name: 'IM Diagnosis',
      description: 'Medical Images & Diagnosis by Dra. Idelsa Martínez',
      skills: 'Coming Soon',
    },
    {
      name: 'Sweet Fruit RD',
      description: 'A Small Ice Cream Shop at Monte Cristi',
      skills: 'Coming Soon',
    },
    {
      name: 'Vásquez Morel & Asocs.',
      description: 'Lawyer Office & Consulting',
      skills: 'WordPress, PHP, HTML5/CSS, JavaScript, jQuery',
    },
    {
      name: 'Lic. Laura Vásquez',
      description: 'A Personal Website for Mentorship',
      skills: 'WordPress, PHP, HTML5/CSS, JavaScript, jQuery',
    },
  ];
});
