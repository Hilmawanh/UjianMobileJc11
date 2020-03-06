import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './login';
import Drawermain from './drawermain'

const Main = createStackNavigator()

const MainStack = (props) => {
    return (
        <NavigationContainer>
            <Main.Navigator initialRouteName='Login'>
                <Main.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Main.Screen name='Drawermain' component={Drawermain} options={{ headerShown: false }} />
            </Main.Navigator>
        </NavigationContainer>
    )
}

export default MainStack;