import {StyleSheet} from "react-native";

const style=StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: "space-between",
        padding: 10,

    },
    midContainer: {
        justifyContent: "space-around",
    },
    leftContainer: {
        flexDirection: 'row',
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 15,

    },
    username :{
        fontWeight: "bold",
        fontSize: 16,
    },
    lastMessage :{
        color: "grey",
        fontSize: 16,
    },
    time :{
        color: "grey",
        fontSize: 14,
    },

});

export default style;