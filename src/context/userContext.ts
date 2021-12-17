import {UserUnitFragment} from '@src/entity/user/document.gen';
import {createContext, useContext} from 'react';

export const UserContext = createContext<{
  user: UserUnitFragment | null;
}>({
  user: null,
});

export const useUserContext = () => useContext(UserContext);
