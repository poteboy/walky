import {UserUnitFragment} from '@src/entity/user/document.gen';
import {createContext, useContext} from 'react';

export const TabContext = createContext<{
  user: UserUnitFragment;
  loadingUser: boolean;
  refetchUser: () => void;
}>({
  user: null as any, // ここをキャストしている理由が気になったら理由聞いてね
  loadingUser: false,
  refetchUser: () => {
    return;
  },
});

export const useTabContext = () => useContext(TabContext);
