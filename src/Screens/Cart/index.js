/* eslint-disable react-native/no-inline-styles */
/* eslint-disable dot-notation */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Image,
    ActivityIndicator,
    TextInput,
    Alert,
    Dimensions
} from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationEvents } from 'react-navigation';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
class CartScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectAll: false,
            cartItemsIsLoading: false,
            cartItems: [],
        };

        this.loadCartItem();
    }

    selectHandler = (index, value) => {
        const newItems = [...this.state.cartItems];
        newItems[index]['checked'] = value === 1 ? 0 : 1;
        this.setState({ cartItems: newItems });
    }

    selectHandlerAll = (value) => {
        const newItems = [...this.state.cartItems];
        newItems.map((item, index) => {
            newItems[index]['checked'] = value === true ? 0 : 1;
        });
        this.setState({ cartItems: newItems, selectAll: (value === true ? false : true) });
    }

    deleteHandler = (index) => {
        Alert.alert(
            'Bạn có chắc muốn xóa sản phẩm khỏi giỏ hàng ? ',
            '',
            [
                { text: 'Thoát', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                {
                    text: 'Xóa', onPress: () => {
                        let updatedCart = this.state.cartItems;
                        updatedCart.splice(index, 1);
                        this.setState(updatedCart, async () => {
                            await AsyncStorage.setItem('@listCartItem', JSON.stringify(this.state.cartItems));
                        });
                    },
                },
            ],
            { cancelable: false }
        );
    }

    quantityHandler = async (action, index) => {
        const newItems = [...this.state.cartItems];

        let currentQty = newItems[index]['qty'];

        if (action === 'more') {
            newItems[index]['qty'] = currentQty + 1;
            await AsyncStorage.setItem('@listCartItem', JSON.stringify(this.state.cartItems));
        } else if (action === 'less') {
            newItems[index]['qty'] = currentQty > 1 ? currentQty - 1 : 1;
        }

        this.setState({ cartItems: newItems });
    }

    subtotalPrice = () => {
        const { cartItems } = this.state;
        if (cartItems) {
            return cartItems.reduce((sum, item) => sum + (item.checked === 1 ? item.qty * item.salePrice : 0), 0);
        }
        return 0;
    }

    loadCartItem = async () => {
        let listCartItem = await AsyncStorage.getItem('@listCartItem');
        if (!listCartItem) {
            listCartItem = [];
        } else {
            listCartItem = JSON.parse(listCartItem);
            this.setState({ cartItems: listCartItem });
        }
    }

    render() {
        const styles = StyleSheet.create({
            centerElement: { justifyContent: 'center', alignItems: 'center' },
        });

        const { cartItems, cartItemsIsLoading, selectAll } = this.state;

        return (
            <View style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
                <NavigationEvents
                    onDidFocus={() => this.loadCartItem()}
                />
                <View style={{ flexDirection: 'row', backgroundColor: 'darkorange', marginBottom: 10 }}>
                    <View style={[styles.centerElement, { width: 50, height: 50 }]}>
                        <Ionicons name="ios-cart" size={25} color="#fff" />
                    </View>
                    <View style={[styles.centerElement, { height: 50, }]}>
                        <Text style={{ fontSize: 20, color: '#fff', fontWeight: 'bold' }}>Giỏ hàng</Text>
                    </View>
                </View>

                {
                    cartItemsIsLoading ? (
                        <View style={[styles.centerElement, { height: 300 }]}>
                            <ActivityIndicator size="large" color="#ef5739" />
                        </View>
                    ) : (
                            <ScrollView >
                                {cartItems && cartItems.map((item, i) => (
                                    <View
                                        key={i}
                                        style={{
                                            flexDirection: 'row', backgroundColor: '#fff', marginBottom: 10, height: 120,
                                            //  width: screenWidth - 10, alignSelf: "center", borderRadius: 15, elevation: 5
                                        }}>
                                        <View style={[styles.centerElement, { width: 60 }]}>
                                            <TouchableOpacity style={[styles.centerElement, { width: 32, height: 32 }]} onPress={() => this.selectHandler(i, item.checked)}>
                                                <Ionicons name={item.checked === 1 ? 'ios-checkmark-circle' : 'ios-checkmark-circle-outline'} size={25} color={item.checked === 1 ? '#0faf9a' : '#aaaaaa'} />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ flexDirection: 'row', flexGrow: 1, flexShrink: 1, alignSelf: 'center' }}>
                                            <TouchableOpacity onPress={() => {/*this.props.navigation.navigate('ProductDetails', {productDetails: item})*/ }} style={{ paddingRight: 10 }}>
                                                <Image source={{ uri: item.thumbnailImage }} style={[styles.centerElement, { height: 80, width: 80, backgroundColor: '#eeeeee' }]} />
                                            </TouchableOpacity>
                                            <View style={{ flexGrow: 1, flexShrink: 1, alignSelf: 'center' }}>
                                                <Text numberOfLines={1} style={{ fontSize: 15 }}>{item.name}</Text>
                                                <Text numberOfLines={1} style={{ color: '#8f8f8f' }}>{item.color ? 'Variation: ' + item.color : ''}</Text>
                                                <Text numberOfLines={1} style={{ color: '#333333', marginBottom: 10, paddingLeft: 10 }}>{item.qty * item.salePrice} VND</Text>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <TouchableOpacity onPress={() => this.quantityHandler('less', i)} style={{ borderWidth: 1, borderColor: '#cccccc' }}>
                                                        <MaterialIcons name="remove" size={22} color="#cccccc" />
                                                    </TouchableOpacity>
                                                    <Text style={{ borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#cccccc', paddingHorizontal: 7, paddingTop: 3, color: '#bbbbbb', fontSize: 13 }}>{item.qty}</Text>
                                                    <TouchableOpacity onPress={() => this.quantityHandler('more', i)} style={{ borderWidth: 1, borderColor: '#cccccc' }}>
                                                        <MaterialIcons name="add" size={22} color="#cccccc" />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>

                                        </View>
                                        <View style={[styles.centerElement, { width: 60 }]}>
                                            <TouchableOpacity style={[styles.centerElement, { width: 32, height: 32 }]} onPress={() => this.deleteHandler(i)}>
                                                <Ionicons name="md-trash" size={25} color="#ee4d2d" />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                ))}
                            </ScrollView>
                        )
                }

                {!cartItemsIsLoading &&
                    <View style={{ backgroundColor: '#fff', borderTopWidth: 2, borderColor: '#f6f6f6', paddingVertical: 5 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={[styles.centerElement, { width: 60 }]}>
                                <TouchableOpacity style={[styles.centerElement, { width: 32, height: 32 }]} onPress={() => this.selectHandlerAll(selectAll)}>
                                    <Ionicons name={selectAll === true ? 'ios-checkmark-circle' : 'ios-checkmark-circle-outline'} size={25} color={selectAll === true ? '#0faf9a' : '#aaaaaa'} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', flexGrow: 1, flexShrink: 1, justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text>Chọn tất cả</Text>
                                <View style={{ flexDirection: 'row', paddingRight: 20, alignItems: 'center' }}>
                                    <Text style={{ color: '#8f8f8f' }}>Tổng tiền: </Text>
                                    <Text>{this.subtotalPrice()} VND</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', height: 32, paddingRight: 20, alignItems: 'center' }}>
                            <TouchableOpacity style={[styles.centerElement, { backgroundColor: '#EE4D2D', width: 100, height: 30, borderRadius: 5 }]} onPress={() => console.log('test')}>
                                <Text style={{ color: '#ffffff', fontWeight: "bold" }}>Thanh toán</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }

            </View>
        );
    }
}

export default CartScreen;
