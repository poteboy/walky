import React, {FC} from 'react'
import { useNavigation } from '@react-navigation/native';
import Layout from '@src/components/Layout';
import { VStack, Button, HStack } from 'native-base'
import styled from 'styled-components/native';
import { route } from '../route'
import { NativeStackNavigationProp} from '@react-navigation/native-stack';

const routeName = route.welcome
type WelcomeScreenProps = NativeStackNavigationProp<any, typeof routeName>

const ScreenComponent: FC = () => {

    const navigation = useNavigation<WelcomeScreenProps>()

    const onSignUp = () => {
        // navigation.navigate({key: route.signUp})
        console.log(navigation.getState())
        console.log(navigation.getParent())
        navigation.navigate(route.signUp)
    }

    return (
        <Layout>
            <VerticalBox>
                <HorizontalBox>
                    <Button onPress={onSignUp}>hello</Button>
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