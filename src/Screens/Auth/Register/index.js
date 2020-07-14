import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet, Dimensions,
    ImageBackground,
    TextInput,
    KeyboardAvoidingView,
    Alert
} from 'react-native';
import bg from '../../../assets/images/login-bg.jpg'

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
class index extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            showPass: true,
            fullname: "",
            username: "",
            passwword: "",
            confirmpass: "",
            message: ""
        }
    }
    // showPass = () => {
    //     if (this.state.press == false) {
    //         this.setState({ showPass: false, press: true })
    //     } else {
    //         this.setState({ showPass: true, press: false })
    //     }
    // }
    checkConfirmPassword = () => {
        if (this.state.passwword === this.state.confirmpass) {
            return true;
        }
        else {
            return false;

        }

    }
    createAccount = () => {
        if (this.state.fullname != "") {
            if (this.state.username != "") {
                if ((this.state.passwword != "") && (this.state.confirmpass != "")) {
                    if (this.checkConfirmPassword() == true) {
                        Alert.alert("Message", "Tạo")
                    } else {
                        Alert.alert("Message", "Mật khẩu không khớp")
                    }
                }
                else {
                    Alert.alert("Message", "Chưa điền mật khẩu")
                }
            } else {
                Alert.alert("Message", "Chưa điền tài khoản");
            }
        } else {
            Alert.alert("Message", "Chưa điền họ tên");
        }
    }

    render() {
        return (
            <View>
                <ImageBackground source={bg} style={styles.backgroundcontainer}>
                    <KeyboardAvoidingView
                        style={{}} behavior="padding"
                    >
                        <View style={[styles.logoContainer]}>
                            <Text style={styles.logoText}>Register</Text>
                        </View>
                        <View><Text>{this.state.message}</Text></View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder={'Nhập họ tên . . .'}
                                placeholderTextColor={'rgba(0,0,0,0.8)'}
                                underlineColorAndroid='transparent'
                                value={this.state.fullname}
                                onChangeText={(fullname) => this.setState({ fullname: fullname })}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder={'Tài khoản . . .'}
                                placeholderTextColor={'rgba(0,0,0,0.8)'}
                                underlineColorAndroid='transparent'
                                value={this.state.username}
                                onChangeText={(username) => this.setState({ username: username })}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder={'Nhập mật khẩu . . .'}
                                secureTextEntry={this.state.showPass}
                                placeholderTextColor={'rgba(0,0,0,0.8)'}
                                underlineColorAndroid='transparent'
                                value={this.state.passwword}
                                onChangeText={(passwword) => this.setState({ passwword: passwword })}
                            />
                        </View >
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder={'Xác nhận mật khẩu . . .'}
                                secureTextEntry={this.state.showPass}
                                placeholderTextColor={'rgba(0,0,0,0.8)'}
                                underlineColorAndroid='transparent'
                                value={this.state.confirmpass}
                                onChangeText={(confirmpass) => this.setState({ confirmpass: confirmpass })}
                            />
                        </View >
                        <TouchableOpacity style={styles.btnLogin} activeOpacity={0.9}
                            onPress={() => {
                                this.createAccount()
                            }}>
                            <Text style={styles.text}>Tạo mới</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnCreateAccount} onPress={() => {
                            this.props.navigation.navigate('Login');
                        }}>
                            <Text style={styles.textCreateAccount}>Tôi đã có tài khoản</Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                </ImageBackground >
            </View>
        );
    }
}

export default index;
const styles = StyleSheet.create({
    backgroundcontainer: {
        flex: 0,
        flexDirection: "column",
        width: screenWidth,
        height: screenHeight,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    logoContainer: {
        alignItems: 'flex-start',
        paddingLeft: 40,
        paddingBottom: 50
    },
    logo: {
        width: 120,
        height: 120,
        borderRadius: 70,
    },

    logoText: {
        color: 'white',
        fontSize: 50,
        fontWeight: "bold",
        marginTop: 10,
        opacity: 0.9,
        fontFamily: "Raleway-Black",
    },
    inputContainer: {
        marginTop: 0,
    },
    input: {
        width: screenWidth - 55,
        height: 55,
        borderRadius: 45,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(255,255,255,0.7)',
        color: 'rgba(0,0,0,0.9)',
        marginHorizontal: 25,
        marginTop: 20
    },
    inputIcon: {
        position: 'absolute',
        top: 20,
        left: 5,
    },
    btnLogin: {
        flex: 0,
        alignSelf: "center",
        width: screenWidth - 150,
        height: 50,
        borderRadius: 45,
        backgroundColor: 'orange',
        justifyContent: "center",
        marginTop: 20,
        elevation: 10,
    },
    text: {
        color: "white",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    },
    textCreateAccount: {
        color: "white",
        textAlign: "center",
        fontSize: 15,
        marginTop: 15
    },
    btnCreateAccount: {
        color: 'white',

    }
});
