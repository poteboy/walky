import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
export const AuthRootKeys = {
  SignUp: 'SignUp',
  Welcome: 'Welcome',
  ConfirmSMS: 'ConfirmSMS',
  LogIn: 'LogIn',
} as const;

export type AuthRootNames = keyof typeof AuthRootKeys;

export type AuthParamList = {
  [AuthRootKeys.SignUp]: undefined;
  [AuthRootKeys.Welcome]: undefined;
  [AuthRootKeys.ConfirmSMS]: {confirm: FirebaseAuthTypes.ConfirmationResult};
  [AuthRootKeys.LogIn]: undefined;
};

export type AuthStackNavigationProps = NativeStackNavigationProp<
  AuthParamList,
  AuthRootNames
>;
