import {UserUnitFragment} from '@src/entity/user/document.gen';
import {createContext, useContext} from 'react';

export const UserContext = createContext<{
  user: UserUnitFragment;
}>({
  user: null as any, // 気になったら理由聞いてね
});

export const useUserContext = () => useContext(UserContext);
