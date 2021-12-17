import {UserUnitFragment} from '@src/entity/user/document.gen';
import {createContext, useContext} from 'react';

export const UserContext = createContext<{
  user: UserUnitFragment | null;
}>({
  user: null, // navigator レイヤで必ず埋めているため、使用時には非 null が保証される
});

export const useUserContext = () => useContext(UserContext);
