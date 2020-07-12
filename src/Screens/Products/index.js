import React, { Component } from 'react';
import {
    Image,
    Text,
    View,
    Dimensions,
    ScrollView,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { withNavigation } from 'react-navigation';

import { ProductService } from '../../services';
import { environment } from '../../environment';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const productWidth = (screenWidth - 50) / 2;
const productImageHeight = (productWidth / 380) * 450;
class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listProducts: [],
        };
    }

    componentDidMount() {
        ProductService.getAll()
            .then(({ data }) => {
                if (data["success"]) {
                    this.setState({
                        listProducts: data['data'],
                    });
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {

        const { listProducts } = this.state;

        const itemElement = listProducts.map(item => (
            <TouchableOpacity key={item.maSP} style={styles.productContainer}>
                <View>
                    <View>
                        <Image style={styles.productImage} source={{ uri: `${environment.domain}/image/${item.img}` }} />
                    </View>
                    <View>
                        <Text style={styles.productName} >{item.tenSP}</Text>
                        <Text style={styles.productPrice}>Giá: {item.gia}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        ));

        return (
            <ScrollView style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Danh sách Sản phẩm</Text>
                </View>
                <View style={styles.body}>
                    {
                        itemElement
                    }
                </View>
            </ScrollView>
        );
    }
};

export default Products;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
    },
    titleContainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    tagContainer: {
        flexWrap: 'wrap',
    },
    title: {
        color: '#D3D3CF',
        fontSize: 20,
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: "wrap"
    },
    productContainer: {
        marginTop: 20,
        width: productWidth,
        borderRadius: 20,
        elevation: 1,
        backgroundColor: '#F5F5F5',
    },
    productImage: {
        marginTop: 1,
        marginLeft: 4,
        width: productWidth - 8,
        height: productImageHeight - 10,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        resizeMode: 'stretch',
    },
    productName: {
        marginLeft: 10,
        fontSize: 18,
        flexDirection: 'column',
    },
    productPrice: {
        marginLeft: 10,
        fontSize: 18,
        marginBottom: 5
    },
});
