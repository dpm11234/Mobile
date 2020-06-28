import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import React from 'react';
import {
    View,
} from 'react-native';

import Home from '../Home';
import ProductDetail from '../ProductDetail';
import Cart from '../Cart';

const HomeStack = createStackNavigator(
    {
        Home: { screen: Home },
    }
);

const CartStack = createStackNavigator(
    {
        Cart: { screen: Cart },
    }
);

const ProductDetailStack = createStackNavigator(
    {
        ProductDetail: { screen: ProductDetail },
    }
);

const LaunchStack = createBottomTabNavigator(
    {
        Home: { screen: HomeStack },
        ProductDetail: {
            screen: ProductDetailStack,
            navigationOptions: {
                tabBarButtonComponent: () => {
                    return <View />;
                },
            },
        },
        Cart: { screen: CartStack },
    }
);

export default LaunchStack;
