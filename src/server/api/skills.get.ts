import type { Skill } from '~/types';

export default defineEventHandler(async (event): Promise<Skill[]> => {
  return [
    {
      name: 'HTML5',
      category: 'Proficient',
      icon: 'i-skill-icons-html',
    },
    {
      name: 'CSS',
      category: 'Proficient',
      icon: 'i-skill-icons-css',
    },
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
      name: 'PHP',
      category: 'Proficient',
      icon: 'i-skill-icons-php-dark',
    },
    {
      name: 'SASS',
      category: 'Proficient',
      icon: 'i-skill-icons-sass',
    },
    {
      name: 'Tailwind CSS',
      category: 'Proficient',
      icon: 'i-skill-icons-tailwindcss-dark',
    },
    {
      name: 'Vue.js',
      category: 'Proficient',
      icon: 'i-skill-icons-vuejs-dark',
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
      name: 'Nuxt.js',
      category: 'Proficient',
      icon: 'i-skill-icons-nuxtjs-dark',
    },
    {
      name: 'Next.js',
      category: 'Proficient',
      icon: 'i-skill-icons-nextjs-dark',
    },
    {
      name: 'Nest.js',
      category: 'Proficient',
      icon: 'i-skill-icons-nestjs-dark',
    },
    {
      name: 'Laravel',
      category: 'Experienced',
      icon: 'i-skill-icons-laravel-dark',
    },
    {
      name: 'WordPress',
      category: 'Proficient',
      icon: 'i-skill-icons-wordpress',
    },
    {
      name: 'Bootstrap',
      category: 'Proficient',
      icon: 'i-skill-icons-bootstrap',
    },
    {
      name: 'jQuery',
      category: 'Proficient',
      icon: 'i-skill-icons-jquery',
    },
    {
      name: 'Git',
      category: 'Proficient',
      icon: 'i-skill-icons-git',
    },
    {
      name: 'Linux Command Line',
      category: 'Experienced',
      icon: 'i-skill-icons-linux-dark',
    },
    {
      name: 'Docker',
      category: 'Proficient',
      icon: 'i-skill-icons-docker',
    },
    {
      name: 'GitHub',
      category: 'Proficient',
      icon: 'i-skill-icons-github-dark',
    },
    {
      name: 'GitLab',
      category: 'Proficient',
      icon: 'i-skill-icons-gitlab-dark',
    },
    {
      name: 'AWS EC2',
      category: 'Experienced',
      icon: 'i-skill-icons-aws-dark',
    },
    {
      name: 'Vercel',
      category: 'Experienced',
      icon: 'i-skill-icons-vercel-dark',
    },
    {
      name: 'SQL',
      category: 'Proficient',
      icon: 'i-skill-icons-postgresql-dark',
    },
    {
      name: 'UI/UX',
      category: 'Proficient',
      icon: 'i-lucide-picture-in-picture-2',
    },
    {
      name: 'API Development',
      category: 'Proficient',
      icon: 'i-lucide-send-to-back',
    },
    {
      name: 'Accessibility (a11y)',
      category: 'Proficient',
      icon: 'i-lucide-send-to-back',
    },
    {
      name: 'Big Commerce',
      category: 'Proficient',
      icon: 'i-lucide-shopping-cart',
    },
    {
      name: 'Problem Solving',
      category: 'Proficient',
    },
    {
      name: 'Teamwork',
      category: 'Experienced',
      icon: 'i-lucide-users',
    },
    {
      name: 'Team Leadership',
      category: 'Experienced',
    },
    {
      name: 'Agile Methodologies',
      category: 'Experienced',
      icon: 'i-lucide-kanban',
    },
  ];
});
