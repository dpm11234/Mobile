import React from 'react';
import {
   StyleSheet,
   View,
   Text,
   Dimensions,
   Image
} from 'react-native';

import Carousel from 'react-native-snap-carousel';

const styles = StyleSheet.create({
   imgheight: {
      height:'30px',
   }, 
} );
const AppCarousel = (props) => {
   console.disableYellowBox = true;
   const screenWidth = Dimensions.get('window').width;
   const screenHeight = Dimensions.get('window').height;
   const _renderItem = ({ item }) => {
      return (
         <View>
            <Text>{item.title}</Text>
            <Image style={{ width: screenWidth / 2,height:screenHeight/4}} source={require('../../assets/images/Loa-sony-srs-xb12-extra-bass.jpg')} />
         </View>
      );
   };

   return (
      <>
         <Carousel
            data={props.data}
            renderItem={_renderItem}
            sliderWidth={screenWidth}
            itemWidth={screenWidth / 2}
            loop={true}
         />
      </>
   );
};

export default AppCarousel;
