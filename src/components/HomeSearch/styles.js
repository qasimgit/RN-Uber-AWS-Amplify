import { StyleSheet } from "react-native";
import { themeColors } from "../../constants/themeColors";


const styles = StyleSheet.create({

    container: {

    },

    inputBox: {
        backgroundColor: themeColors.lightGrayColor,
        margin: 10,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"


    },

    inputText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#535353'

    },

    timeContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 100,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 20
    },

    row: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        borderBottomWidth: 1,
        borderColor: themeColors.dimlightGrayColor

    },

    iconContainer: {
        backgroundColor: themeColors.grayColor,
        padding: 10,
        borderRadius: 25

    },

    destinationText: {
        marginLeft: 10,
        fontWeight: '600',
        fontSize: 15

    }



})

export default styles