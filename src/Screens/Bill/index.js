import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    AsyncStorage
} from 'react-native';
import { BillService } from '../../services';

class Bill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            listHoadon: [],

        };
        this.checkLogin();
        this.getUser();

    }
    checkLogin = async () => {
        const isLogin = await AsyncStorage.getItem('isLogin');
        if (!isLogin) {
            this.props.navigation.navigate('Login');
            ToastAndroid.show("Vui lòng đăng nhập!", ToastAndroid.SHORT);
        }
    }
    getUser = async () => {
        const user = await AsyncStorage.getItem('user');
        if (user) {
            this.setState({ user: JSON.parse(user) }, async () => {
                await this.getBills()

            });
        }
    }
    getBills = async () => {
        const data = await BillService.getBills(this.state.user.sdt);
        if (data.data.success) {

            this.setState({ listHoadon: data.data['data'] }, () => {
                console.log(this.state.listHoadon)
            });

        } else {
            this.setState({ listHoadon: [] }, () => {
                console.log(this.state.listHoadon)
            });
        }
    }
    // componentDidMount() {
    //     BillService.getBills()
    //         .then(({ data }) => {
    //             if (data["success"]) {
    //                 this.setState({
    //                     listHoadon: data['data'],
    //                 });
    //             }
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         });
    // }
    render() {
        const listHoadon = this.state.listHoadon ? this.state.listHoadon : [];

        let itemElement = <View></View>
        if (listHoadon) {
            console.log(listHoadon)
            itemElement = listHoadon.map(item => (
                <TouchableOpacity key={item.maHD} style={styles.Container} onPress={() => {
                    this.props.navigation.navigate('InvoiceDetail', { item })
                }} >
                    <View >
                        <Text style={styles.Ma}> Mã hóa đơn :{item.maHD} </Text>
                        <Text style={styles.Price}>  Tổng tiền :{item.tongGia}</Text>
                        <Text style={styles.Tus}>  Trạng thái :{item.trangThai}</Text>
                    </View>
                </TouchableOpacity >
            ));
        }
        return (

            <View>
                <View style={styles.Name}>
                    <Text style={styles.Inf_in}> Họ tên: {this.state.user.tenKH} </Text>
                    <Text style={styles.Inf_in}> Số điện thoại: {this.state.user.sdt}</Text>
                    <Text style={[styles.Inf_in, { marginBottom: 10 }]}> Địa chỉ: {this.state.user.diaChi}</Text>
                </View>
                <ScrollView>
                    <View style={{ flexDirection: 'row', backgroundColor: '#fff', height: 50 }}>
                        <Text style={{ fontSize: 25, color: '#000' }}> Lịch sử mua hàng</Text>
                    </View>

                    <View>
                        {itemElement}

                        <TouchableOpacity style={styles.Container}>
                            <View >
                                <Text style={styles.Ma}> Mã hóa đơn : </Text>
                                <Text style={styles.Price}>  Tổng tiền :</Text>
                                <Text style={styles.Tus}>  Trạng thái :</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </View>
        );
    }
}
export default Bill;

const styles = StyleSheet.create({
    Name: {
        marginTop: 10,
        paddingLeft: 10,
    },
    Container: {
        width: "90%",
        alignSelf: "center",
        marginTop: 5,
        marginBottom: 5,
        elevation: 2,
        height: 100,
        borderRadius: 20,
        backgroundColor: '#E6FFFA',
    },
    Inf_in: {
        fontSize: 18,
        color: '#444D49',
    },
    Ma: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: "bold"
    },
    Price: {
        fontSize: 18,
        textAlign: "right",
        paddingRight: 10,
        fontWeight: "bold",
        color: '#9A0909',
    },
    Tus: {
        fontSize: 18,
        fontWeight: "bold",
        color: '#0E6D47',
    },
})