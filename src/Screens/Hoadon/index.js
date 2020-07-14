import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

class HoaDon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listHoadon: [],
        };
    }

    render() {
        return (
            <ScrollView>
                <View style={{ flexDirection: 'row', backgroundColor: '#fff', height: 50 }}>
                    <Text style={{ fontSize: 25, color: '#000' }}> Lịch sử hóa đơn </Text>
                </View>

                <View>
                    <TouchableOpacity style={styles.Container}>
                        <View >
                            <Text style={styles.Ma}> Mã hóa đơn : </Text>
                            <Text style={styles.Price}>  Tổng tiền :</Text>
                            <Text style={styles.Tus}>  Trạng thái :</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Container}>
                        <View >
                            <Text style={styles.Ma}> Mã hóa đơn : </Text>
                            <Text style={styles.Price}>  Tổng tiền :</Text>
                            <Text style={styles.Tus}>  Trạng thái :</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        );
    }
}
export default HoaDon;

const styles = StyleSheet.create({

    Container: {
        marginTop: 5,
        marginBottom: 5,
        elevation: 2,
        height: 100,
        backgroundColor: '#E6FFFA',
    },
    Ma: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: "bold"
    },
    Price: {
        fontSize: 18,
        fontWeight: "bold",
        color: '#9A0909',
    },
    Tus: {
        fontSize: 18,
        fontWeight: "bold",
        color: '#0E6D47',
    }
})