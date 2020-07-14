

import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native'
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export const styles = StyleSheet.create(
    {

        procduct_item: {
            borderRadius: 20,
        },
        img: {
            width: screenWidth / 2,
            height: screenHeight / 4,
            borderRadius: 20,


        },

    });

