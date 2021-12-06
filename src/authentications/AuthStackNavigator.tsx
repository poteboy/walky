import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {route} from './route'
import { NativeStackNavigationProp} from '@react-navigation/native-stack';
import SignUpScreen from './SignUp/screen.component';
import WelcomeScreen from './Welcome/screen.component';
import ConfirmSMSScreen from './ConfirmSMS/screen.component'

export type AuthNavigationProps = NativeStackNavigationProp<any, string>

const AuthStack = createNativeStackNavigator()

const AuthStackNavigator: React.FC = () => {

    return (
        <AuthStack.Navigator initialRouteName={route.welcome}>
            <AuthStack.Screen name={route.welcome} component={WelcomeScreen} />
            <AuthStack.Screen name={route.signUp} component={SignUpScreen} />
            <AuthStack.Screen name={route.confirmSMS} component={ConfirmSMSScreen} />
        </AuthStack.Navigator>
    )
}

export default AuthStackNavigator