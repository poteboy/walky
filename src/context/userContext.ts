import {UserUnitFragment} from '@src/entity/user/document.gen';
import {createContext, useContext} from 'react';

export const UserContext = createContext<{
  user: UserUnitFragment | null;
  loading: boolean;
}>({
  user: null,
  loading: false,
});

export const useUserContext = () => useContext(UserContext);
