import type { Service } from '~/types';

export default defineEventHandler(async (event): Promise<Service[]> => {
  return [
    {
      name: 'Front-End Engineering',
      icon: 'CodeBracketIcon',
    },
    {
      name: 'Back-End Engineering',
      icon: 'CommandLineIcon',
    },
    {
      name: 'APIs Development',
      icon: 'CircleStackIcon',
    },
    {
      name: 'AI Integration',
      icon: 'ChatBubbleLeftRightIcon',
    },
    {
      name: 'Code Check',
      icon: 'ShieldCheckIcon',
    },
    {
      name: 'Accessibility a11y',
      icon: 'BoltIcon',
    },
  ];
});
