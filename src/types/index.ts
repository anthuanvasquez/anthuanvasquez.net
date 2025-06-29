/**
 * If the outline icons are need it, just the line below.
 *
 */
import type * as outline from '@heroicons/vue/24/outline';
import type * as solid from '@heroicons/vue/24/solid';

export type HeroIconName = keyof typeof solid | keyof typeof outline;
export type IconType = 'solid' | 'outline' | 'custom';
export type IconName = HeroIconName;

export type Project = {
  name: string;
  description: string;
  skills: string;
};

export type Experience = {
  name: string;
  description: string;
  position: string;
  date: string;
  coding: string;
  projects?: {
    name: string;
    description: string;
    skills: string;
  }[];
};

export type Skill = {
  name: string;
  category: string;
};

export type Service = {
  name: string;
  icon: IconName;
};
