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
import { environment } from '../../environment';
import { BillService } from '../../services';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
class HoaDonDetail extends Component {
    constructor(props) {
        super(props);
        const hd = this.props.navigation.getParam('item');
        this.state = {
            mahoadon: hd.maHD,
            total: 0,
            detailHoadon: [],
        };

    }
    invoiceDetail = async () => {

        const data = await BillService.invoiceDetail(this.state.mahoadon);
        if (data.data.success) {

            this.setState({ detailHoadon: data.data['data'] }, () => {

            });

        } else {
            this.setState({ detailHoadon: [] }, () => {

            });
        }
    }
    render() {
        const detailHoadon = this.state.detailHoadon ? this.state.detailHoadon : [];


        this.invoiceDetail();
        const itemElement = detailHoadon.map(item => (
            <TouchableWithoutFeedback key={item.maHD} style={styles.Container} >
                <View style={styles.Product}>
                    <View style={{ flex: 1, width: '100%' }}>
                        <Text style={styles.ProductName}>{item.tenSP}</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', }}>
                        <View style={{ flex: 1, alignItems: 'center', }}>
                            <Text style={styles.ProductCount}>Số lượng: {item.soLuong} </Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end', right: 10 }}>
                            <Text style={styles.ProductPrice}>{item.gia}</Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback >

        ));

        return (
            <ScrollView>


                <View style={styles.LableCTHD}>
                    <Text style={styles.textCTHD}> Thông tin đơn hàng </Text>
                </View>

                <View>
                    {itemElement}


                </View>


            </ScrollView >

        );
    }
}
export default HoaDonDetail;
const styles = StyleSheet.create({

    Container: {
        flex: 1,
        width: '95%',
        alignSelf: 'center',
        height: '35%',
    },

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
        flexDirection: 'column',
        marginTop: 2,
        elevation: 2,
        backgroundColor: '#FEFFFF',

    },
    ProductName: {
        marginTop: 10,
        fontWeight: "bold",
        flexDirection: 'column',
        fontSize: 20,
        marginBottom: 10,
        marginLeft: 5,
        color: '#696969'
    },
    ProductCount: {
        margin: 10,
        fontSize: 23,
    },
    ProductPrice: {
        marginTop: 10,
        fontSize: 20,
        color: 'orangered',
        fontWeight: "bold",


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