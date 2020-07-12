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
import { ProductService } from '../../services';

import { environment } from '../../environment';

import { styles } from './styles';
export default class News1 extends Component {
    constructor(props) {
        super(props)
        this.state = { SanPhams: [], isLoading: true };
    }
    componentDidMount() {
        ProductService.getTop5()
            .then(({ data }) => {
                if (data["success"]) {
                    this.setState({
                        SanPhams: data['data'],
                        isLoading: false,
                    }, () => {
                        // console.log(this.state);
                    });
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View>
                    <ActivityIndicator />
                </View>
            );
        }

        return (
            <View>
                <FlatList
                    data={this.state.SanPhams}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('ProductDetail', { item });
                        }}>
                            <SanPhamItem items={item} index={index} />
                        </TouchableOpacity>
                    }
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}
export class SanPhamItem extends Component {

    render() {
        return (
            <View style={styles.quang_cao}>
                <View style={styles.img} >
                    <Image
                        style={{ width: '80%', height: '80%' }}
                        source={{ uri: `${environment.domain}/image/${this.props.items.img}` }}></Image>

                </View>
                <View style={styles.textcontent}>
                    <Text style={styles.title}>
                        {this.props.items.tenSP}
                    </Text>
                    <Text style={styles.title}>
                        {this.props.items.congNghe}
                    </Text>

                </View>
            </View>
        );
    }
}
