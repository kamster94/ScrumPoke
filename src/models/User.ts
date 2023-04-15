import { atomWithStorage } from 'jotai/utils';

export interface User {
  username: string;
  avatar: string;
}

const initialEmptyUser: User = {
  username: '',
  avatar: '',
};

export const currentUserAtom = atomWithStorage<User>('currentUser', initialEmptyUser);
