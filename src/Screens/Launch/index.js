import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import React from 'react';
import {
    View,
} from 'react-native';

import Home from '../Home';
import ProductDetail from '../ProductDetail';
import Cart from '../Cart';
import Products from '../Products';
import Profile from '../Profile';

const LaunchStack = createBottomTabNavigator(
    {
        Home: { screen: Home },
        ProductDetail: {
            screen: ProductDetail,
            navigationOptions: {
                tabBarButtonComponent: () => {
                    return <View />;
                },
            },
        },
        Products: { screen: Products },
        Cart: { screen: Cart },
        Profile: { screen: Profile },
    }
);

export default LaunchStack;
