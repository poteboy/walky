import React, {FC} from 'react'
import { useNavigation } from '@react-navigation/native';
import Layout from '@src/components/Layout';
import { VStack, Button, HStack } from 'native-base'
import styled from 'styled-components/native';
import { route } from '../route'
import { NativeStackNavigationProp} from '@react-navigation/native-stack';
import { useAuth } from '@src/hooks';
import {AuthNavigationProps} from '../AuthStackNavigator'
import {authRoute} from '@src/navigation/route'

const ScreenCompoennt: FC = () => {

    const navigation = useNavigation<AuthNavigationProps>()
    const {setAuthorized} = useAuth()

    const onSignUp = () => {
        setAuthorized(true)
        const authNavigation = navigation.getParent()
        if (authNavigation) {
            authNavigation.navigate(authRoute.DRAWER)
        }
    }

    return (
        <Layout>
            <VerticalBox>
                <Button onPress={onSignUp}>確認</Button>
            </VerticalBox>
        </Layout>
    )
}

const VerticalBox = styled(VStack)`
    height: 100%;
    justify-content: center;
`

const HorizontalBox = styled(HStack)`
    width: 100%;
    justify-content: center;
`

export default ScreenCompoennt