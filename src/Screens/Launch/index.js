
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/FontAwesome5'
import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

import Home from '../Home';
import ProductDetail from '../ProductDetail';
import Cart from '../Cart';
import Products from '../Products';
import Profile from '../Profile';
import Bill from '../Bill';
import HoaDonDetail from '../HoadonDetail';
import { color } from 'react-native-reanimated';

const LaunchStack = createBottomTabNavigator(
    {
        Home: {
            screen: Home, navigationOptions: {
                tabBarLabel: 'Trang Chủ',
                tabBarIcon: () => (
                    <Icon name="ios-home" style={styles.icon} />
                )
            }
        },
        ProductDetail: {
            screen: ProductDetail,
            navigationOptions: {
                tabBarButtonComponent: () => {
                    return <View />;
                },
            },
        },
        Products: {
            screen: Products, navigationOptions: {
                tabBarLabel: 'Sản phẩm',
                tabBarIcon: () => (
                    <Icon name="ios-list" style={styles.icon} />
                )
            }
        },
        Cart: {
            screen: Cart, navigationOptions: {
                tabBarLabel: 'Giỏ hàng',
                tabBarIcon: () => (
                    <Icon name="ios-cart" style={styles.icon} />
                )
            }
        },
        Bill: {
            screen: Bill, navigationOptions: {
                tabBarLabel: 'Hóa đơn',
                tabBarIcon: () => (
                    <Icon2 name="file-invoice" style={styles.icon} />
                )
            }
        },
        InvoiceDetail: {
            screen: HoaDonDetail,
            navigationOptions: {
                tabBarButtonComponent: () => {
                    return <View />;
                },
            },
        },
        Profile: {
            screen: Profile, navigationOptions: {
                tabBarLabel: 'Tài khoản',
                tabBarIcon: () => (
                    <Icon1 name="user" style={styles.icon} />
                )
            }
        },
    }
);

export default LaunchStack;

const styles = StyleSheet.create({
    icon: {
        color: "orangered",
        fontSize: 25
    }
})