import React, {FC} from 'react'
import { useNavigation } from '@react-navigation/native';
import Layout from '@src/components/Layout';
import { VStack, Button, HStack } from 'native-base'
import styled from 'styled-components/native';
import { route } from '../route'
import { NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackNavigationProps, AuthNavigaionProps} from '../AuthStackNavigator'

const ScreenCompoennt: FC<AuthNavigaionProps> = props => {

    const navigator = useNavigation<AuthStackNavigationProps>()

    const onSendSMS = () => {
        navigator.navigate(route.ConfirmSMS, {phone: '090-1234-1234'})
    }


    return (
        <Layout>
            <VerticalBox>
                <Button onPress={onSendSMS}>SMSを送信する</Button>
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