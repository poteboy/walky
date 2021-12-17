import React, {FC, useEffect} from 'react';
import {useAuth} from '@src/hooks';
import {retrieveTokenId} from '@src/apollo/getToken';
import AuthenticationNavigator from '@src/navigation/authentication-navigator';
import {UserContext} from '@src/context';
import {useFetchUserLazyQuery} from '@src/entity/user/document.gen';
import {Box, Spinner} from 'native-base';

export const AppRoot: FC = () => {
  const {authorized, userUid, authLoading} = useAuth();
  const [fetchUser, {data, loading: userLoading}] = useFetchUserLazyQuery({
    variables: {uid: userUid ?? ''},
  });

  useEffect(() => {
    (async () => {
      await retrieveTokenId();
    })();
  }, [authorized, userUid]);

  useEffect(() => {
    if (authorized && userUid) {
      fetchUser();
    }
  }, [authorized, userUid]);

  const user = data?.getUser;
  const loading = userLoading || authLoading;

  if (loading) {
    return (
      <Box alignItems="center" justifyContent="center" flex={1}>
        <Spinner />
      </Box>
    );
  }

  return (
    <UserContext.Provider value={{user: user ?? null, loading: userLoading}}>
      <AuthenticationNavigator />
    </UserContext.Provider>
  );
};
