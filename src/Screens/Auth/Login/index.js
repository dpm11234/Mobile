import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class index extends Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View>
                <Text>Login</Text>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => {
                        this.props.navigation.navigate('Launch');
                    }}
                >
                    <Text>Đăng Nhập</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default index;
