import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
      flex:1,
      marginTop:20,
      backgroundColor: '#fff'
    },
    productImg:{
      width:200,
      height:200,
    },
    name:{
      fontSize:28,
      color:"#696969",
      fontWeight:'bold'
    },
    price:{
      marginTop:10,
      fontSize:18,
      color:"green",
      fontWeight:'bold'
    },
    description:{
      textAlign:'center',
      marginTop:10,
      color:"#696969",
    },
    star:{
      width:40,
      height:40,
    },
    btnColor: {
      height:30,
      width:30,
      borderRadius:30,
      marginHorizontal:3
    },
    btnSize: {
      height:40,
      width:40,
      borderRadius:40,
      borderColor:'#778899',
      borderWidth:1,
      marginHorizontal:3,
      backgroundColor:'white',
  
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    starContainer:{
      justifyContent:'center', 
      marginHorizontal:30, 
      flexDirection:'row', 
      marginTop:20
    },
    separator:{
      height:2,
      backgroundColor:"#eeeeee",
      marginTop:20,
      marginHorizontal:30
    },
    shareButton: {
      marginTop:10,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:30,
      backgroundColor: "#00BFFF",
    },
    shareButtonText:{
      color: "#FFFFFF",
      fontSize:20,
    },
    addToCarContainer:{
      marginHorizontal:30
    },
    buy:{
      marginHorizontal:30,
    },
    ts:{
      fontSize:20,
      marginTop:20,
      marginLeft:20
    }, 
    tskt:{
      flex: 1, padding: 10, paddingTop: 30, backgroundColor: '#fff'
    },
    head: {  height: 40,  backgroundColor: '#f1f8ff'  },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: {  height: 28  },
    text: { textAlign: 'center' }
  });     