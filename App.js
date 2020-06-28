import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './src/Screens/Auth/Login';
import Register from './src/Screens/Auth/Register';
import Launch from './src/Screens/Launch';

const AuthStack = createStackNavigator({
    Login: { screen: Login },
    Register: { screen: Register },
});

const AppNavigation = createSwitchNavigator(
    {
        Launch: Launch,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'Auth',
    }
);

const AppContainer = createAppContainer(AppNavigation);

const App = () => {
    return (
        <>
            <AppContainer />
        </>
    );
};

export default App;
