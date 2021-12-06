import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {route} from './route'
import SignUpScreen from './SignUp/screen.component';

const AuthStack = createNativeStackNavigator()

const AuthStackNavigator: React.FC = () => {

    return (
        <AuthStack.Navigator initialRouteName={route.signUp} screenOptions={{headerShown: false}}>
            <AuthStack.Screen name={route.signUp} component={SignUpScreen} />
        </AuthStack.Navigator>
    )
}

export default AuthStackNavigator