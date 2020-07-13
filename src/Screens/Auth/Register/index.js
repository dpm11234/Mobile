import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet, Dimensions,
    ImageBackground,
    TextInput,
    KeyboardAvoidingView
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
            press: false
        }
    }
    // showPass = () => {
    //     if (this.state.press == false) {
    //         this.setState({ showPass: false, press: true })
    //     } else {
    //         this.setState({ showPass: true, press: false })
    //     }
    // }

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
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder={'Full name . . .'}
                                placeholderTextColor={'rgba(0,0,0,0.8)'}
                                underlineColorAndroid='transparent'
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder={'Username . . .'}
                                placeholderTextColor={'rgba(0,0,0,0.8)'}
                                underlineColorAndroid='transparent'
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder={'Password . . .'}
                                secureTextEntry={this.state.showPass}
                                placeholderTextColor={'rgba(0,0,0,0.8)'}
                                underlineColorAndroid='transparent'
                            />
                        </View >
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder={'Confirm . . .'}
                                secureTextEntry={this.state.showPass}
                                placeholderTextColor={'rgba(0,0,0,0.8)'}
                                underlineColorAndroid='transparent'
                            />
                        </View >
                        <TouchableOpacity style={styles.btnLogin} activeOpacity={0.9}
                            onPress={() => {
                                this.props.navigation.navigate('Login');
                            }}>
                            <Text style={styles.text}>Create </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnCreateAccount} onPress={() => {
                            this.props.navigation.navigate('Login');
                        }}>
                            <Text style={styles.textCreateAccount}>Already have an account ? Login here</Text>
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
        elevation:10,
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
