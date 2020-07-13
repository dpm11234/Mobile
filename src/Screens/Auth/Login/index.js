import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet, Dimensions,
    ImageBackground,
    Image,
    TextInput,
    KeyboardAvoidingView
} from 'react-native';
import bg from '../../../assets/images/login-bg.jpg';
import logo from '../../../assets/images/login-logo.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';

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
            press: false
        }
    }


    render() {
        return (
            <View>
                {/* Login screeen */}
                <ImageBackground source={bg} style={styles.backgroundcontainer}>
                    <KeyboardAvoidingView
                        style={styles.container}
                        behavior="padding"
                    >
                        <View style={[styles.logoContainer]}>
                            <Image source={logo} style={styles.logo} />
                            <Text style={styles.logoText}>Đăng nhập</Text>
                        </View>

                        <View style={styles.inputContainer}>
                            <Icon name={'user'} size={28} color='rgba(0,0,0,0.7)'
                                styles={styles.inputIcon} />
                            <TextInput
                                style={styles.input}
                                placeholder={'Username'}
                                placeholderTextColor={'rgba(0,0,0,0.7)'}
                                underlineColorAndroid='transparent'
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Icon name={'lock'} size={28} color={'rgba(0,0,0,0.7)'}
                                styles={styles.inputIcon} />
                            <TextInput
                                style={styles.input}
                                placeholder={'Password'}
                                secureTextEntry={this.state.showPass}
                                placeholderTextColor={'rgba(rgba(0,0,0,0.7)'}
                                underlineColorAndroid='transparent'
                            />


                        </View >
                        <TouchableOpacity style={styles.btnLogin} activeOpacity={0.9}
                            onPress={() => {
                                this.props.navigation.navigate('Launch');
                            }}>
                            <Text style={styles.text}>Đăng nhập</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnCreateAccount} onPress={() => {
                            this.props.navigation.navigate('Register');
                        }}>
                            <Text style={styles.textCreateAccount}>Create an account</Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>

                </ImageBackground >
                <TouchableOpacity style={styles.skip}
                    onPress={() => {
                        this.props.navigation.navigate('Home');
                    }}>
                    <Text style={styles.skipText}>Skip  </Text>
                </TouchableOpacity>
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
        alignItems: 'center',
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
        fontFamily: "Raleway-Black"
    },
    inputContainer: {

        marginTop: 20,
        flexDirection:"row",
        alignItems:"center"
    },
    input: {
        width: screenWidth -100,
        height: 55,
        borderRadius: 20,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(255,255,255,0.7)',
        color: 'rgba(0,0,0,0.9)',
        marginHorizontal: 25,
    },
    inputIcon: {
        position:"absolute",
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
        opacity: 0.8
    },
    text: {
        color: "white",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    },
    textCreateAccount: {
        color: "#696969",
        textAlign: "center",
        fontSize: 15,
        marginTop: 15
    },
    btnCreateAccount: {
        color: 'white',

    },
    skip: {
        position: "absolute",
        alignSelf: 'flex-end',
        marginTop: 20,
        
    },
    skipText: {
        color: 'white',
        fontSize: 18,
        fontWeight: "bold",
    }
});
