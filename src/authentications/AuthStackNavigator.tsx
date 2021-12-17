import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthRootKeys, AuthParamList} from './route';
import SignUpScreen from './SignUp/screen.component';
import WelcomeScreen from './Welcome/screen.component';
import ConfirmSMSScreen from './ConfirmSMS/screen.component';
import UserInfoScreen from './UserInfo/screen.component';
import {useAuth} from '@src/hooks';
import {useAuthNavigation} from './useAuthNavigation';
import {useUserContext} from '@src/context';
import {
  useFetchUserQuery,
  useFetchUserLazyQuery,
} from '@src/entity/user/document.gen';

const AuthStack = createNativeStackNavigator<AuthParamList>();

const AuthStackNavigator: React.FC = () => {
  const navigation = useAuthNavigation();
  const {authorized, userUid} = useAuth();
  const [fetchUser, {data, loading}] = useFetchUserLazyQuery({
    variables: {uid: userUid ?? ''},
  });
  const user = data?.getUser;

  useEffect(() => {
    if (authorized && !!user) {
      if (user.name) {
        navigation.getParent()?.goBack();
      } else {
        navigation.navigate(AuthRootKeys.UserInfo);
      }
    }
  }, [authorized, user, loading]);

  useEffect(() => {
    if (userUid) {
      fetchUser();
    }
  }, [userUid]);

  return (
    <AuthStack.Navigator
      initialRouteName={AuthRootKeys.Welcome}
      screenOptions={{headerShown: true}}>
      <AuthStack.Screen name={AuthRootKeys.Welcome} component={WelcomeScreen} />
      <AuthStack.Screen name={AuthRootKeys.SignUp} component={SignUpScreen} />
      <AuthStack.Screen
        name={AuthRootKeys.ConfirmSMS}
        component={ConfirmSMSScreen}
      />
      <AuthStack.Screen
        name={AuthRootKeys.UserInfo}
        component={UserInfoScreen}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
