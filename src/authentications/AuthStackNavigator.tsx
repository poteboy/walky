import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthRootKeys ,AuthParamList, AuthRootNames} from './route'
import SignUpScreen from './SignUp/screen.component';
import WelcomeScreen from './Welcome/screen.component';
import ConfirmSMSScreen from './ConfirmSMS/screen.component'
import {NavigationProps} from '@src/navigation/navigation-props'

const AuthStack = createNativeStackNavigator<AuthParamList>()

const AuthStackNavigator: React.FC = () => {
    return (
        <AuthStack.Navigator initialRouteName={AuthRootKeys.Welcome}>
            <AuthStack.Screen name={AuthRootKeys.Welcome} component={WelcomeScreen} />
            <AuthStack.Screen name={AuthRootKeys.SignUp} component={SignUpScreen}  />
            <AuthStack.Screen name={AuthRootKeys.ConfirmSMS} component={ConfirmSMSScreen} />
        </AuthStack.Navigator>
    )
}

export default AuthStackNavigator