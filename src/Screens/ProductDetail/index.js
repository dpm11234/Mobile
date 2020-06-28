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
} from 'react-native';
import { styles } from './styles';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableTitle: ['Tương thích:', 'Jack cắm:', 'Công nghệ âm thanh:',
                'Kết nối cùng lúc:', 'Phím điều khiển:', 'Độ dài dây:', 'Trọnglượng:', 'Thương hiệu của:'],
            tableData: [
                ['Windows'],
                ['USB'],
                ['Âm thanh vòm 7.1'],
                ['1 thiết bị'],
                ['Mic thoạiTăng/giảm âm lượng'],
                ['2 m'],
                ['520g (kèm hộp)'],
                ['Trung Quốc']
            ]

        }
    }

    clickEventListener() {
        Alert.alert("Thành công", "Thêm sản phẩm vào giỏ hàng")
    }

    render() {
        const state = this.state;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <ScrollView>
                        <View style={{ alignItems: 'center', marginHorizontal: 30 }}>
                            <Image style={styles.productImg} source={require('../../assets/images/tai-nghe-iphone-5.jpg')} />
                            <Text style={styles.name}>Tai nghe iPhone</Text>
                            <Text style={styles.price}> 40.000 đồng</Text>
                            <Text style={styles.description}>
                                Tai nghe Iphone 5/5s/5c là phiên bản tốt nhất trên thị trường tai nghe Earpods hiện nay.
                                Tai nghe được thiết kế khá ấn tượng, chất lượng âm thanh tốt, Jack cắm chuẩn 3.5 mm bạn có thể sử dụng loại tai nghe này cho các dòng máy HTC, Sony, Samsung, LG, Nokia...
                                Nghe hay hơn rất nhiều so với tai nghe zin của những hãng này.
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
                                        <Rows data={state.tableData} flexArr={[1]} style={styles.row} textStyle={styles.text} />
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