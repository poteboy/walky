import React, {useMemo} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { AppDrawer } from './drawer';
import { authRoute } from './route';
import AuthStackNavigator from '@src/authentications/AuthStackNavigator';
import { useAuth } from '@src/hooks';


const Authentication = createStackNavigator();

const AuthenticationNavigator: React.FC = () => {

    const {authLoading, authorized} = useAuth()
    const initialRouteName = useMemo(() => {
        return authorized ? authRoute.DRAWER : authRoute.AUTH
    }, [authorized])


    return (

        <Authentication.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRouteName}>
            <Authentication.Screen name={authRoute.DRAWER} component={AppDrawer}  />
            <Authentication.Screen name={authRoute.AUTH} component={AuthStackNavigator}  />
        </Authentication.Navigator>
    )
}

export default AuthenticationNavigator