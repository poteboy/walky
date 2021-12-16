import React, {FC, useEffect} from 'react';
import {useAuth} from '@src/hooks';
import {retrieveTokenId} from '@src/apollo/getToken';
import AuthenticationNavigator from '@src/navigation/authentication-navigator';

export const AppRoot: FC = () => {
  const {authorized} = useAuth();

  useEffect(() => {
    (async () => {
      await retrieveTokenId();
    })();
  }, [authorized]);

  return <AuthenticationNavigator />;
};
