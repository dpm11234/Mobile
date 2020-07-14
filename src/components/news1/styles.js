

import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({

    quang_cao: {
        width: '95%',
        flexDirection: 'row',
        height: 120,
        // borderWidth: 1 ,
        // backgroundColor: "white",
        marginBottom: 10,
        backgroundColor: "#fff",
        alignSelf: "center",
        borderRadius: 20,
        elevation: 3
    },
    img_item: {
        flex: 1,
        paddingTop: 1,
        width: '50%',
        height: '100%',
        textAlign: "center",
        textAlignVertical: 'center',
        borderRadius: 15,
    },
    img: {
        width: '100%', height: '100%',
        borderRadius: 15,
    },

    title_1: {
        color: '#000',
        // textAlign: "center",
        marginTop: 10,
        fontSize: 15,
        fontWeight: "bold",
        marginLeft: 10,
    },
    title_2: {
        color: 'darkgray',
        // textAlign: "center",
        marginTop: 10,
        fontSize: 14,
        marginLeft: 10,
    },
    textcontent: {
        flex: 1,
        width: '50%',
        height: '100%',

    },
    price: {
        color: "orangered",
        marginTop: 10,
        marginRight: 16,
        alignSelf: "flex-end",
        fontSize: 16,
        fontWeight: "bold"
    }

});

