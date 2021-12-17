import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
export const AuthRootKeys = {
  SignUp: 'SignUp',
  Welcome: 'Welcome',
  ConfirmSMS: 'ConfirmSMS',
  LogIn: 'LogIn',
  UserInfo: 'UserInfo',
} as const;

export type AuthRootNames = keyof typeof AuthRootKeys;

export type AuthParamList = {
  [AuthRootKeys.SignUp]: undefined;
  [AuthRootKeys.Welcome]: undefined;
  [AuthRootKeys.ConfirmSMS]: {
    confirm: FirebaseAuthTypes.ConfirmationResult;
    phone: string;
  };
  [AuthRootKeys.LogIn]: undefined;
  [AuthRootKeys.UserInfo]: undefined;
};

export type AuthStackNavigationProps = NativeStackNavigationProp<
  AuthParamList,
  AuthRootNames
>;
