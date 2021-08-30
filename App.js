import React from 'react'
import { StatusBar } from 'react-native'
import DestinationSearch from './src/screens/DestinationSearch'
import HomeScreen from './src/screens/HomeScreen'


const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      {/* <HomeScreen /> */}
      <DestinationSearch />
    </>
  )
}

export default App
