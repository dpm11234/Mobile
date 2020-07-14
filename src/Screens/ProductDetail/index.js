import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    FlatList,
    Button,
    ToastAndroid
} from 'react-native';
import { styles } from './styles';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { environment } from '../../environment';
import AsyncStorage from '@react-native-community/async-storage';

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableTitle: ['Tương thích:', 'Jack cắm:', 'Công nghệ âm thanh:',
                'Độ dài dây:', 'Trọnglượng:'],
        };

    }

    async clickEventListener() {

        let listCartItem = await AsyncStorage.getItem('@listCartItem');
        if (!listCartItem) {
            listCartItem = [];
        } else {
            listCartItem = JSON.parse(listCartItem);
        }
        const item = this.props.navigation.getParam('item');
        let check = false;

        const cartItem = {
            itemId: item.maSP,
            name: item.tenSP,
            thumbnailImage: `${environment.domain}/image/${item.img}`,
            qty: 1,
            salePrice: item.gia,
            checked: 1,
        };

        listCartItem = listCartItem.map(_item => {
            if (_item['itemId'] === cartItem.itemId) {
                _item['qty'] += 1;
                check = true;
                ToastAndroid.show("Thêm thành công !", ToastAndroid.SHORT);
            }
            return _item;
        });

        if (!check) {
            listCartItem.push(cartItem);
            ToastAndroid.show("Thêm thành công !", ToastAndroid.SHORT);
        }
        console.log(listCartItem);
        await AsyncStorage.setItem('@listCartItem', JSON.stringify(listCartItem));

    }

    render() {
        const state = this.state;
        const item = this.props.navigation.getParam('item');
        console.log(item);
        const tableData = [];

        tableData.push([item['tuongThich']]);
        tableData.push([item['jack_cam']]);
        tableData.push([item['congNghe']]);
        tableData.push([`${item['kichThuoc']} m`]);
        tableData.push([item['trongLuong']]);

        return (
            <ScrollView>
                <View style={styles.container}>
                    <ScrollView>
                        <View style={{ alignItems: 'center', marginHorizontal: 30 }}>
                            <Image style={styles.productImg} source={{ uri: `${environment.domain}/image/${item.img}` }} />
                            <Text style={styles.name}>{item.tenSP}</Text>
                            <Text style={styles.price}>{item.gia}</Text>
                            <Text style={styles.description}>
                                {item.moTa}
                            </Text>
                        </View>
                        <View style={styles.separator}></View>
                        <View style={styles.addToCarContainer}>
                            <TouchableOpacity style={styles.shareButton} onPress={() => this.clickEventListener()}>
                                <Text style={styles.shareButtonText}>Thêm vào giỏ hàng</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buy}>
                            <TouchableOpacity style={styles.shareButton}>
                                <Text style={styles.shareButtonText}>Mua ngay</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.ts}>Thông số kĩ thuật</Text>
                            <View style={styles.tskt}>
                                <Table>
                                    <Row data={state.tableHead} flexArr={[1, 1]} style={styles.head} textStyle={styles.text} />
                                    <TableWrapper style={styles.wrapper}>
                                        <Col data={state.tableTitle} style={styles.title} heightArr={[28, 28]} textStyle={styles.text} />
                                        <Rows data={tableData} flexArr={[1]} style={styles.row} textStyle={styles.text} />
                                    </TableWrapper>
                                </Table>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
        );
    }
}

export default ProductDetail;