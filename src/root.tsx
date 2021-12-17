import React, {FC, useEffect} from 'react';
import {useAuth} from '@src/hooks';
import {retrieveTokenId} from '@src/apollo/getToken';
import AuthenticationNavigator from '@src/navigation/authentication-navigator';
import {UserContext} from '@src/context';
import {useFetchUserLazyQuery} from '@src/entity/user/document.gen';

export const AppRoot: FC = () => {
  const {authorized, userUid} = useAuth();
  const [fetchUser, {data}] = useFetchUserLazyQuery({
    variables: {uid: userUid ?? ''},
  });

  useEffect(() => {
    (async () => {
      await retrieveTokenId();
    })();
  }, [authorized]);

  useEffect(() => {
    fetchUser();
  }, [authorized, userUid]);

  const user = data?.getUser;

  return (
    <UserContext.Provider value={{user: user ?? null}}>
      <AuthenticationNavigator />
    </UserContext.Provider>
  );
};
