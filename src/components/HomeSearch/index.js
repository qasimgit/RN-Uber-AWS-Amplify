import React from 'react'
import { Text, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import styles from './styles'
import { themeColors } from '../../constants/themeColors'

const HomeSearch = () => {
    return (
        <View>
            <Text>Search Component</Text>

            {/* Input Box */}
            <View style={styles.inputBox}>
                <Text style={styles.inputText} >Where To?</Text>

                <View style={styles.timeContainer} >
                    <AntDesign name="clockcircle" size={16} color="#535353" />
                    <Text>Now</Text>
                    <MaterialIcons name="keyboard-arrow-down" size={16} />
                </View>
            </View>

            {/* Previous Destination */}
            <View style={styles.row} >
                <View style={styles.iconContainer}>
                    <AntDesign name="clockcircle" size={20} color={themeColors.whiteColor} />
                </View>
                <Text style={styles.destinationText}>Spin NightClub</Text>
            </View>

            <View style={styles.row} >
                <View style={[styles.iconContainer, { backgroundColor: themeColors.blueColor }]}>
                    <Entypo name="home" size={20} color={themeColors.whiteColor} />
                </View>
                <Text style={styles.destinationText}>Spin NightClub</Text>
            </View>

            {/* Home Destination */}

        </View>
    )
}

export default HomeSearch
