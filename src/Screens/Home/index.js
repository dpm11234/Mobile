import React from 'react';
import { ScrollView, View } from 'react-native';

import News from '../../components/news';
import News1 from '../../components/news1';
import AppCarousel from '../../components/carousel';

const HomeScreen = ({ navigation }) => {
    let data = [1, 2, 3, 4, 5, 6, 7];

    return (
        <ScrollView>
            <News />
            <View style={{ marginBottom: 15 }}>
                <AppCarousel
                    data={data}
                />
            </View>
            <View style={{ marginBottom: 15 }}>
                <News1 navigation={navigation} />
            </View>

        </ScrollView>
    );
}

export default HomeScreen;
