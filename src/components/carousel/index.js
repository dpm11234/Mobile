

import React, { Component } from 'react';
import {
   StyleSheet,
   View,
   Text,
   Dimensions,
   Image,
   TouchableOpacity
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import { ProductService } from '../../services';
import { environment } from '../../environment';
import { styles } from './styles';
import { TouchableHighlight } from 'react-native-gesture-handler';
// const styles = StyleSheet.create({
// imgheight: {
// height:'30px',
// }, 
// } );

// const AppCarousel = (props) => {
console.disableYellowBox = true;
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
// const _renderItem = ({ item }) => {
// return (
// <View>
// <Text>{item.title}</Text>
// <Image style={{ width: screenWidth / 2,height:screenHeight/4}} source={require('../../assets/images/Loa-sony-srs-xb12-extra-bass.jpg')} />
// </View>
// );
// };

// return (
// <>
// <Carousel
// data={props.data}
// renderItem={_renderItem}
// sliderWidth={screenWidth}
// itemWidth={screenWidth / 2}
// loop={true}
// />
// </>
// );
class AppCarousel extends Component {
   constructor(props) {
      super(props);
      this.state = {
         listProducts: [],
      };
   }
   componentDidMount() {
      ProductService.getAll()
         .then(({ data }) => {
            if (data["success"]) {
               this.setState({
                  listProducts: data['data'],
               });
            }
         })
         .catch(err => {
            console.log(err);
         });
   }
   render() {

      const { listProducts } = this.state;
      const _renderItem = ({ item }) => {

         return (


            <View style={styles.product_item}>
               {/* <Text>{item.tenSP}</Text> */}
               <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductDetail', { item })}>
                  <Image style={styles.img} source={{ uri: `${environment.domain}/image/${item.img}` }} />
               </TouchableOpacity>
            </View>

         );
      };


      return (
         <>
            <Carousel
               // data={props.data}
               data={listProducts}
               renderItem={_renderItem}
               sliderWidth={screenWidth}
               itemWidth={screenWidth / 2}
               loop={true}
            />
         </>
      );
   }
};

export default AppCarousel;

