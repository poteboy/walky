import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {route , RouteName, AuthParamList} from './route'
import { NativeStackNavigationProp} from '@react-navigation/native-stack';
import SignUpScreen from './SignUp/screen.component';
import WelcomeScreen from './Welcome/screen.component';
import ConfirmSMSScreen from './ConfirmSMS/screen.component'
import {NavigationProps} from '@src/navigation/navigation-props'

export type AuthStackNavigationProps = NativeStackNavigationProp<AuthParamList<AuthParams>, RouteName>
export type AuthParams = {
    phone: string
}
export type AuthNavigaionProps = NavigationProps<AuthStackNavigationProps, AuthParams>
const AuthStack = createNativeStackNavigator<AuthParamList<AuthParams>>()

const AuthStackNavigator: React.FC = () => {
    return (
        <AuthStack.Navigator initialRouteName={route.Welcome}>
            <AuthStack.Screen name={route.Welcome} component={WelcomeScreen} />
            <AuthStack.Screen name={route.SignUp} component={SignUpScreen} />
            <AuthStack.Screen name={route.ConfirmSMS} component={ConfirmSMSScreen} />
        </AuthStack.Navigator>
    )
}

export default AuthStackNavigator