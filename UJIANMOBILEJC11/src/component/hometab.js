import React from 'react';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './home'
import Logout from './logout'

const Tab = createBottomTabNavigator();
const Tabnavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home';
                    } else {
                        iconName = focused ? 'add-box' : 'add-box'
                    }

                    // You can return any component that you like here!
                    return <Icon name={iconName} size={size} color={color} />;
                }
            })}
            tabBarOptions={{
                activeTintColor: '#fa163f',
                inactiveTintColor: '#758184',
                showLabel: false,
            }}
        >
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Resep' component={Logout} />
        </Tab.Navigator>

    )
}

export default Tabnavigation;