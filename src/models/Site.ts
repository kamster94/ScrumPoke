/* eslint-disable no-unused-vars */
import { atomWithStorage } from 'jotai/utils';

export interface AvatarImage {
  name: string;
  path: string;
}

export interface SiteProperties {
  siteName: string;
  avatars: AvatarImage[];
}

// eslint-disable-next-line no-shadow
export enum Theme {
  light = 'light',
  dark = 'business',
}

export const themeAtom = atomWithStorage<Theme>('theme', Theme.light);
