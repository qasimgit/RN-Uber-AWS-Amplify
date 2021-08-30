import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

const CovidMessage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title} >Travel only if necassary</Text>
            <Text style={styles.text} >The times covid hit very badly, you will advise you to travel if it is necassary</Text>
            <Text style={styles.learnMore} >Learn More</Text>
        </View>
    )
}

export default CovidMessage
