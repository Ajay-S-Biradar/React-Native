import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

import Footer from './components/Footer'
import Body from './components/Body'
import Header from './components/Header'

const Home = ({navigation}) => {
  return (
    <SafeAreaView>
    <View>
        {/* <Header /> */}
        <Body navigation={navigation}/>
        <Footer />
    </View>
    </SafeAreaView>
  )
}

export default Home