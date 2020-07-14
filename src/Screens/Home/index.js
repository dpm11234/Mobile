import React from 'react';
import { ScrollView, View, Text, StyleSheet, StatusBar } from 'react-native';

import News from '../../components/news';
import News1 from '../../components/news1';
import AppCarousel from '../../components/carousel';
import Find from '../../components/sreach';
const HomeScreen = ({ navigation }) => {
    let data = [1, 2, 3, 4, 5, 6, 7];

    return (
        <ScrollView>
            {/* <Find /> */}
            {/* <News /> */}
            <View style={{ marginBottom: 15 }}>
                <AppCarousel
                    data={data}
                    navigation={navigation}
                />
            </View>
            <View><Text style={styles.title}>Sản phẩm mới nhất</Text></View>
            <View style={{ marginBottom: 15 }}>
                <News1 navigation={navigation} />
            </View>

        </ScrollView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    title: {
        margin: 10,
        color: "#696969",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 15,
        paddingLeft: 10
    }
})