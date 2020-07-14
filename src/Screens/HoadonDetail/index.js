import React, { Component } from 'react';
import {
    Text,
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
} from 'react-native';
class HoaDonDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailHoadon: [],
        };
    }
    render() {
        return (
            <ScrollView>

                <View style={styles.Inf}>
                    <Text style={styles.Inf_top}> Mã đơn hàng: 101001</Text>
                    <Text style={styles.Inf_in}> Ngày đặt hàng: 30/06/2020 </Text>
                    <Text style={[styles.Inf_in, { marginBottom: 10 }]}> Trạng thái: Đã thanh toán</Text>
                </View>

                <View style={styles.Inf}>
                    <Text style={styles.Inf_top}> Địa chỉ người nhận</Text>
                    <Text style={styles.Inf_in}> Lê Thị Lan </Text>
                    <Text style={styles.Inf_in}> 0123456312</Text>
                    <Text style={[styles.Inf_in, { marginBottom: 10 }]}> TPHCM</Text>
                </View>

                <View style={styles.LableCTHD}>
                    <Text style={styles.textCTHD}> Thông tin đơn hàng </Text>
                </View>

                <View>
                    <View style={styles.Product}>
                        <View style={{ flex: 1, width: 200 }}>
                            <Text style={styles.ProductName}>Tai nghe Iphone 5 </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', }}>
                            <View style={{ flex: 1, alignItems: 'center', }}>
                                <Text style={styles.ProductCount}>1 </Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'flex-end', right: 10 }}>
                                <Text style={styles.ProductPrice}> 500000</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.Product}>
                        <View style={{ flex: 1, width: 200 }}>
                            <Text style={styles.ProductName}>Tôi thích loa hơn tai ngh e đó</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', }}>
                            <View style={{ flex: 1, alignItems: 'center', }}>
                                <Text style={styles.ProductCount}>2 </Text>
                            </View>
                            <View style={styles.setright}>
                                <Text style={styles.ProductPrice}> 1000000</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <View>
                        <Text style={styles.SumLabel}> Tổng cộng :</Text>
                    </View>
                    <View style={styles.setright}>
                        <Text style={styles.SumPrice}> 2500000</Text>
                    </View>
                </View>
            </ScrollView >

        );
    }
}
export default HoaDonDetail;
const styles = StyleSheet.create({

    Inf: {
        marginBottom: 10,
        backgroundColor: '#FEFFFF',
        elevation: 2,

    },
    Inf_top: {
        marginTop: 10,
        fontSize: 20
    },
    Inf_in: {
        fontSize: 18,
        color: '#444D49',
    },

    LableCTHD: {
        marginTop: 20,
        flexDirection: 'row',
        marginBottom: 5
    },
    textCTHD: {
        fontSize: 25,
        color: '#000'
    },
    setright: {
        flex: 1,
        alignItems: 'flex-end',
        right: 10
    },

    Product: {
        borderBottomColor: '#E8ECEB',
        borderBottomWidth: 1,
        flex: 1,
        flexDirection: 'row',
        marginTop: 2,
        elevation: 2,
        backgroundColor: '#FEFFFF',

    },
    ProductName: {
        marginTop: 10,
        fontWeight: "bold",
        flexDirection: 'column',
        fontSize: 25,
        marginBottom: 10,
        marginLeft: 5
    },
    ProductCount: {
        marginTop: 10,
        fontSize: 23,
    },
    ProductPrice: {
        marginTop: 10,
        fontSize: 23,
    },
    SumLabel: {
        fontSize: 30,
        color: '#154D7B',
        fontWeight: "bold",
        backgroundColor: '#FEFFFF',

    },
    SumPrice: {
        marginTop: 10,
        fontSize: 23,
        fontWeight: "bold",
        color: '#154D7B'

    }

})