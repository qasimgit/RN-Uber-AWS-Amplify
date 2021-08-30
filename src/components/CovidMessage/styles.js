import { StyleSheet } from "react-native";
import { themeColors } from "../../constants/themeColors";


const styles = StyleSheet.create({

    container: {
        backgroundColor: themeColors.blueColor,
        padding: 15,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10


    },

    title: {
        color: 'white',
        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 10

    },

    text: {
        color: "#bed9ff",
        fontSize: 15,
        fontWeight: "bold"

    },

    learnMore: {
        color: 'white',
        fontSize: 15,
        fontWeight: "bold"

    }
})

export default styles