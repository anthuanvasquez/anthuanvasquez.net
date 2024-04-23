/**
 * If the outline icons are need it, just the line below.
 *
 */
import * as outline from '@heroicons/vue/24/outline';
import * as solid from '@heroicons/vue/24/solid';
import * as custom from '@/components/ui/Icon/Custom';

export type HeroIconName = keyof typeof solid | keyof typeof outline;
export type CustomIconName = keyof typeof custom;
export type IconType = 'solid' | 'outline' | 'custom';
export type IconName = HeroIconName | CustomIconName;
