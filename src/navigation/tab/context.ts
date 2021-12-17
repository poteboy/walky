import {UserUnitFragment} from '@src/entity/user/document.gen';
import {createContext, useContext} from 'react';

export const TabContext = createContext<{
  user: UserUnitFragment;
}>({
  user: null as any, // ここをキャストしている理由が気になったら理由聞いてね
});

export const useTabContext = () => useContext(TabContext);
