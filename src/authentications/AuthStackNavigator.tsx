import React, {useContext, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthRootKeys, AuthParamList, AuthRootNames} from './route';
import SignUpScreen from './SignUp/screen.component';
import WelcomeScreen from './Welcome/screen.component';
import ConfirmSMSScreen from './ConfirmSMS/screen.component';
import UserInfoScreen from './UserInfo/screen.component';
import {NavigationProps} from '@src/navigation/navigation-props';
import {useAuth} from '@src/hooks';
import {useAuthNavigation} from './useAuthNavigation';

const AuthStack = createNativeStackNavigator<AuthParamList>();

const AuthStackNavigator: React.FC = () => {
  const navigation = useAuthNavigation();
  const {authorized, userUid} = useAuth();

  // useEffect(() => {
  //   if (authorized && !hasName) {
  //     navigation.navigate(AuthRootKeys.UserInfo);
  //   }
  // }, [authorized, hasName]);

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
