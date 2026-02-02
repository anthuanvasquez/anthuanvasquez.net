import type { Service } from '../../app/types';

export default defineEventHandler(async (event): Promise<Service[]> => {
  return [
    {
      name: 'Front-End Engineering',
      icon: 'i-lucide-code-xml',
    },
    {
      name: 'Back-End Engineering',
      icon: 'i-lucide-square-terminal',
    },
    {
      name: 'APIs Development',
      icon: 'i-lucide-send-to-back',
    },
    {
      name: 'AI Integration',
      icon: 'i-lucide-brain',
    },
    {
      name: 'Code Check',
      icon: 'i-lucide-shield-check',
    },
    {
      name: 'Accessibility a11y',
      icon: 'i-lucide-accessibility',
    },
  ];
});
