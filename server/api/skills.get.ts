import type { Skill } from '../../app/types';

export default defineEventHandler(async (event): Promise<Skill[]> => {
  return [
    {
      name: 'JavaScript',
      category: 'Proficient',
      icon: 'i-skill-icons-javascript',
    },
    {
      name: 'TypeScript',
      category: 'Proficient',
      icon: 'i-skill-icons-typescript',
    },
    {
      name: 'Node.js',
      category: 'Proficient',
      icon: 'i-skill-icons-nodejs-dark',
    },
    {
      name: 'Express',
      category: 'Proficient',
      icon: 'i-skill-icons-expressjs-dark',
    },
    {
      name: 'Tailwind CSS',
      category: 'Proficient',
      icon: 'i-skill-icons-tailwindcss-dark',
    },
    {
      name: 'React',
      category: 'Proficient',
      icon: 'i-skill-icons-react-dark',
    },
    {
      name: 'Angular',
      category: 'Proficient',
      icon: 'i-skill-icons-angular-dark',
    },
    {
      name: 'Next.js',
      category: 'Proficient',
      icon: 'i-skill-icons-nextjs-dark',
    },
    {
      name: 'Git',
      category: 'Proficient',
      icon: 'i-skill-icons-git',
    },
    {
      name: 'Docker',
      category: 'Proficient',
      icon: 'i-skill-icons-docker',
    },
    {
      name: 'AWS EC2',
      category: 'Experienced',
      icon: 'i-skill-icons-aws-dark',
    },
    {
      name: 'Linux',
      category: 'Experienced',
      icon: 'i-skill-icons-linux-dark',
    },
  ];
});
