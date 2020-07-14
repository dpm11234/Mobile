import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ImageBackground,

} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
class Profile extends Component {

  render() {
    return (

      <ImageBackground style={styles.container} source={require('../../assets/images/profile-background.png')}>
        <View style={styles.header}>
          <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
        </View>
        <View style={styles.footer} >

          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>John Doe</Text>
              <Text style={styles.text}>Tài khoản: Hiếu Lan</Text>
              <Text style={styles.text}>Số điện thoại: 0909090909</Text>
              <Text style={styles.text}>Địa chỉ: TPHCM</Text>
              <TouchableOpacity style={styles.buttonLogin}>
                <Text style={styles.ButtonText}>Log out</Text>
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
