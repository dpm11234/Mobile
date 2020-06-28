import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({

    quang_cao: {
        width: '100%',
        flexDirection: 'row',
        height: 100, 
        // borderWidth: 1 ,
        // backgroundColor: "white",
        
     },
     img:{
        flex: 1 ,
        width: '50%',
        height:'100%' ,
        paddingLeft:30,
        paddingTop:20,
        textAlignVertical: 'center',
        borderWidth: 1 ,
        borderRadius: 15,
        borderColor: 'red',
        
     },
  
    title:{
        color: 'black',
        // textAlign: "center",
      padding: 2, 
        fontSize: 14,
        marginLeft: 10,
    }, 
    textcontent:{
        flex: 1,
        width: '50%',
        height:'100%',
      
    }
}); 