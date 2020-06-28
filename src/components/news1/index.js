import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    FlatList,
    ActivityIndicator,
    TouchableOpacity,
    Alert
} from 'react-native';
import { withNavigation } from 'react-navigation';

import { styles } from './styles';
export default class News1 extends Component {
    constructor(props) {
        super(props)
        this.state = { SanPhams: [], isLoading: true }
    }
    componentDidMount() {
        const url = 'https://gist.githubusercontent.com/PhanNhan123/244d4205ea5957b23f9f65a7cb34dcdf/raw/19c88f461db8d14a3160b0665d265bb08ae34120/sampham.json';
        return fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    SanPhams: responseJson.sanpham,
                    isLoading: false,

                })
            })
            .catch((error) => {
                console.error(error);
            }
            )
    }
    // const screenHeight = Dimensions.get('window').height;
    // const screenWidth = Dimensions.get('window').width;

    //  state ={
    //      Sanphams:[
    //          { TenSP:'Ten 1',IMG:'https://hdradio.vn/upload/hinhanh/loa-di-dong/jbl/FLIP5/Loa-JBL-FLIP5.jpg',CongNghe:'Cong nghe 1'},
    //          { TenSP:'Ten 2',IMG:'https://hdradio.vn/upload/hinhanh/loa-di-dong/jbl/FLIP5/Loa-JBL-FLIP5.jpg',CongNghe:'Cong nghe 2'},
    //          { TenSP:'Ten 3',IMG:'https://hdradio.vn/upload/hinhanh/loa-di-dong/jbl/FLIP5/Loa-JBL-FLIP5.jpg',CongNghe:'Cong nghe 3'},
    //          { TenSP:'Ten 4',IMG:'https://hdradio.vn/upload/hinhanh/loa-di-dong/jbl/FLIP5/Loa-JBL-FLIP5.jpg',CongNghe:'Cong nghe 4'},
    //          { TenSP:'Ten 5',IMG:'https://hdradio.vn/upload/hinhanh/loa-di-dong/jbl/FLIP5/Loa-JBL-FLIP5.jpg',CongNghe:'Cong nghe 5'},
    //          { TenSP:'Ten 6',IMG:'https://hdradio.vn/upload/hinhanh/loa-di-dong/jbl/FLIP5/Loa-JBL-FLIP5.jpg',CongNghe:'Cong nghe 6'}
    //      ]
    //  }
    render() {
        if (this.state.isLoading) {
            return (
                <View>
                    <ActivityIndicator />
                </View>
            )
        }

        return (
            <View>
                <FlatList
                    data={this.state.SanPhams}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('ProductDetail');
                        }}>
                            <SanPhamItem items={item} index={index} />
                        </TouchableOpacity>
                    }
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            // <View style={styles.quang_cao}>
            //         <View style={styles.img} >
            //             <Image  style={{width: '80%' , height : '80%'}} source={require('../../assets/images/loa-jbl-charge-4-black.jpg')}></Image>

            //         </View>
            //         <View style={styles.textcontent}>
            //             <Text style={styles.title}>
            //                 Loa bluetooth JBL Charge 4 chính hãng giá tốt nhất 2019
            //             </Text>
            //             <Text style={styles.title}>
            //                 Thiết kế nhỏ gọn, thuận tiện khi đi du lịch, dã ngoại
            //             </Text>

            //         </View>
            // </View> 
        );
    }
}
export class SanPhamItem extends Component {

    state = {}
    render() {
        return (
            <View style={styles.quang_cao}>
                <View style={styles.img} >
                    <Image style={{ width: '80%', height: '80%' }} source={{ uri: this.props.items.IMG }}></Image>

                </View>
                <View style={styles.textcontent}>
                    <Text style={styles.title}>
                        {this.props.items.TenSP}
                    </Text>
                    <Text style={styles.title}>
                        {this.props.items.CongNghe}
                    </Text>

                </View>
            </View>
        );
    }
}
