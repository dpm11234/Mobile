import  React from 'react';
import {styles}  from '../styles'
import {
  Image, 
  Text,
  View,
  Dimensions,
  ScrollView
} from 'react-native'; 
const Listkhuyenmai = () => 
{
  const screenHeight = Dimensions.get('window').height;
   const screenWidth = Dimensions.get('window').width;
  return(
    <ScrollView>
    <View>
      {/* <View style={{width:'100%',height:screenHeight/3}} >
          <Image style={{width:'100%',height:'100%',position:'relative' } }source={require('../../assets/images/tai-nghe-jbl-t500btblk.jpg')}>
          </Image>
          <Text style={{position:'absolute',color:'red',fontSize:30,right:10,top:100,fontFamily:'Open Sans'}}>SALE!</Text>
          <View style={{width:'100%',height:screenHeight/20}}>
            <Text style={styles.title}>
              Khuyến mãi hơn cả khuyến mãi 
            </Text>
          </View>
      </View> */}
      <View style={{width:'100%',height:screenHeight/3,paddingTop:40}}>
        <Image style={{width:'100%',height:'100%',position:'relative' } }source={require('../../assets/images/Loa-bose-Soundlink-mini.jpg')}>
            </Image>
            <Text style={{position:'absolute',color:'white',transform:[{rotate:"-20deg"}],fontSize:22,left:120,bottom:90,fontFamily:'Open Sans'}}>SALE UP TO 50%</Text>
      </View>
      {/* <View style={{width:'100%',height:screenHeight/2,paddingTop:40}}>
        <Image style={{width:'100%',height:'100%',position:'relative' } }source={require('../../assets/images/airpods.jpg')}>
              </Image>
              <Text style={{position:'absolute',color:'red',top:50,fontSize:34}}>Big sale</Text>
      </View> */}
    </View>
    {/* <View style={{width:'100%',height:screenHeight/2,paddingTop:40}}>
      <View style={{width:'100%', height:'20%'}}>
        <Text> Loa bluetooth</Text>
      </View>
      <View style={{width:'100%', height:'80%'}}>
        <View style={{width:'100%', height:'50%'}}>
            <View style={{width:'50%', height:'100%',alignItems:'center'}} >
              <View style={{width:'90%', height:'90%'}} >
                <Image style={{width:'100%',height:'100%' } }source={require('../../assets/images/Loa-bose-Soundlink-mini.jpg')}> </Image>
              </View>
            </View>
            <View  style={{width:'50%', height:'100%'}}>
            <View style={{width:'90%', height:'90%'}} >
                <Image style={{width:'100%',height:'100%' } }source={require('../../assets/images/Loa-bose-Soundlink-mini.jpg')}> </Image>
              </View>
            </View>
        </View>
        <View style={{width:'100%', height:'50%'}}>
          <View style={{width:'50%', height:'100%'}} ></View>
          <View  style={{width:'50%', height:'100%'}}></View>
        </View>
      </View>
    </View> */}
    </ScrollView>
  );
};
export default Listkhuyenmai;