import React from 'react';
import {
   View,
   Text,
   Image,
   Dimensions
} from 'react-native';

import { styles } from './styles';

// fira code
const News = () => {

   const screenHeight = Dimensions.get('window').height;
   const screenWidth = Dimensions.get('window').width;

   return (
      <>
         <View style={{ paddingHorizontal: 10, backgroundColor: '#fff' }}>
            <Text style={styles.title}>
               KINH NGHIỆM HAY - VIDEO
            </Text>
            <Text>
               Trọn bộ hình nền Huawei Mate 10 đẹp “miễn chê” cho mọi smartphone
            </Text>
            <Text>
               Rò rỉ thông tin Nokia 6 (2018): Màn hình tràn viền, tỉ lệ 18:9
            </Text>
         </View>
         <View style={styles.quang_cao}>
            <View style={{ flex: 1 }}>
               <Image style={{ width: screenWidth / 2 }} source={require('../../assets/images/banner-TET_DMX_banner_260x92.jpg')} />
            </View>
            <View style={{ flex: 1 }}>
               <Image style={{ width: screenWidth / 2 }} source={require('../../assets/images/banner-Sticky.png')} />
            </View>
         </View>
      </>
   );
};

export default News;
