import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  AsyncStorage,ToastAndroid
} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
class Profile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {}
    }

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
      this.setState({ user: JSON.parse(user) });
    }
  }

  logout = async () => {
    await AsyncStorage.removeItem('user');
    await AsyncStorage.removeItem('isLogin');
    this.props.navigation.navigate('Login');
    ToastAndroid.show("Đã đăng xuất", ToastAndroid.SHORT);
  }

  render() {
    return (

      <ImageBackground style={styles.container} source={require('../../assets/images/profile-background.png')}>
        <View style={styles.header}>
          <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
        </View>
        <View style={styles.footer} >

          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{this.state.user.tenKH}</Text>
              <Text style={styles.text}>Số điện thoại: {this.state.user.sdt}</Text>
              <Text style={styles.text}>Địa chỉ: {this.state.user.diaChi}</Text>
              <TouchableOpacity style={styles.buttonLogin} onPress={() => this.logout()}>
                <Text style={styles.ButtonText}>Đăng xuất</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,

  },
  footer: {
    flex: 2,
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 50,
    elevation: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 4,
    marginTop: 50,
    alignSelf: "center",
    borderColor: "white",

  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
  },
  name: {
    fontSize: 30,
    paddingBottom: 10,
    color: "#696969",
    fontWeight: "600",
    textAlign: "center"
  },
  text: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    padding: 10,
    paddingLeft: 40,
  },
  buttonLogin: {
    marginTop: 50,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: "center",
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 15,
    backgroundColor: "darkorange",
    elevation: 10,
  },
  ButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  }
});
