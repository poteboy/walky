import React, { ReactNode, FC } from 'react';
import styled from 'styled-components/native';
import { SafeAreaView, Dimensions } from 'react-native';
import { View, VStack, Text} from 'native-base'

type Props = {
    children: ReactNode
}

const screenHeight = Dimensions.get('window').height

const Layout: FC<Props> = ({children}) => {


    return (
        <View style={{flex: 1}}>
            <SafeAreaView>
                <View style={{height: screenHeight}}>
                    {children}
                </View>
            </SafeAreaView>
        </View>
    )
}

export default Layout