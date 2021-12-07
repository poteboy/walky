import { NativeStackNavigationProp} from '@react-navigation/native-stack';

export const AuthRootKeys = {
    SignUp: 'SignUp',
    Welcome: 'Welcome',
    ConfirmSMS: 'ConfirmSMS'
} as const

export type AuthRootNames = keyof typeof AuthRootKeys

export type AuthParamList = {
    [AuthRootKeys.SignUp]: undefined,
    [AuthRootKeys.Welcome]: undefined,
    [AuthRootKeys.ConfirmSMS]: { phone: string},
}

export type AuthStackNavigationProps = NativeStackNavigationProp<AuthParamList, AuthRootNames>