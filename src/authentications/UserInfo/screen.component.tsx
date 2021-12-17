import React, {FC} from 'react';
import Layout from '@src/components/Layout';
import {useAuth, useSnackBar} from '@src/hooks';
import {useRoute, RouteProp} from '@react-navigation/native';
import {AuthRootKeys, AuthParamList} from '../route';
import {Text} from 'native-base';
import {useRegisterUserMutation} from './document.gen';
import {useUserContext} from '@src/context';

const ScreenCompoennt: FC = () => {
  const {authorized} = useAuth();
  const route = useRoute<RouteProp<AuthParamList, 'UserInfo'>>();
  const {showSnack} = useSnackBar();
  const {user} = useUserContext();

  console.log(authorized);

  const [submit] = useRegisterUserMutation({
    onError(error) {
      showSnack({message: error.message});
    },
  });

  return (
    <Layout>
      <Text>テスト</Text>
      <Text>{user?.uid}</Text>
    </Layout>
  );
};

export default ScreenCompoennt;
