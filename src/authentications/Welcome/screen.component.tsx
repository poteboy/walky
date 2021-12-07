import React, {FC} from 'react'
import { useNavigation } from '@react-navigation/native';
import Layout from '@src/components/Layout';
import { VStack, Button, HStack } from 'native-base'
import styled from 'styled-components/native';
import { AuthRootKeys } from '../route'
import { NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAuthNavigation} from '../useAuthNavigation'

const ScreenComponent: FC = () => {

    const navigation = useAuthNavigation()

    const onSignUp = () => {
        navigation.navigate(AuthRootKeys.SignUp)
    }

    return (
        <Layout>
            <VerticalBox>
                <HorizontalBox>
                    <Button onPress={onSignUp}>電話番号でログイン</Button>
                </HorizontalBox>
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

export default ScreenComponent